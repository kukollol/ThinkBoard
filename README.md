# Thinkk Notes App

A full-stack notes application built with React (frontend) and Express/MongoDB (backend).

---

## Project Structure

```
thinkk/
  backend/
    config/
    controllers/
    middleware/
    models/
    Routes/
    package.json
    server.js
    ...
  frontend/
    src/
    public/
    package.json
    ...
```

---

## Backend

### Features

- REST API for notes (CRUD)
- MongoDB with Mongoose
- Rate limiting with Upstash
- Environment variable support via `.env`

### Setup

1. **Install dependencies:**

   ```sh
   cd backend
   bun install
   ```

2. **Configure environment:**

   - Create `.env` file and set:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=3000
     ```
   - Make sure the variable is `MONGO_URI` (not `MANGO_URI`).

3. **Run the server:**
   ```sh
   bun run server.js
   ```
   Or with nodemon for development:
   ```sh
   npm run dev
   ```

### API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

---

## Frontend

### Features

- React 19 + Vite
- React Router for navigation
- Tailwind CSS + DaisyUI for styling
- Toast notifications

### Setup

1. **Install dependencies:**

   ```sh
   cd frontend
   bun install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` by default.

---

## Development Notes

- Make sure the backend is running before using the frontend.
- Update API URLs in the frontend if your backend runs on a different port or host.
- Rate limiting is enabled via Upstash; configure your Upstash credentials if needed.

---

## License

MIT
