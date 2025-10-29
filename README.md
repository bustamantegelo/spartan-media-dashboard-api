# Spartan Media Dashboard Backend

A backend system built using **Node.js**, **Express**, **TypeScript**, and **Google Sheets API**.

---

## 1. Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org) (v18+ recommended)
- npm (comes with Node)
- PostgreSQL (running locally)
- VS Code or another editor

---

## 2. Install Project Dependencies

```bash
npm install
```

---

## 3. Environment Setup

Create a `.env` file in the project root:

```env
GOOGLE_PRIVATE_KEY=""
GOOGLE_CLIENT_EMAIL=""
GOOGLE_SHEET_ID=""
PORT=3001
```

---

## 🚀 7. Run the Server

```bash
npm run dev
```

Server will run on: `http://localhost:3001`

---

## 8. .gitignore

Common entries:

```gitignore
node_modules/
.env
dist/
*.log
*.tsbuildinfo
```