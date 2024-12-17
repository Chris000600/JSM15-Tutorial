1. Added the following to "package.json" to ensure consistent dependency version.

```
  "packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  },
```

2. Added [Auth.js](https://authjs.dev/getting-started/installation) installation, secret setup, route files, and setup [Github OAuth](https://authjs.dev/getting-started/providers/github). Added 2 secret keys (AUTH_GITHUB_ID, AUTH_GITHUB_SECRET)
