# Loja Social IPCA

A web application developed in **React + TypeScript** using **Create React App**, designed to manage donations and social support campaigns within the IPCA community.

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the project locally, follow the steps below.

---

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/loja-social-ipca.git
   cd loja-social-ipca
   ```

2. Install dependencies:
   ```bash
    npm install
   ```

## Available Scripts

In the project directory, you can run:

```bash
 npm start
```

Runs the app in development mode.
Open http://localhost:3000
to view it in your browser.

The page will reload automatically when you make changes.
You may also see lint errors in the console.

--

```bash
 npm test
```

Launches the test runner in interactive watch mode.
See the running tests documentation
for more information.

--

```bash
 npm run build
```

Builds the app for production to the build folder.
It bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

--

```bash
 npm run eject
```

Note: This is a one-way operation. Once you eject, you can’t go back!
If you need to customize the configuration (Webpack, Babel, ESLint, etc.), this command will expose all configuration files.

--

```bash
 npm run deploy
```

If you’re using GitHub Pages for deployment, this command will build and publish the app to the gh-pages branch.
Make sure the homepage field in your package.json points to your repository URL.

## Available Scripts

To connect to your backend API, create a .env file in the project root:

```ini
REACT_APP_API_URL=http://localhost:8080
```

You can then access it anywhere in the code via:

```ts
process.env.REACT_APP_API_URL;
```

## Folder Structure

```graphql
 src/
 ├── assets/           # images, icons, and logos
 ├── components/       # reusable components (Navbar, Footer, Cards)
 ├── pages/            # page views (Home, Doações, Campanhas, Sobre)
 ├── services/         # API and Axios configuration
 ├── styles/           # global and page-specific CSS
 ├── App.tsx           # root component
 └── index.tsx         # app entry point
```

## Deployment

This project can be deployed using GitHub Pages.

Ensure your package.json contains:

```json
"homepage": "https://<your-username>.github.io/loja-social-ipca/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

## Developers

-Arianna Cicero
-Computer Engineering Student @ IPCA

-Guilherme Souza
-Computer Engineering Student @ IPCA

-Kizzy Silva
-Computer Engineering Student @ IPCA

## License

This project is licensed under the MIT License.
