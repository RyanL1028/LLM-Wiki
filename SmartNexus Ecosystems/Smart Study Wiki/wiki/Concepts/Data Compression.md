# Data Compression

**Summary**: The process of reducing the size of a file by encoding data more efficiently. Can be lossless (no data lost, original fully recoverable) or lossy (some data permanently removed to achieve greater reduction). Essential for efficient storage and transmission.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## Why Compress Data?

Data compression reduces the number of bits needed to represent information. The main reasons:

1. **Save storage space**: Compressed files take up less room on hard drives, SSDs, and other media.
2. **Faster transmission**: Smaller files transfer more quickly over networks (downloading, streaming, email attachments).
3. **Reduce bandwidth costs**: Less data sent means lower costs for servers and users (especially important on mobile networks).
4. **Fit within limits**: Email attachment size limits, message payload limits, and storage quotas often require compression.

Compression is applied at many levels -- individual files (ZIP, JPEG, MP3), streaming protocols, and even at the hardware level.

## Lossless Compression

**Definition**: Compression where **no data is lost**. The original file can be perfectly reconstructed from the compressed version. Used when every bit of data matters.

### Run-Length Encoding (RLE)

RLE replaces consecutive identical values with a count and the value. Simple and effective for data with many repeats.

**Example**: `AAAAABBCCCC` becomes `A5B2C4` (5 As, 2 Bs, 4 Cs).

RLE works well for:
- Simple graphics with large blocks of the same colour (e.g., BMP, icons)
- Fax transmissions
- Data with long runs of identical values

RLE is **poor** for data with few repeats -- it can even increase file size (e.g., `ABCDE` becomes `A1B1C1D1E1`).

### Huffman Coding

Huffman coding assigns shorter bit patterns to more frequent symbols and longer patterns to less frequent ones. It builds a **binary tree** where the most common characters are closest to the root (shortest path = fewest bits).

**Example**: In English text, 'e' appears far more often than 'z'. Huffman coding might assign 'e' = `01` (2 bits) and 'z' = `11011` (5 bits), reducing the total bit count.

### Common Lossless Formats

| Format | Used For |
|--------|----------|
| **ZIP** | General file compression |
| **PNG** | Images (uses DEFLATE algorithm) |
| **GIF** | Simple images, animations |
| **FLAC** | Audio (Free Lossless Audio Codec) |
| **PDF** (can be lossless) | Documents |

## Lossy Compression

**Definition**: Compression where **some data is permanently removed**. The original file cannot be perfectly reconstructed. Used when a close approximation is acceptable and greater size reduction is needed.

Lossy compression works by removing data that is **less perceptible** to human senses:

- **Images (JPEG)**: Removes fine colour detail the human eye is less sensitive to. High-frequency components in 8x8 pixel blocks are approximated or discarded.
- **Audio (MP3)**: Removes frequencies outside normal hearing range (~20 Hz -- 20 kHz), and quieter sounds masked by louder simultaneous sounds (auditory masking).
- **Video (MPEG/H.264)**: Stores only the differences between frames (inter-frame compression) along with spatial compression within each frame.

### Trade-offs of Lossy Compression

| Advantage | Disadvantage |
|-----------|--------------|
| Much smaller file sizes (often 90%+ reduction) | Quality is permanently degraded |
| Faster streaming and download | Repeated compression compounds quality loss (generation loss) |
| Practical for multimedia on limited bandwidth | Unsuitable for text, executables, or medical/scientific data |

### Common Lossy Formats

| Format | Used For | Typical Compression |
|--------|----------|---------------------|
| **JPEG** | Photographs | 10:1 to 20:1 |
| **MP3** | Music and audio | ~10:1 at 128 kbps |
| **AAC** | Audio (Apple, YouTube) | Better quality than MP3 at same bitrate |
| **MPEG / H.264** | Video | Very high, varies with settings |
| **HEVC / H.265** | 4K video | ~2x better than H.264 |

## Lossless vs Lossy: When to Use Which

| Use Case | Recommended |
|----------|-------------|
| Text documents, spreadsheets | **Lossless** |
| Software executables, source code | **Lossless** |
| Medical imaging (X-ray, MRI) | **Lossless** |
| Photos for web / social media | **Lossy** (JPEG) |
| Music streaming | **Lossy** (MP3, AAC) |
| Archiving files | **Lossless** (ZIP) |
| Professional audio production | **Lossless** (WAV, FLAC) |

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Data Compression, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Data Transmission, Cambridge Assessment International Education
- **CK-12 Computer Science** — Data Compression, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Lossless Compression]] -- Detailed treatment of RLE, Huffman coding, and LZW
- [[Lossy Compression]] -- Detailed treatment of JPEG, MP3, and perceptual coding
- [[File Size Calculation]] -- Calculating compressed vs uncompressed file sizes
- [[Bitmap Image]] -- Image data before compression
- [[Sound Sampling]] -- Audio data before compression
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Lossy means the file is corrupted" | Lossy files are deliberately and intelligently reduced; they still open and function correctly. The quality reduction may not even be noticeable at moderate compression levels. |
| "You can un-compress a lossy file and get the original back" | You cannot. The removed data is gone forever. Converting MP3 to WAV does not restore the lost frequencies. |
| "ZIP reduces any file equally" | Compression effectiveness depends heavily on the data. Already-compressed files (JPEG, MP3) compress very little when ZIPped. Text files compress dramatically. |
| "Higher compression always means worse quality" | In lossless compression, higher compression does not affect quality at all. In lossy compression, this is generally true. |
