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
- Activity timeline visualization

### ✔ Multiple Views & Pages
- **Dashboard** - Overview with KPIs and charts
- **Projects** - Project listing with detailed metrics
- **Teams** - Team-based statistics and member cards
- **Developers** - Developer assignments and activity
- **Kanban Board** - Task management view
- **Backlog** - Issue backlog management
- **Complexity Analysis** - Code complexity visualization
- **Security Scan** - Security vulnerability tracking
- **Trends** - Historical trend analysis
- **Tasks** - Task management page
- **Settings** - Application settings

### ✔ Filtering System
- Filter by **project, team, developer**
- Select date range  
- Search functionality
- Dynamic data filtering

### ✔ Fully Responsive
- Mobile  
- Tablet  
- Desktop  

### ✔ Mock Data Simulation
No backend.  
All data is loaded from local JSON files inside `/src/data/` and `/public/`.

---

## 🛠 Tech Stack

| Category | Tools |
|---------|-------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Routing | React Router |
| Data | Local JSON files |
| Build Tool | Vite |
| Linting | ESLint |
| Version Control | Git + GitHub |

---

## 📁 Folder Structure
```text
├── public/
│   ├── metrics.json
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── charts/
│   │   │   ├── BugsLineChart.jsx
│   │   │   ├── SeverityDistribution.jsx
│   │   │   └── TasksBarChart.jsx
│   │   ├── ActivityTimeline.jsx
│   │   ├── IssuesTable.jsx
│   │   ├── MetricCard.jsx
│   │   ├── Metrics.jsx
│   │   ├── ProjectActivity.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectFilters.jsx
│   │   ├── ProjectMetric.jsx
│   │   ├── RecentProjects.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TeamFilters.jsx
│   │   ├── TeamGroup.jsx
│   │   ├── TeamMemberCard.jsx
│   │   └── TopNav.jsx
│   ├── contexts/
│   ├── data/
│   │   ├── activity.json
│   │   ├── projects.json
│   │   └── team.json
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Backlog.jsx
│   │   ├── Complexity.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Developers.jsx
│   │   ├── KanbanPage.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── SecurityScan.jsx
│   │   ├── Settings.jsx
│   │   ├── TasksPage.jsx
│   │   ├── Teams.jsx
│   │   └── Trends.jsx
│   ├── utils/
│   │   └── getTeamMembers.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/CodeLense.git
cd CodeLense
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

---

## 📊 Screens (Summary)

### **Dashboard**
- KPI cards  
- Multi-chart section  
- Issues table  
- Activity timeline

### **Projects**
- List of projects  
- Click to view detailed metrics  
- Project filters and search

### **Teams**
- Team-based statistics  
- Team member cards
- Team grouping and filters

### **Developers**
- Issue assignments  
- Complexity average  
- Activity history  

### **Additional Pages**
- **Kanban Board** - Visual task board
- **Backlog** - Issue backlog management
- **Complexity** - Code complexity analysis
- **Security Scan** - Security vulnerability dashboard
- **Trends** - Historical data trends
- **Tasks** - Task management interface
- **Settings** - Application configuration

---

## 🎯 Purpose

This project is designed as an **intermediate-level portfolio dashboard** that demonstrates:

- React component structuring  
- UI layout with sidebar + navbar  
- Tailwind design skills  
- Data visualization with Recharts  
- Filtering, sorting, and dynamic rendering  
- Multi-page routing with React Router
- Component reusability and organization

It is **frontend-only** and does *not* analyze real code.

---

## 🔮 Future Enhancements

- Connect real SonarQube API  
- Add authentication  
- Add role-based access  
- Add real static analysis engine  
- Integrate database + backend  
- Add dark mode support
- Implement real-time updates
- Add export functionality (PDF/CSV)
- Add more chart types and visualizations

---

## 📜 License
MIT License – free to use and modify.

---

## 👤 Author
**Bana Dawit**  
Frontend Developer  
Ethiopia
