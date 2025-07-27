# Login_next-nest-prisma

This is a full-stack login template project with the following structure:

## Tech Stack

- Frontend: Justend, React Query, Next.js, TailwindCSS, Prisma
- Backend: NestJS, Prisma
- Database: PostgreSQL (Dockerized)

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone git@github.com:ChooHongWook/Login_next-nest-prisma.git
cd Login_next-nest-prisma
```

### 2. Setup Environment

- Copy environment templates and configure:

```bash
  cp ./frontend/.env.local.template ./frontend/.env.local
  cp ./backend/.env.template ./backend/.env
```

### 3. Start Dev Environment

- Requires Docker and pnpm installed.

```bash
# Start DB
cd backend
docker-compose up -d
cd ../

# Install
pnpm --filter frontend install
pnpm --filter backend install

# Generate Prisma Client for both FE & BE
pnpm --filter frontend prisma generate
pnpm --filter backend prisma generate

# Push DB schema
pnpm --filter backend prisma db push

# Start frontend & backend
pnpm --filter frontend dev
pnpm --filter backend start:dev
```
