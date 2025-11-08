# MERN Testing — README

## What to submit
- All the files in this repo.
- README with testing strategy and screenshots of coverage.

## Testing strategy
1. Unit tests:
   - Server: controller functions validated for input validation and behaviour.
   - Client: React components with React Testing Library.
2. Integration tests:
   - Server: Supertest hitting routes with an in-memory MongoDB (mongodb-memory-server).
3. End-to-end tests:
   - Cypress test that exercises the main user flow (landing page shows greeting).
4. Coverage:
   - Run `npm run coverage` in both client and server to produce coverage reports; include screenshots in submission.

## How to run locally
1. From repo root, install workspace dependencies:
   ```bash
   npm install
   # then from root (if npm workspaces auto-install not available):
   npm run -w server install || (cd server && npm install)
   npm run -w client install || (cd client && npm install)
