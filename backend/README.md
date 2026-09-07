# Portfolio Contact Backend (Email-only)

A small Express API with one job: receive submissions from your portfolio's
contact form and send email — nothing is stored in a database. It sends
two emails per submission: one to you (the owner) and an automatic
"thanks for reaching out" reply to the visitor.

## What's in here

```
src/
  app.js                     Express app setup (security, CORS, routes)
  server.js                  Starts the server
  routes/contactRoutes.js     Defines POST /api/contact
  controllers/
    contactController.js      Validates input and sends emails
  middleware/
    contactLimiter.js         Rate limit: 5 submissions / 15 min per IP
    errorMiddleware.js        404 handler + centralized error responses
  validators/contactValidator.js  Zod schema (form field rules)
  templates/
    ownerTemplate.js           Email you receive on a new submission
    contactAutoReply.js        Auto-reply email sent to the visitor
  utils/sendEmail.js          Nodemailer setup + the two send functions
```

## API

| Method | Path           | Purpose                          |
|--------|----------------|-----------------------------------|
| GET    | `/api/health`  | Uptime check — returns `{ success: true }` |
| POST   | `/api/contact` | Submit the contact form, triggers both emails |

`POST /api/contact` expects JSON:
```json
{ "name": "...", "email": "...", "subject": "...", "message": "..." }
```

## Running it locally

```bash
npm install
cp .env.example .env   # then fill in your real values
npm start
```

## Setting up email sending

`SMTP_USER` / `SMTP_PASS` should be a Gmail **App Password**, not your
normal Gmail password: Google Account → Security → 2-Step Verification →
App Passwords. Never commit the real `.env` file — it's already in
`.gitignore`.

## What changed in this pass (MongoDB removed)

- Deleted `config/db.js` and `models/Contact.js` — no database connection
  or schema anymore.
- `server.js` no longer connects to Mongo before starting; it just
  starts listening.
- `contactController.js` no longer calls `Contact.create(...)`. It
  validates the form and sends email directly. The response no longer
  includes a `contactId` (there's nothing to store an ID for).
- Since messages are no longer saved anywhere, if the **owner
  notification email fails to send, the request now returns an error**
  — previously that failure was only logged, because the message was
  still safely saved in the database as a fallback. Now email delivery
  *is* the only record, so a failed send has to surface as a failure.
  The auto-reply to the visitor still fails silently (logged only),
  since that one is a nice-to-have, not the core deliverable.
- Removed the `mongoose` dependency from `package.json`.
- No `package-lock.json` is included — removing a dependency
  invalidates the old one, so run `npm install` to generate a fresh one.
- `MONGO_URI` removed from `.env.example`.
