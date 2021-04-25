# Next.js 2021

I justed wanted to check out Next.js v10 and see how it developed / compares to Gatsby v3. This repository is the result of following a couple of tutorials



## Project Setup

```bash
npx create-next-app

npx: installed 1 in 4.003s

√ What is your project named? ... next-blog
Creating a new Next.js app in E:\next-blog
```


```bash
cd next-blog
git init
npm run dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```


### Add Typescript

Create a file in your app root called `tsconfig.json` and install the dependencies and restart the server:

```bash
npm install -D typescript @types/react @types/node

npm run dev
```

Next.js will automatically add some TS configuration the the config file. To start using Typescript rename the default `_app.js` to `_app.tsx` and import the default types that come with the Next.js starter app:


```js
import {AppProps} from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```

### Add Prettier

```bash
npm i -D prettier
```

You can add [Prettier configuration](https://prettier.io/docs/en/options.html) to your `package.json` file:


```json
"prettier": {
    "semi": false,
    "singleQuote": true,
    "jsxBracketSameLine": true,
    "requirePragma": true,
    "insertPragma": true
  },
  "devDependencies": {
    "@types/node": "^14.14.41",
    "@types/react": "^17.0.3",
    "prettier": "^2.2.1",
    "typescript": "^4.2.4"
  }
```

Set VS Code __Editor: Default Formatter__ to Prettier (In Settings `Ctrl+,` search for `formatter`) - make sure the [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is installed.


### Add BaseURLs for Imports

Add the following Typescript configuration to `tsconfig.json`:


```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["components/*"],
      "@styles/*": ["styles/*"]
    },

  ...
```

You can now import directly from those paths and no longer have to work with relative paths:

```js
import styles from '@styles/Home.module.css'
import Header from '@components/header'
```


## Deployment

__npm scripts__

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
```

You can run your Next.js App on a [Node Server](Node.js Server). `npm run build` builds the production application in the __.next folder__. After building, `npm run start` starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages. In production this can be done in a CI pipeline in [Docker](https://nextjs.org/docs/deployment#docker-image).


Coming from Gatsby.js I am more interested in getting the [static build](https://nextjs.org/docs/advanced-features/static-html-export#how-to-use-it) out of Next.js. For this run:


```bash
npm run build
npm run export
```

Then you'll have a static version of your app in the `out` directory.