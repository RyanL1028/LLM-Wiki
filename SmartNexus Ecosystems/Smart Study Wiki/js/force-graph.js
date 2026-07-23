/**
 * Force-directed graph renderer — Quartz/Obsidian style.
 * No external dependencies. Canvas 2D.
 *
 * Features:
 * - Alpha-scaled forces for smooth settling animation
 * - Dramatic hover dimming (Quartz-style spotlight effect)
 * - Zoom, pan, click-to-navigate
 * - Dark/light mode via options
 */
var ForceGraph = (function() {
  'use strict';

  function ForceGraph(canvas, options) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.edges = [];
    this.options = options || {};
    this.hoverNode = null;
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.alpha = 1;
    this.alphaTarget = 0;
    this.alphaMin = 0.001;
    this.alphaDecay = 0.028;       // faster decay for snappy settling (~2-3s)
    this.velocityDecay = 0.4;
    this.running = false;
    this._tickId = null;
  }

  ForceGraph.prototype.setData = function(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.alpha = 1;
    this.alphaTarget = 0;
  };

  /** Restart the simulation from full energy (called on zoom/user interaction) */
  ForceGraph.prototype.reheat = function() {
    this.alpha = 0.3;
    if (!this.running) this.start();
  };

  ForceGraph.prototype.start = function() {
    if (this.running) return;
    this.running = true;
    this.alpha = 1;
    var self = this;
    var step = 0;
    function tick() {
      if (!self.running) return;
      self._tick();
      step++;
      if (self.alpha < self.alphaMin && step > 120) {
        self.running = false;
      }
      if (self.running) {
        self._tickId = requestAnimationFrame(tick);
      }
    }
    this._tickId = requestAnimationFrame(tick);
  };

  ForceGraph.prototype.stop = function() {
    this.running = false;
    if (this._tickId) {
      cancelAnimationFrame(this._tickId);
      this._tickId = null;
    }
  };

  /** Clear canvas to background color */
  ForceGraph.prototype.clear = function() {
    var dpr = window.devicePixelRatio || 1;
    var W = this.canvas.width / dpr;
    var H = this.canvas.height / dpr;
    var ctx = this.ctx;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = this.options.bg || '#f8f9fa';
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  };

  ForceGraph.prototype._tick = function() {
    var nodes = this.nodes;
    var edges = this.edges;
    var n = nodes.length;
    var i, j, dx, dy, dist, force;
    var W = this.canvas.width / (window.devicePixelRatio || 1);
    var H = this.canvas.height / (window.devicePixelRatio || 1);

    // Update alpha
    this.alpha += (this.alphaTarget - this.alpha) * this.alphaDecay;

    // Apply forces (scaled by alpha for smooth settling)
    for (i = 0; i < n; i++) {
      var a = nodes[i];
      if (a.fixed) { a.vx = 0; a.vy = 0; continue; }

      // Center force
      a.vx += (W/2 - a.x) * 0.003 * this.alpha;
      a.vy += (H/2 - a.y) * 0.003 * this.alpha;

      // Repulsion between all node pairs
      for (j = i + 1; j < n; j++) {
        var b = nodes[j];
        dx = b.x - a.x;
        dy = b.y - a.y;
        dist = Math.sqrt(dx * dx + dy * dy) || 1;
        force = 80 / (dist * dist) * this.alpha;
        if (dist < 200) {
          var fx = (dx / dist) * force;
          var fy = (dy / dist) * force;
          if (!a.fixed) { a.vx -= fx; a.vy -= fy; }
          if (!b.fixed) { b.vx += fx; b.vy += fy; }
        }
      }

      // Attraction along edges
      for (j = 0; j < edges.length; j++) {
        var e = edges[j];
        var src = typeof e.source === 'object' ? e.source : null;
        var tgt = typeof e.target === 'object' ? e.target : null;
        if (!src || !tgt) continue;
        var other = null;
        if (src === a) other = tgt;
        if (tgt === a) other = src;
        if (!other) continue;
        dx = other.x - a.x;
        dy = other.y - a.y;
        dist = Math.sqrt(dx * dx + dy * dy) || 1;
        force = (dist - 40) * 0.02 * this.alpha;
        a.vx += (dx / dist) * force;
        a.vy += (dy / dist) * force;
      }

      // Position update with velocity decay (d3-force convention)
      a.x += a.vx *= this.velocityDecay;
      a.y += a.vy *= this.velocityDecay;

      // Boundary clamping
      var r = a.radius || 3;
      a.x = Math.max(r, Math.min(W - r, a.x));
      a.y = Math.max(r, Math.min(H - r, a.y));
    }

    this._draw(W, H);
  };

  ForceGraph.prototype._draw = function(W, H) {
    var ctx = this.ctx;
    var dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Background
    ctx.fillStyle = this.options.bg || '#f8f9fa';
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.translate(this.panX, this.panY);
    ctx.scale(this.zoom, this.zoom);

    var hasHover = !!this.hoverNode;

    // Edges — Quartz style: connected edges stay bright, others nearly invisible
    var i;
    for (i = 0; i < this.edges.length; i++) {
      var e = this.edges[i];
      var s = typeof e.source === 'object' ? e.source : this._findNode(e.source);
      var t = typeof e.target === 'object' ? e.target : this._findNode(e.target);
      if (!s || !t || s.x == null || t.x == null) continue;
      var hv = hasHover && (this.hoverNode.id === s.id || this.hoverNode.id === t.id);
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      if (hasHover) {
        ctx.strokeStyle = hv ? (this.options.link || 'rgba(100,140,200,0.35)') : (this.options.linkDim || 'rgba(100,140,200,0.04)');
        ctx.lineWidth = hv ? 1.4 : 0.3;
      } else {
        ctx.strokeStyle = this.options.link || 'rgba(100,140,200,0.35)';
        ctx.lineWidth = 0.6;
      }
      ctx.stroke();
    }

    // Nodes — Quartz style: hovered glows, neighbors normal, everything else dimmed
    for (i = 0; i < this.nodes.length; i++) {
      var node = this.nodes[i];
      if (node.x == null) continue;
      var hov = hasHover && this.hoverNode.id === node.id;
      var nb = !hov && hasHover && this._isNeighbor(node, this.hoverNode);
      var dim = hasHover && !hov && !nb;

      // Dimmed nodes are slightly smaller (recede visually)
      var r = node.radius || 3;
      if (dim) r *= 0.7;

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);

      if (node.center) {
        ctx.fillStyle = this.options.centerColor || '#e04020';
        ctx.shadowColor = this.options.centerColor || '#e04020';
        ctx.shadowBlur = 6;
      } else if (hov) {
        // Hovered node: bright glow (Quartz spotlight effect)
        ctx.fillStyle = this.options.centerColor || '#e04020';
        ctx.shadowColor = this.options.centerColor || '#e04020';
        ctx.shadowBlur = 14;
      } else if (nb) {
        // Connected neighbor: full brightness
        ctx.fillStyle = this.options.neighborColor || '#4a8ad4';
        ctx.shadowBlur = 0;
      } else if (dim) {
        // Unrelated node: heavily dimmed (~10% opacity)
        ctx.fillStyle = this.options.dimColor || 'rgba(100,140,200,0.10)';
        ctx.shadowBlur = 0;
      } else {
        // Default node
        ctx.fillStyle = this.options.nodeColor || '#3b72b9';
        ctx.shadowBlur = 0;
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      // Labels: center node always, hovered node always, or any node with weight > 8
      if (node.center || hov || (!hasHover && node.weight > 8)) {
        ctx.fillStyle = this.options.textColor || '#555';
        ctx.font = (node.center ? 'bold 9px' : '9px') + ' sans-serif';
        ctx.textAlign = 'center';
        var label = (node.title || '').slice(0, 14);
        ctx.fillText(label, node.x, node.y - r - 5);
      }
    }

    ctx.restore();
    ctx.restore();
  };

  ForceGraph.prototype._findNode = function(id) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].id === id) return this.nodes[i];
    }
    return null;
  };

  ForceGraph.prototype._isNeighbor = function(a, b) {
    for (var i = 0; i < this.edges.length; i++) {
      var e = this.edges[i];
      var s = typeof e.source === 'object' ? e.source.id : e.source;
      var t = typeof e.target === 'object' ? e.target.id : e.target;
      if ((s === a.id && t === b.id) || (s === b.id && t === a.id)) return true;
    }
    return false;
  };

  ForceGraph.prototype.findNodeAt = function(mx, my) {
    for (var i = this.nodes.length - 1; i >= 0; i--) {
      var n = this.nodes[i];
      var dx = n.x - mx, dy = n.y - my;
      if (dx * dx + dy * dy < (n.radius + 6) * (n.radius + 6)) return n;
    }
    return null;
  };

  ForceGraph.prototype.resize = function(W, H) {
    var dpr = window.devicePixelRatio || 1;
    this.canvas.width = W * dpr;
    this.canvas.height = H * dpr;
    this.canvas.style.width = W + 'px';
    this.canvas.style.height = H + 'px';
  };

  ForceGraph.prototype.transformMouse = function(clientX, clientY) {
    var r = this.canvas.getBoundingClientRect();
    return {
      x: (clientX - r.left - this.panX) / this.zoom,
      y: (clientY - r.top - this.panY) / this.zoom
    };
  };

  return ForceGraph;
})();
