# 🎬 MovieApp

MovieApp egy egyszerű, Netflix-szerű filmkereső webalkalmazás, amely a [TMDB (The Movie Database)](https://www.themoviedb.org/) nyilvános API-ját használja. Lehetővé teszi a népszerű filmek böngészését, keresést, részletes információk megtekintését, valamint kedvenc filmek elmentését.

## 🛠️ Tech stack

Ez a projekt az alábbi technológiákat használja:

- **React** (Vite alappal) – a komponens alapú UI-hoz
- **Tailwind CSS** – gyors és reszponzív dizájnhoz
- **React Router DOM** – útvonalkezeléshez
- **React Icons** – ikonkészlet a vizuális elemekhez
- **TMDB API** – filmek adatainak lekéréséhez

## 🚀 Fő funkciók

- 🎞️ Népszerű filmek listázása
- 🔍 Keresés filmcím alapján
- ❤️ kedvenc filmek elmentését (helyileg, a böngészőben)
- 📄 Film részleteinek megtekintése (leírás, műfajok, költségvetés, értékelés, stb.)
- ↩️ Navigáció vissza gombbal
- 🎨 "Modern, Netflix-szerű felhasználói felület (UI)"

## 📂 Projekt felépítése

```plaintext
src/
│
├── components/
│   ├── Navbar.jsx
│   └── MovieCard.jsx
│
├── contexts/
│   └── MovieContext.jsx   # Kedvencek context kezeléséhez
│
├── pages/
│   ├── Home.jsx           # Főoldal + keresés
│   ├── Favorites.jsx      # Kedvencek oldal
│   └── MovieDetails.jsx   # Egy adott film részletei
│
├── services/
│   └── api.js             # API hívások a TMDB-hez
│
├── App.jsx                # Fő komponens, routing beállítások
├── index.css              # Tailwind stílusok
└── main.jsx               # Entry point
```

## 🔑 TMDB API használata

A projekt a TMDB API kulcsot használja filmek lekéréséhez. Regisztrálj és készíts magadnak API kulcsot majd írd be az `api.js` fájlba:

```js
const API_KEY = "your_key_here";
```

> ⚠️ Fontos: éles projektekben **soha ne tárold nyilvánosan az API kulcsokat**! Használj környezeti változókat `.env` fájlban.

## 🧪 Elindítás helyben

1. Template repository:

```bash
git clone https://github.com/Zsombinszky/movieapp
cd movieapp
```

2. Telepítsd a függőségeket:

```bash
npm install
```

3. Indítsd el a fejlesztői szervert:

```bash
npm run dev
```

4. Nyisd meg a böngészőt a következő címen: [http://localhost:5173](http://localhost:5173)
