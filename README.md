# Payuguru Front End

Fron-end application

## RUN APPLICATION

```bash

pm2 start npm --name payuguru --watch --ignore-watch="node_modules" -- -e .env start
```

## PRODUCTION SETUP

```bash
npm run build
```


```bash
npm i -g pm2

```

```bash
npm i -g serve

```
```bash
serve -s build

```
```bash
pm2 start "serve -s build" --name payuguru --watch
```

```bash
pm2 save
```

```bash
pm2 savestartup
```

## Docker Image Build

```bash

npm run docker:build
```

```bash
npm run 