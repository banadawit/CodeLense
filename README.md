# 📘 CodeLense – Static Code Analysis Dashboard (Frontend Only)

CodeLense is a modern, responsive **React + Tailwind CSS** dashboard that visualizes **static code analysis metrics** using mock JSON data.  
It simulates real-world tools like **SonarQube, ESLint, and CodeClimate**, displaying metrics such as:

- Code coverage  
- Bugs & vulnerabilities  
- Code smells  
- Code complexity  
- Duplicate code  
- Developer assignments  
- Issue severity trends  

This project focuses on **clean UI design, data visualization, and component architecture**, making it ideal for frontend portfolios.

---

## 🚀 Features

### ✔ Dashboard UI
- KPI metric cards (Bugs, Coverage, Complexity, etc.)
- Trend charts (bugs & coverage over time)
- Donut & bar charts
- Issues table with sorting

### ✔ Filtering System
- Filter by **project, team, developer**
- Select date range  
- Search functionality

### ✔ Fully Responsive
- Mobile  
- Tablet  
- Desktop  

### ✔ Mock Data Simulation
No backend.  
All data is loaded from local JSON files inside `/src/data/`.

---

## 🛠 Tech Stack

| Category | Tools |
|---------|-------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Routing | React Router |
| Data | Local JSON files |
| Version Control | Git + GitHub |

---

## 📁 Folder Structure
```text
├── src/
│   ├── components/
│       ├── Sidebar.jsx
│       ├── TopNav.jsx
│       ├── MetricCard.jsx
│       ├── MetricsChart.jsx
│       ├── IssuesTable.jsx
│       ├── ProjectSelector.jsx
│       └── TrendChart.jsx
│   ├── pages/
│       ├── Dashboard.jsx
│       ├── Projects.jsx
│       ├── Teams.jsx
│       ├── Developers.jsx
│
│   ├── data/
│       ├── projects.json
│       ├── metrics.json
│       ├── issues.json
│       └── contributors.json
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📊 Screens (Summary)

### **Dashboard**
- KPI cards  
- Multi-chart section  
- Issues table  

### **Projects**
- List of projects  
- Click to view metrics  

### **Teams**
- Team-based statistics  

### **Developers**
- Issue assignments  
- Complexity average  
- Activity history  

---

## 🎯 Purpose

This project is designed as an **intermediate-level portfolio dashboard** that demonstrates:

- React component structuring  
- UI layout with sidebar + navbar  
- Tailwind design skills  
- Data visualization with Recharts  
- Filtering, sorting, and dynamic rendering  

It is **frontend-only** and does *not* analyze real code.

---

## 🔮 Future Enhancements

- Connect real SonarQube API  
- Add authentication  
- Add role-based access  
- Add real static analysis engine  
- Integrate database + backend  

---

## 📜 License
MIT License – free to use and modify.

---

## 👤 Author
**Bana Dawit**  
Frontend Developer  
Ethiopia  

