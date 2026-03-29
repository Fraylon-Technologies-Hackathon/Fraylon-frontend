# Fraylon Frontend

## Project Overview

Fraylon Frontend is a modern web interface built using **React and Vite**. The application provides a responsive and modular user interface that allows users to explore different sections such as informational pages, FAQs, and call-to-action elements.

The project follows a **component-based architecture**, making the frontend scalable, reusable, and easy to maintain.

---

## Tech Stack

**Frontend Framework**

* React

**Build Tool**

* Vite

**Styling**

* Tailwind CSS

**Routing**

* React Router

**Package Manager**

* npm

---

## Project Features

* Responsive user interface
* Modular component-based architecture
* FAQ accordion interface
* Reusable UI components
* Fast development with Vite hot reload
* Scalable folder structure

---

## Folder Structure

```
Fraylon-frontend-main
│
├── README.md
├── package.json
│
└── Fraylon-frontend
    │
    ├── public
    │
    ├── src
    │   │
    │   ├── components
    │   │   ├── AboutSection.jsx
    │   │   ├── CTASection.jsx
    │   │   ├── ExplorePage.jsx
    │   │   ├── FAQSection.jsx
    │   │   ├── Footer.jsx
    │   │   └── ui
    │   │        ├── accordion.jsx
    │   │        └── button.jsx
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── index.html
    └── package.json
```

---

## Application Architecture

```
User Browser
     │
     ▼
 index.html
     │
     ▼
 main.jsx
     │
     ▼
 App.jsx
     │
     ▼
Page Section Components
 ├── AboutSection
 ├── ExplorePage
 ├── FAQSection
 ├── CTASection
 └── Footer
     │
     ▼
Reusable UI Components
 ├── Button
 └── Accordion
```

---

## Setup Instructions

### Clone the repository

```
git clone <https://github.com/Fraylon-Technologies-Hackathon/Fraylon-frontend.git>
```

### Navigate to the project directory

```
cd Fraylon-frontend
```

### Install dependencies

```
npm install
```

### Run the development server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Available Scripts

```
npm run dev
```

Starts the development server.

```
npm run build
```

Builds the application for production.

```
npm run preview
```

Previews the production build locally.

---

## Environment Variables

Create a `.env` file in the root directory and define the required variables.

```
VITE_API_URL=http://localhost:5000
```

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new feature branch.

```
git checkout -b feature/new-feature
```

3. Commit your changes.

```
git commit -m "Add new feature"
```

4. Push the branch.

```
git push origin feature/new-feature
```

5. Open a Pull Request for review.

---

## Pull Request Review Process

* Ensure the project builds successfully.
* Follow the existing project structure and coding standards.
* Provide a clear description of the changes made.
* At least one reviewer must approve the pull request before merging.

---

## Deployment

The application can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

Deployment steps:

1. Build the project

```
npm run build
```

2. Deploy the generated `dist` folder to the hosting platform.

---

## Troubleshooting

**Issue: Dependencies fail to install**

```
rm -rf node_modules
npm install
```

**Issue: Development server not starting**

Ensure Node.js version **16 or higher** is installed.

---

## License

This project is open-source and available under the MIT License.
