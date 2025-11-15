# MERN Deployment & DevOps — Week 7 Assignment (Heroku + GitHub Pages)

**Student:** Maureen Mukami  
**Project:** MERN stack app prepared for production, CI/CD and monitoring.

---

## What I completed (🌟 items included in submission)
- 🌟 Backend deployed to **Heroku** (URL to include after deploy)
- 🌟 Frontend deployed to **GitHub Pages** (URL to include after deploy)
- 🌟 GitHub Actions CI for frontend and backend (tests & build)
- 🌟 GitHub Actions CD: Heroku for backend, GitHub Pages for frontend
- 🌟 Health endpoint (`/health`) and basic monitoring guidance
- 🌟 Two screenshots of GitHub Actions:
  - CI build success
  - Successful deployment action

---

## How to run locally
1. Copy `.env.example` to `.env` and set values.
2. Backend:
   ```bash
   cd backend
   npm ci
   npm run start:dev
