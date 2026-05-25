# Movie App

A React app that displays trending movies using the [TMDB API](https://www.themoviedb.org/).

## Tech Stack

- React 19 + TypeScript
- Vite
- TanStack Query (data fetching)
- React Router v7

## Getting Started

### Prerequisites

- Node.js
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
