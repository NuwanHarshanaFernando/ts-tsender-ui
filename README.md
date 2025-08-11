This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Run anvil chain

```
$ pnpm anvil
```

## Run the application

```
$ pnpm run dev
```

## Setup anvil account and import NFT

Import Accounts 

Account 3 and Account 6 are anvil imported accounts

Go to https://github.com/Cyfrin/ts-tsender-ui-cu/blob/main/CONTRIBUTING.md

Insert Mock Token

In this case Account 3, Now we have 100 MT (Mock Token)

## Send Tokens using TSender UI

Token Address -> Mock Token Address (0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512)

Receipient -> Account 6 (0x70997970C51812dc3A010C7d01b50e0d17dc79C8)

Amounts -> 100 

Then Send Tokens

We can see "Approved Amount: 100n" printed in console of TSender UI

Add Memo to any time amounts changes, trigger calculateTotal(amounts) function

```
const total: number = useMemo(() => calculateTotal(amounts), [amounts]);     
```

Write function called "calculateTotal()" inside utils/calculateTotal folder 

Create function calculateTotal.test.ts() indide utils/calculateTotal folder for unit testing

Install vitest

```
    pnpm add -D vitest
```

Create vitest.config.mts for vitest configurations

Install vite-tsconfig-paths

```
    pnpm add -D vite-tsconfig-paths
```

Add this line to script in package.json
```
"test:unit": "vitest"
```

Then test
```
    pnpm run test:unit
```


Token Address -> Mock Token Address (0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512)

Receipient -> Account 6 (0x70997970C51812dc3A010C7d01b50e0d17dc79C8)

Amounts -> 10^18

Then Send Tokens

Import Token into Account 6, Now we can see Mock Tokens in Account 6