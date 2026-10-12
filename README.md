<<<<<<< HEAD
# Ravin — DevOps Engineer Portfolio

A responsive, dark professional portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Features

- Responsive desktop, tablet, and mobile layout
- Dark terminal-inspired DevOps design
- About, skills, projects, CI/CD delivery workflow, and contact sections
- GitHub repository links and LinkedIn/email placeholders
- Resume download button
- Live demo placeholders for deployed projects
- Optional Formspree contact form integration
- Accessible labels and reduced-motion support

## 1. Requirements

- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm
- Git

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## 3. Personalize before publishing

Edit `src/App.jsx`:
- `GITHUB_USERNAME` is set to `LeoRavin`.
- The email is set to the address shown on your resume; update `EMAIL` if you want a different public contact address.
- Replace `LINKEDIN_URL` with your real LinkedIn profile URL.
- The experience, education, training, and project descriptions were aligned to the uploaded resume. Verify project repository URLs and update any that don't match the final repositories.
- Add live demo URLs in each project's `demo` field.

Your provided resume PDF is included at `public/Ravin-DevOps-Resume.pdf`, and the resume download buttons point to it. Replace that file whenever you update your CV.

Do not publish personal phone numbers or other details you do not want public.

## 4. Enable the contact form

Without a Formspree endpoint, the form opens (or offers a link to open) an email draft in the user's default email app. This is **not a sent message**: the visitor must press Send in their email app. If no app opens, configure a default email handler or use the direct email link.

To send submissions directly from the website:

1. Create a form at [Formspree](https://formspree.io/).
2. Copy the endpoint, for example `https://formspree.io/f/your-form-id`.
3. Create `.env` in the project root based on `.env.example`.
4. Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`.
5. Restart the dev server (`npm run dev`) and test a submission. For production, also add the same variable to your hosting provider's environment variables and redeploy.

Only use a public form endpoint designed for frontend use. Never put private API keys or server secrets in `VITE_*` variables. The UI only displays “Message sent successfully” after Formspree returns a successful response.

## 5. Build and test production output

```bash
npm run build
npm run preview
```

Vite writes the production website to `dist/`.

## 6. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and import that repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `VITE_FORMSPREE_ENDPOINT` under project environment variables if using the contact form.
7. Deploy. Vercel can redeploy on each push to the connected branch.

## 7. Deploy to GitHub Pages

For the simplest path, use Vercel. If you prefer GitHub Pages:

1. In `vite.config.js`, set `base` to `'/YOUR_REPOSITORY_NAME/'` (replace with the actual repository name).
2. Install a GitHub Pages deployment action or publish the `dist/` folder with a GitHub Actions workflow.
3. In the repository settings, configure Pages to use the deployment workflow.
4. For a user site named `LeoRavin.github.io`, the base can remain `/`.

## 8. Deploy to AWS S3 + CloudFront

1. Run `npm run build`.
2. Create an S3 bucket for static website assets (or use private S3 with CloudFront Origin Access Control).
3. Upload the contents of `dist/` to the bucket.
4. For a production setup, keep S3 private and use CloudFront with Origin Access Control; configure HTTPS and your domain if you have one.
5. Configure CloudFront to serve `index.html` as the default root object.
6. Invalidate CloudFront after updates if required.

## 9. Real CI/CD status badge

The current badge is a visual portfolio element and is explicitly labelled project-based; it is **not** a live build status. To display a real GitHub Actions badge, add a workflow under `.github/workflows/` and use GitHub's generated badge URL for that workflow. Do not claim a pipeline is passing until the workflow has run successfully.

## Project structure

```text
ravin-devops-portfolio/
├── public/
│   └── Ravin-DevOps-Resume.pdf   # add your resume here
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
=======
# ravin-devops-portfolio
>>>>>>> e30a205f9beb273528493199eecd82bd04066394
