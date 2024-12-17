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
