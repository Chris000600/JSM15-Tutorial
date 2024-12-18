#### Tech Stack

- NEXT 15
- React 19
- Tailwind CSS
- ShadCN - Component Library
- NextAuth - Github Integration
- Sanity - Content Operation System

#### Project Initialization

```
npx create-next-app@latest ./
Typescript - Yes
ESLint - Yes
TailwindCSS - Yes
`src/` directory - No
App Router - Yes
Turbopack - Yes
custom import alias - No
```

#### Update Log

1. Added the following to `package.json` to ensure consistent dependency version.

```
  "packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  },
```

2. Added [Auth.js](https://authjs.dev/getting-started/installation) installation, secret setup, route files, and setup [Github OAuth](https://authjs.dev/getting-started/providers/github). Added 2 secret keys (`AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`)

3. Added signin/signout with github OAuth button on navbar.

4. Added Tailwind Theme Config and local fonts.

5. Added utilities to `globals.css` file for reusable classes. Added [ShadCN CLI](https://ui.shadcn.com/docs/cli) for reusable components. Re-copy `tailwind.config.ts` and `globals.css` files because ShadCN may have altered them.

6. Added Hero section to home page, implement search form component with custom URL modifying capabilities.

7. Added Startup section and startup cards to home page. Added custom date utility function to `utils.ts`. Added image permissions config to `next.config.ts`.

8. Installed and setup [Sanity](https://www.sanity.io) and sanity canary

```
npm create sanity@latest -- --project <id> --dataset production --template clean --typescript --output-path studio-jsm-15-tutorial

npm install next-sanity@canary
```

9. Temporarily disable turbopack in `package.json` file by setting `"dev": "next dev"`. Copy sanity's env variable to the project's env file then go to `localhost:3000/studio`

10. Created 2 Sanity Schemas (`author.ts`, `startup.ts`), added markdown plugin by installing `npm install sanity-plugin-markdown` and adding `markdownSchema()` to the `sanity.config.ts` file. Also import `import 'easymde/dist/easymde.min.css';` into main layout file for studio css.

11. Use Sanity's query language, GROQ in the studio's vision tab. Copy the query into `queries.ts`. Call query on main `page.tsx` using fetch. Automate type creation using sanity by running `npx sanity@latest schema extract --path=./sanity/extract.json`

12. Create a `sanity-typegen.json` file which contains

```
{
  "path": "./src/**/*.{ts,tsx,js,jsx}",
  "schema": "./sanity/extract.json",
  "generates": "./sanity/types.ts"
}
```

13. run `npx sanity@latest typegen generate` to generate `types.ts` automatically. Create type `StartupTypeCard` in `StartupCard.tsx`. Edit `package.json` with the following to run `npm run typegen` to automatically create new types.

```
"predev": "npm run typegen",
"prebuild": "npm run typegen",
"typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"
```

14. Sanity live fetching update. Make sure `useCdn` is set to `false` in `client.ts`. Install `npm i server-only` and add it to `live.ts` to ensure server side execution. Add new env variable `NEXT_PUBLIC_SANITY_API_VERSION="vX"` as the live feature is currently only available in experimental version. Change the fetch call in `page.tsx` to utilize the live call `const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });` and add the `<SanityLive />` component

15. Sanity search implementation using search params

16.
