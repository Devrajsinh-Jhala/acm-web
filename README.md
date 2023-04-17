# ACM PDEU Website

A full stack website with backend embedded in the frontend for quick and easy access built with Next.js 13, SanityCMS v3, TypeScript and TailwindCSS.

## Features

- Light/dark mode toggle
- Sanity Backend in front-end only
- Next.js 13 Incremental Server Regeneration
- Authentication using NextAuth.js
- Blog entirely managed by SanityCMS and comments made in blogs need to be approved by the admin (who can access Sanity Backend), and then after approval, it takes 24 hours to reflect the comments back to the original site due to ISR

## Some instructions

- In development mode, please uncomment the following line else it will throw an error
- This is located in the post/[slug]/page.tsx line 18
- Make sure once done, comment this line again as it is meant to disable next.js inbuilt error for authentication. However this error is not reproduced in production, so comment when deploying

```ts
// export const dynamic = "force-static";
```

- The backend of the site is embedded in the frontend itself and can be accessed by going to:
  `(base_url)/studio`

But this is a protected route and can be accessed only by official PDEU ACM Mail account

## Tech Stack

**Client:** Next.js 13, TypeScript, TailwindCSS

**Server:** Next.js 13 Server Components, Sanity CMS v3

**Other:** React hot toast, EmailJS, NextAuth.js, React Typewriter effect, Framer Motion

## Installation

Clone the git repository in your local machine and cd to that location. Then run:

```bash
  npm install
  npm run dev
```

Also do not forget to make an .env.local file and put all the environments mentioned above in it.

**Also please if you create .env file make sure to add .env in gitignore**

**Make sure google client secret and sanity tokens are not pushed anywhere in public**

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SANITY_PROJECT_ID`=1pnsxvns

`NEXT_PUBLIC_SANITY_DATASET`=production

`NEXT_PUBLIC_SANITY_API_VERSION`=2022-11-15

`SANITY_API_TOKEN`=

`GOOGLE_CLIENT_ID`=

`GOOGLE_CLIENT_SECRET`=
<!-- For developement use localhost but for deployment use production/deployed url -->

`NEXTAUTH_URL`=http://localhost:3000/

`NEXTAUTH_SECRET`=devraj

## Deployment

The site is hosted on cpanel and hence to deploy the new version, you need to replace the folder itself in cpanel.

To deploy the project, in your directory, run:

```bash
  npm run build
```

This will generate a build directory which you need to zip it and push to c-panel

## Authors

- [@Devrajsinh-Jhala](https://github.com/Devrajsinh-Jhala)
