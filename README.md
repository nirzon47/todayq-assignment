# Content Marketplace- TodayQ Assignment

## [Hosted Link](https://todayq-assignment.vercel.app/)

## [API Documentation](https://documenter.getpostman.com/view/20186883/2sA3Qwcq6T)

## Tech Stack

- [Next.js](https://nextjs.org/) - React Framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility Library
- [shadcn](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-auth](https://next-auth.js.org/) - Authentication
- [Zod](https://github.com/colinhacks/zod) - Validation and Type Checking
- [bcryptjs](https://github.com/kelektiv/node.bcrypt.js) - Password Hashing
- [mongoose](https://mongoosejs.com/) - MongoDB ORM

## Features

- Authentication
- Content Marketplace
- Multipart form for adding content
- Themes
- Razorpay Integration
- Server Side Rendering

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Configure .env file

Add the following lines to `.env` file:

```bash
MONGODB_URI = <YOUR_MONGODB_URI/{DBNAME}>

GITHUB_ID = <GITHUB_ID_FROM_GITHUB_OAUTH>
GITHUB_SECRET = <GITHUB_SECRET_FROM_GITHUB_OAUTH>

GOOGLE_ID = <GOOGLE_ID_FROM_GOOGLE_OAUTH>
GOOGLE_SECRET = <GOOGLE_SECRET_FROM_GOOGLE_OAUTH>

RAZORPAY_KEY_ID = <YOUR_RAZORPAY_KEY_ID>
NEXT_PUBLIC_RAZORPAY_KEY_ID = <YOUR_RAZORPAY_KEY_ID_SAME_AS_ABOVE>
RAZORPAY_SECRET=<YOUR_RAZORPAY_SECRET>

UPLOADTHING_APP_ID=<YOUR_UPLOADTHING_APP_ID>
UPLOADTHING_SECRET=<YOUR_UPLOADTHING_SECRET>
```

Github OAuth:
https://github.com/settings/developers

Google OAuth:
https://console.developers.google.com/apis/credentials

Razorpay:
https://dashboard.razorpay.com/applications

Uploadthing:
https://uploadthing.com

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## License

[![CC BY-ND 4.0][cc-by-nd-shield]][cc-by-nd]

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/nirzon47/todayq-assignment">TodayQ Assignment</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://nirzonkarmakar.com">Nirzon Taru Karmakar</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""></a></p>

[cc-by-nd]: https://creativecommons.org/licenses/by-nd/4.0/
[cc-by-nd-shield]: https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg
