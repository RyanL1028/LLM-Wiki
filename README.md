# LLM Wiki — Smart Study Platform

> **SmartNexus Ecosystems**: A student-made technology organisation building apps for education, wellbeing, and communication.

---

## Project Overview

This monorepo contains the full Smart Study ecosystem — an AI-powered learning platform plus supporting sites, all built with vanilla JavaScript and Firebase.

| Site | URL | Purpose |
|------|-----|---------|
| **Smart Study** | [smart-study-site.web.app](https://smart-study-site.web.app) | AI flashcards, games, chatbot tutoring |
| **SmartChatter** | [smartchatter.web.app](https://smartchatter.web.app) | Real-time class messaging |
| **Smart Study Wiki** | [smart-study-wiki.web.app](https://smart-study-wiki.web.app) | Collaborative knowledge base |
| **SmartNexus Ecosystems** | [smartnexus.web.app](https://smartnexus.web.app) | Parent company landing page |
| **Wellbeing Companion** | [wellbeing-companion-app.web.app](https://wellbeing-companion-app.web.app) | Student mental health app |

---

## Folder Structure

```
LLM Wiki/
├── init/                    # ⚙️ Dev config files
│   ├── .claude/             #    Claude Code settings
│   ├── .cursor/             #    Cursor IDE hooks & rules
│   └── .obsidian/           #    Obsidian vault config
│
├── SmartNexus Ecosystems/   # 🏢 All websites & apps
│   ├── Smart Study/         # 🔥 Main app — AI flashcards, games, chatbot
│   │   ├── index.html       #    Main SPA: study modes, games, auth, admin
│   │   ├── staff.html       #    Staff/admin dashboard
│   │   ├── shared/          #    Shared JavaScript modules
│   │   │   ├── config.js    #    Firebase init, config, notifications, FCM
│   │   │   ├── auth.js      #    Auth (Google/Microsoft/Email/WhatsApp)
│   │   │   ├── data.js      #    Data layer (progress, scores, usage)
│   │   │   ├── ai.js        #    DeepSeek AI (flashcard generation)
│   │   │   ├── chatbot.js   #    Floating AI chatbot (Base44 API)
│   │   │   ├── theme.js     #    Dark/light mode
│   │   │   └── utils.js     #    Utilities (sanitize, randomChoices, etc.)
│   │   ├── data/            #    Static data (exam questions, flashcards)
│   │   ├── firebase.json    #    Firebase hosting config
│   │   ├── firestore.rules  #    Database security rules
│   │   ├── firebase-messaging-sw.js  # FCM push notification worker
│   │   └── sw.js            #    PWA service worker
│   │
│   ├── SS-Test/             # 🧪 Test deployment mirror of Smart Study
│   │
│   ├── SmartChatter/         # 💬 Real-time class messaging
│   │   ├── chat.html         #    Chat SPA
│   │   ├── shared/           #    Shared modules (auth, config, chatbot)
│   │   ├── assets/           #    Chat-specific images
│   │   ├── firebase.json     #    Firebase hosting config
│   │   └── .firebaserc       #    Firebase deploy target
│   │
│   ├── Smart Study Wiki/    # 📚 Wiki (Quartz 4 SSG)
│   │   ├── wiki/            #    Markdown content (all subjects)
│   │   │   ├── IGCSE Chemistry/  # 150+ topic pages
│   │   │   ├── IGCSE Biology/    # Biology topic pages
│   │   │   ├── IGCSE Physics/    # Physics topic pages
│   │   │   ├── IGCSE Mathematics/ # Math topic pages
│   │   │   ├── Concepts/         # Cross-subject concept pages
│   │   │   └── Science Student Book 7/  # KS3 textbook
│   │   ├── quartz-src/      #    Quartz static site generator
│   │   │   ├── content → ../wiki  # Symlink to markdown source
│   │   │   ├── public/      #    Built HTML output (deployed)
│   │   │   └── quartz.config.ts  # Quartz configuration
│   │   ├── scripts/         #    Build scripts (link graph, search, etc.)
│   │   └── data/            #    Generated JSON (search index, graph)
│   │
│   ├── SmartNexus/          # 🏢 Parent company landing page
│   │   └── index.html       #    Single-page site
│   │
│   └── SmartHealth Hub/     # 💚 Student wellbeing app (Flask + Cloudflare)
│       ├── app.py           #    Flask backend
│       ├── worker.js        #    Cloudflare worker
│       ├── public/          #    Static assets
│       ├── templates/       #    Jinja2 templates
│       └── static/          #    CSS, JS, images
│
├── Papers/                  # 📄 Past exam papers
│   ├── Past-Paper/          #    Chem 0921 past papers
│   ├── PP-Mark-Schemes/     #    Mark schemes
│   └── Specimen-Paper/      #    CS 0478 specimen papers
│
├── resources/              # 📦 Educational content (not deployed)
│   ├── worksheets/         #    Dr Frost math worksheets (PDF, PPTX)
│   ├── workbooks/          #    Syllabus PDFs, textbooks
│   ├── source-materials/   #    Course PPTs, past papers, textbooks
│   └── templates/          #    Project templates
│
├── scripts/                # 🔧 Python scripts (syllabus conversion, wiki gen)
├── notes/                  # 📝 Personal notes & Obsidian vault
├── logs/                   # 📊 Ingestion logs
│
├── .vscode/                # 🖥️ VSCode workspace settings
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla JavaScript (no framework), HTML5, CSS3 |
| **Backend** | Firebase (Auth, Firestore, Storage, Hosting, FCM) |
| **AI** | DeepSeek API (flashcards), Base44 API (chatbot) |
| **Messaging** | WhatsApp Cloud API (auth OTP), FCM Web Push |
| **Auth** | Firebase Auth (Google, Microsoft, Email, WhatsApp) |
| **Deployment** | Firebase Hosting (multi-site), CLI deployment |

---

## Key Features

### Smart Study (`web/index.html`)
- **8 study modes**: Flashcards, Match, Quiz, Snake, GoldQuest, Climber, Exam Simulator, CrossWord
- **AI flashcard generator**: DeepSeek API creates flashcards from topics
- **Floating AI chatbot**: Study tutor via Base44 API (blue bubble, bottom-right)
- **WhatsApp sign-in**: Passwordless auth via WhatsApp OTP (no server needed)
- **Dark mode**: Full light/dark theme via CSS variables
- **PWA**: Installable, offline-ready via service worker
- **Admin panel**: User management, homework, support tickets, site updates
- **Progress tracking**: Per-user scores and history in Firestore

### SmartChatter (`SmartNexus Ecosystems/SmartChatter/chat.html`)
- Real-time messaging with Firestore listeners
- Class group chats + direct messages
- File sharing, polls, voice messages
- Push notifications via FCM
- Online/typing indicators
- WhatsApp-style mobile UI

---

## Firebase Projects

| Project | Purpose |
|---------|---------|
| `smart-study-by-ryan` | Firestore database, Firebase Auth |
| `smart-study-site` | Hosting (5 sites: main, staff, chat, wiki, smartnexus) |

---

## Configuration

### WhatsApp OTP Login
1. Create a WhatsApp Business app at [developers.facebook.com](https://developers.facebook.com)
2. Get your **Phone Number ID** and **Permanent Access Token**
3. In Firestore (`smart-study-by-ryan`), create `siteConfig/whatsappConfig`:
   ```json
   { "accessToken": "your-token", "phoneNumberId": "your-pn-id" }
   ```

### FCM Push Notifications
1. [Firebase Console → Cloud Messaging](https://console.firebase.google.com/project/smart-study-by-ryan/settings/cloudmessaging) → **Web configuration** → generate key pair
2. Copy the VAPID public key
3. Add to `SmartNexus Ecosystems/SmartChatter/chat.html` APP_CONFIG: `"fcmVapidKey": "your-key"`

### Base44 AI Chatbot
1. Create an app at [base44.com](https://base44.com)
2. In Firestore, create `siteConfig/base44AppId`: `{ "appId": "your-app-id" }`

---

## Deploying

```bash
# Hosting
cd "SmartNexus Ecosystems/Smart Study" && firebase deploy --only hosting:main
cd "SmartNexus Ecosystems/SmartChatter" && firebase deploy --only hosting:chat
cd "SmartNexus Ecosystems/SmartNexus" && firebase deploy --only hosting:smartnexus

# Firestore rules
cd "SmartNexus Ecosystems/Smart Study" && firebase deploy --only firestore:rules --project smart-study-by-ryan
```

---

## License

MIT — see [LICENSE](LICENSE).

Built with ❤️ by [Ryan W.G. Leung](https://ryan-bio.web.app) — Founder, SmartNexus Ecosystems.
