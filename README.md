# PaceNPixels Backend

A backend system built using **Node.js**, **Express**, **TypeScript**, **Prisma**, and **PostgreSQL**.

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
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/eventdb"
```


---

## 4. PostgreSQL Database

### Option A: via terminal

```bash
psql -U postgres
CREATE DATABASE eventdb;
```

### Option B: via pgAdmin

1. Open **pgAdmin**
2. Right-click on Databases → Create → Database → Name it `eventdb`

---

## 5. Prisma Setup

Run the following:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

## 6. Seed the Database

```bash
npm run seed
```

Ensure this exists in your `package.json`:

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts",
  "seed": "ts-node prisma/seed.ts"
}
```

---

## 🚀 7. Run the Server

```bash
npm run dev
```

Server will run on: `http://localhost:3000`

---

## 8. .gitignore

Common entries:

```gitignore
node_modules/
.env
dist/
*.log
*.tsbuildinfo
prisma/dev.db
```

---

## 9. Troubleshooting

- If Prisma client errors:  
  ```bash
  npx prisma generate
  ```

- If DB error:  
  Ensure PostgreSQL is running and `.env` is configured.

---