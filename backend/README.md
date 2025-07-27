## Project setup

```bash
$ pnpm install
# start DB Container
$ docker-compose up -d
```

## DB check

```bash
$ docker-compose ps
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

## Stop Database Container

```bash
# Stop containers
$ docker-compose down

# Stop and remove volumes (delete data)
$ docker-compose down -v

```
