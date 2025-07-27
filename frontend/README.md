## Project setup

- Copy .env.local.template to .env.local before starting the project.

```bash
$ pnpm install

# Generate Prisma client based on the schema
$ pnpm prisma generate

# Generate secret for JWT authentication
$ pnpm dlx auth secret
```

## Compile and run the project

```bash
# development
$ pnpm run dev

# build
$ pnpm run build

# production mode
$ pnpm run start
```

## Run tests

```bash
# lint tests
$ pnpm run lint

```
