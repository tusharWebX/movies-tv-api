# 🎬 Movies & TV Shows API (Backend Assessment)

A simple REST API to manage Movies & TV Shows.

### ✅ Features
- CRUD (Create, Read, Update, Delete)
- Pagination (`?page=1&limit=10`)
- Search (`?search=dark`)
- Validation (Zod)
- PostgreSQL (Neon) + Prisma ORM
- Express.js backend

---

## 🚀 Stack
- Node.js + Express
- Prisma ORM
- PostgreSQL (Neon cloud hosted)
- Zod (request validation)

---

## 🔧 Setup

Clone project:

```sh
git clone https://github.com/<your-username>/<repo-name>.git
cd movies-tv-api
npm install



Create .env file (copy from .env.example):

DATABASE_URL="your_neon_db_url"
PORT=4000



Run Prisma:

npx prisma generate
npx prisma migrate dev --name init
npm run db:seed


Start server:
npm run dev

🧪 API Endpoints
| Method | Route              | Description                             |
| ------ | ------------------ | --------------------------------------- |
| POST   | `/api/entries`     | Add new Movie/TV show                   |
| GET    | `/api/entries`     | Get list (supports search + pagination) |
| PUT    | `/api/entries/:id` | Update entry                            |
| DELETE | `/api/entries/:id` | Delete entry                            |


Example with pagination + search:
GET /api/entries?page=1&limit=5&search=dark


📌 Notes

No authentication or frontend required (per assessment instructions).
Focused on clean backend structure and modern tools.


