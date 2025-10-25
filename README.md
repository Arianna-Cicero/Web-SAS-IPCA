# 🌐 IPCA Social Store — Web Portal

## 📘 Overview
The **IPCA Social Store Web Portal** is the public-facing component of the broader **Social Store Management System** developed for the **Polytechnic Institute of Cávado and Ave (IPCA)**.

This website serves as a **transparency and engagement platform** for the academic community, providing real-time information about the store’s stock, donation campaigns, and available contribution channels.  
It complements the internal mobile application and backend system by offering **visibility**, **communication**, and **awareness** to students, staff, and donors.

---

## 🎯 Goals
- Promote **transparency** in the Social Store’s operations.  
- Facilitate **donations** by individuals and organizations.  
- Share **updates** on campaigns and social initiatives.  
- Display **real-time inventory data** synchronized with the Ktor backend.  
- Improve **community engagement** within IPCA.  

---

## 💻 Core Features
### 🧾 1. Real-Time Stock Dashboard
- Displays the total available goods by main categories:
  - Food
  - Personal Hygiene
  - Cleaning Supplies
- Interactive charts show stock quantities and categories in real time.
- Clicking a category reveals a detailed list of items (e.g., *Canned Goods – 50 units*).

### 💰 2. Donations Section
- Provides clear instructions on how to make donations.  
- Includes options for:
  - **Individual contributions**
  - **Corporate partnerships**
  - **Participation in donation drives**

### 📰 3. News & Campaigns
- Section dedicated to highlighting ongoing or upcoming donation campaigns.  
- Displays summaries of collected goods and community impact.

### 📞 4. Contact & Community Information
- Links to SAS-IPCA official channels.  
- Information about volunteering and how to support the project.  

---

## 🧠 System Architecture
The web portal integrates directly with the **Ktor backend** via REST APIs.  
It consumes data provided by the mobile system and central PostgreSQL database, ensuring that displayed information (e.g., stock levels) is always up to date.

**High-level overview:**

[ PostgreSQL Database ]
↑
(via Ktor)
↑
[ REST API Endpoint ] ←→ [ React Web Portal ]
↑
[ Mobile App (Kotlin) ]

---

## 🛠️ Technologies Used
| Category | Technology |
|-----------|-------------|
| Frontend Framework | **React** |
| UI Library | **TailwindCSS** or **Material UI** |
| Backend Communication | **Ktor REST API** |
| Database | **PostgreSQL** (via backend) |
| Hosting | **Vercel** / **Netlify** |
| Version Control | **Git & GitHub** |
| Project Management | **Jira** |

---

## 🧩 Folder Structure

/web
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── services/ ← API calls (Axios / Fetch)
│ ├── assets/
│ └── App.jsx
├── package.json
├── README.md
└── .env ← API_BASE_URL, environment configs

---

## ⚙️ Environment Variables
To connect the web portal to the backend API, create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-ktor-server.com/api
```

## 🧪 Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Arianna-Cicero/Web-SAS-IPCA.git
cd Web-SAS-IPCA
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## 🧪 Deployment
The web portal can be easily deployed to Vercel, Netlify, or Firebase Hosting.
Example (Vercel):

```bash
vercel deploy
```
---

## 🤝 Contributors
This project was developed by a group of five students as part of the **Bachelor in Computer Engineering – LESI** at **IPCA**.
- **Arianna Cicero**
- **Guilherme Souza** 
- **Kizzy Silveira** 
---

## 🔒 API Integration
All data displayed (stock, categories, campaigns) comes from the Ktor REST API, example:
| Endpoint              | Description                                   |
| --------------------- | --------------------------------------------- |
| `/api/stock`          | Retrieves real-time stock grouped by category |
| `/api/stock/:id`      | Returns detailed stock information            |
| `/api/campaigns`      | Lists active donation campaigns               |
| `/api/donations/info` | Provides instructions for contributors        |

---

## 📄 License
This project is an **academic work** developed for the **Polytechnic Institute of Cávado and Ave (IPCA)**.  
It is intended for **educational and non-commercial use**.

---
> “Transparency builds trust — and technology makes it possible.” 💙
