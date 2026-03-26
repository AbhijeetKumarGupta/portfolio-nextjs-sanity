# Portfolio Website (Next.js + Sanity)

A full-stack portfolio application built using Next.js and Sanity CMS. The project is designed for performance, scalability, and maintainability, with a focus on dynamic content management and modern frontend architecture.

---

## Tech Stack

- Frontend: Next.js (App Router)
- CMS: Sanity Studio
- Styling: CSS Modules / Styled Components
- Data Fetching: GROQ with next-sanity
- Runtime: React 19

---

## Features

- Server-side rendering and static generation using Next.js
- Headless CMS integration for dynamic content management
- Modular and reusable component architecture
- Real-time content updates via Sanity
- Embedded Sanity Studio within the application
- Query debugging support using Vision tool

---

## Project Structure

```
.
├── app/                     # Next.js App Router
│   ├── studio/              # Embedded Sanity Studio route
│   └── ...
├── sanity/                  # Sanity Studio configuration
│   ├── schemaTypes/         # Schema definitions
│   └── sanity.config.ts
├── lib/                     # Sanity client and queries
├── components/              # UI components
├── public/                  # Static assets
├── styles/                  # Global styles
└── package.json
```

---

## Getting Started

### 1. Clone the repository

```
git clone <repository-url>
cd portfolio-nextjs-sanity
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

### 4. Run development server

```
npm run dev
```

Application will be available at:

```
http://localhost:3000
```

---

## Sanity Studio

The Sanity Studio is embedded inside the Next.js app.

Access it at:

```
http://localhost:3000/studio
```

---

## Example GROQ Query

```
*[_type == "project"]{
  title,
  description,
  "imageUrl": mainImage.asset->url
}
```

---

## Build and Production

### Build the application

```
npm run build
```

### Start production server

```
npm run start
```

---

## Deployment

### Frontend

- Deploy using Vercel or any Node.js hosting platform
- Ensure environment variables are configured

### Sanity Studio (optional standalone deployment)

```
cd sanity
npm run build
npm run deploy
```

---

## Troubleshooting

### Dependency issues

```
rm -rf node_modules package-lock.json .next
npm install
```

### Studio not loading

- Verify `/studio` route configuration
- Check `sanity.config.ts`
- Ensure compatible versions of Next.js, React, and Sanity

### Version compatibility

This project uses:

- Next.js 16
- React 19
- Sanity 5

All dependencies must remain aligned to avoid runtime errors.

---

## Future Enhancements

- Authentication and role-based access for CMS
- Blog and article support
- Analytics integration
- Performance optimization and caching strategies

---

## License

MIT License
