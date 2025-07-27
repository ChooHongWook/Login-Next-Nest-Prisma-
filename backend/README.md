## Project setup

- Copy .env.template to .env before starting the project.

```bash
$ pnpm install

# start DB Container
$ docker-compose up -d

# Generate Prisma client based on the schema
$ pnpm prisma generate

# Push the Prisma schema to the database (creates tables if not exist)
$ pnpm prisma db push

```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## DB check

```bash
# Check running Docker containers
$ docker-compose ps

# Connect to the PostgreSQL database
# Format: psql -h [host] -p [port] -U [username] -d [database]
$ psql -h localhost -p ${port} -U ${user} -d ${mydb}

# Example:
# $ psql -h localhost -p 6543 -U login_prisma_user -d login_service_db

# After connecting, list all tables in the database
$ \dt
```

## Stop Database Container

```bash
# Stop containers
$ docker-compose down

# Stop and remove volumes (delete data)
$ docker-compose down -v

```
