# Tammy News 📰

A fast, clean news web app built with React that pulls live articles from the NewsAPI. Search any topic or browse top US headlines, with a smooth dark/light mode toggle.

## Features

- 🔍 Search any topic via NewsAPI's `everything` endpoint
- 🗞 Defaults to top US headlines when no search is active
- 🌙 Dark / ☀️ Light mode toggle
- 📱 Fully responsive — mobile, tablet, and desktop
- 🃏 Card-based layout with source, date, description, and read-more link

## Tech Stack

- **React** (Vite)
- **NewsAPI** — [newsapi.org](https://newsapi.org)
- **Google Fonts** — Oswald, Outfit, DM Sans

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/tammy-news.git
cd tammy-news
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your API key

Create a `.env` file in the root of the project:

```env
VITE_API_KEY=your_newsapi_key_here
```

You can get a free API key at [newsapi.org](https://newsapi.org/register).

### 4. Run the app

```bash
npm run dev
```

## Project Structure
## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_KEY` | Your NewsAPI key from newsapi.org |

## Notes

- NewsAPI's free tier only works on `localhost` — you'll need a paid plan to deploy to production
- Articles with removed or null content are a NewsAPI limitation on the free tier

## License

MIT
## Search
```bash
Fagboyegun Oluwatamilore
```