import { 
  Github, 
  Linkedin, 
  Globe, 
  Mail, 
  Sparkles, 
  Award, 
  Code2,
  GitBranch,
  Cpu,
  Database,
  Palette,
  Smartphone,
  Zap,
  Users,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
  MessageSquare,
  ExternalLink,
  Coffee,
  Clock,
  Heart,
  Shield,
  Cloud,
  Server,
  Layers,
  CheckCircle,
  Activity,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const developers = [
  {
    id: 1,
    name: "Bana Dawit",
    role: "Full-Stack Developer",
    avatar: "https://i.pravatar.cc/300?img=32",
    tagline: "Crafting beautiful, scalable applications",
    responsibilities: [
      "Frontend development using React & TypeScript",
      "Backend API integration with Django REST Framework",
      "Authentication system & route protection",
      "Responsive UI & component architecture",
      "Performance optimization & code quality",
      "CI/CD pipeline setup & maintenance",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Django", "PostgreSQL", "Docker", "AWS", "GraphQL"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "bana@example.com",
    location: "Addis Ababa, Ethiopia",
    joined: "2024",
    commits: "1,248",
    projects: 12,
    productivity: 94,
    codeQuality: 92,
    expertise: "Full-stack development, Cloud architecture",
    availability: "Available for projects",
    funFact: "Can solve a Rubik's cube in under 2 minutes",
    favoriteTech: "TypeScript & React",
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/300?img=12",
    tagline: "Building robust, scalable backend systems",
    responsibilities: [
      "Backend API design and security architecture",
      "Database schema design & optimization",
      "Microservices orchestration & deployment",
      "Payment and notification system",
      "System monitoring & logging",
      "API documentation & testing",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kubernetes", "RabbitMQ", "Elasticsearch", "Go"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "alex@example.com",
    location: "San Francisco, USA",
    joined: "2023",
    commits: "2,156",
    projects: 18,
    productivity: 88,
    codeQuality: 95,
    expertise: "Distributed systems, Database optimization",
    availability: "Available",
    funFact: "Former competitive programmer",
    favoriteTech: "Go & Kubernetes",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/300?img=45",
    tagline: "Creating intuitive, accessible user experiences",
    responsibilities: [
      "Dashboard wireframes & interactive prototypes",
      "Figma design system & component library",
      "Branding and accessibility guidelines",
      "User research & usability testing",
      "Design-to-code handoff",
      "Motion design & micro-interactions",
    ],
    tech: ["Figma", "Adobe XD", "Illustrator", "After Effects", "Blender", "Webflow", "Storybook"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "sophia@example.com",
    location: "Berlin, Germany",
    joined: "2024",
    commits: "487",
    projects: 8,
    productivity: 92,
    codeQuality: 96,
    expertise: "Design systems, UX research",
    availability: "Open to freelance",
    funFact: "Illustrates in free time",
    favoriteTech: "Figma & WebGL",
  },
  {
    id: 4,
    name: "Marcus Rivera",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/300?img=8",
    tagline: "Automating infrastructure at scale",
    responsibilities: [
      "Cloud infrastructure management",
      "CI/CD pipeline optimization",
      "Container orchestration with Kubernetes",
      "Monitoring & alerting systems",
      "Security compliance & hardening",
      "Cost optimization & resource management",
    ],
    tech: ["AWS", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Jenkins", "Linux", "Bash"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "marcus@example.com",
    location: "London, UK",
    joined: "2023",
    commits: "1,892",
    projects: 14,
    productivity: 90,
    codeQuality: 93,
    expertise: "Cloud infrastructure, Security",
    availability: "Full-time",
    funFact: "Builds custom mechanical keyboards",
    favoriteTech: "Kubernetes & Terraform",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Mobile Developer",
    avatar: "https://i.pravatar.cc/300?img=28",
    tagline: "Building seamless mobile experiences",
    responsibilities: [
      "Cross-platform mobile app development",
      "Native iOS & Android features integration",
      "Mobile app performance optimization",
      "App store deployment & maintenance",
      "Push notification systems",
      "Offline-first architecture",
    ],
    tech: ["React Native", "Swift", "Kotlin", "Firebase", "Redux", "Jest", "Fastlane", "AppCenter"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "priya@example.com",
    location: "Bangalore, India",
    joined: "2024",
    commits: "1,045",
    projects: 9,
    productivity: 89,
    codeQuality: 91,
    expertise: "Mobile development, Cross-platform",
    availability: "Available",
    funFact: "Published 3 apps on App Store",
    favoriteTech: "Swift & React Native",
  },
  {
    id: 6,
    name: "David Kim",
    role: "QA Engineer",
    avatar: "https://i.pravatar.cc/300?img=15",
    tagline: "Ensuring quality at every stage",
    responsibilities: [
      "Automated testing framework development",
      "End-to-end testing strategy",
      "Performance & load testing",
      "Security vulnerability testing",
      "Test automation pipeline",
      "Quality metrics & reporting",
    ],
    tech: ["Cypress", "Selenium", "Jest", "Postman", "JMeter", "Python", "Docker", "GitLab CI"],
    github: "#",
    linkedin: "#",
    portfolio: "#",
    email: "david@example.com",
    location: "Seoul, South Korea",
    joined: "2023",
    commits: "956",
    projects: 11,
    productivity: 86,
    codeQuality: 98,
    expertise: "Test automation, Performance testing",
    availability: "Available",
    funFact: "Holds 2 software testing certifications",
    favoriteTech: "Cypress & JMeter",
  },
];

export default function Developers() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");

  const roles = ["All", "Full-Stack Developer", "Backend Engineer", "UI/UX Designer", "DevOps Engineer", "Mobile Developer", "QA Engineer"];
  
  const filteredDevelopers = developers.filter(dev => 
    selectedRole === "All" || dev.role === selectedRole
  );

  const sortedDevelopers = [...filteredDevelopers].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "productivity":
        return b.productivity - a.productivity;
      case "projects":
        return b.projects - a.projects;
      case "joined":
        return new Date(b.joined) - new Date(a.joined);
      default:
        return 0;
    }
  });

  const getRoleIcon = (role) => {
    switch (role) {
      case "Full-Stack Developer": return <Code2 className="w-5 h-5" />;
      case "Backend Engineer": return <Server className="w-5 h-5" />;
      case "UI/UX Designer": return <Palette className="w-5 h-5" />;
      case "DevOps Engineer": return <Cloud className="w-5 h-5" />;
      case "Mobile Developer": return <Smartphone className="w-5 h-5" />;
      case "QA Engineer": return <Shield className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Full-Stack Developer": return "from-indigo-500 to-purple-600";
      case "Backend Engineer": return "from-emerald-500 to-green-600";
      case "UI/UX Designer": return "from-pink-500 to-rose-600";
      case "DevOps Engineer": return "from-amber-500 to-orange-600";
      case "Mobile Developer": return "from-blue-500 to-cyan-600";
      case "QA Engineer": return "from-purple-500 to-violet-600";
      default: return "from-slate-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 md:py-12 md:px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Meet Our Developers
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
            The CodeLense platform is powered by a talented team of developers, 
            designers, and engineers dedicated to building exceptional software solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">{developers.length}</div>
              <div className="text-sm text-slate-600">Team Members</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">96%</div>
              <div className="text-sm text-slate-600">Avg. Code Quality</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">8,784</div>
              <div className="text-sm text-slate-600">Total Commits</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">72</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedRole === role
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {role === "All" ? "All Roles" : role}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="name">Sort by Name</option>
                <option value="productivity">Sort by Productivity</option>
                <option value="projects">Sort by Projects</option>
                <option value="joined">Sort by Join Date</option>
              </select>
              <TrendingUp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>

            <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
              >
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
              >
                <div className="flex flex-col gap-1 w-6 h-6">
                  <div className="bg-current rounded-sm h-1.5 w-full"></div>
                  <div className="bg-current rounded-sm h-1.5 w-full"></div>
                  <div className="bg-current rounded-sm h-1.5 w-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Developers Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDevelopers.map((dev) => (
              <div
                key={dev.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${getRoleColor(dev.role)}`} />
                
                <div className="p-6">
                  {/* Avatar & Basic Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={dev.avatar}
                        alt={dev.name}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-lg shadow-lg">
                        {getRoleIcon(dev.role)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-slate-900">{dev.name}</h2>
                      <p className="text-slate-600 text-sm mb-1">{dev.tagline}</p>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getRoleColor(dev.role)} text-white`}>
                        {getRoleIcon(dev.role)}
                        {dev.role}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{dev.projects}</div>
                      <div className="text-xs text-slate-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{dev.productivity}%</div>
                      <div className="text-xs text-slate-500">Productivity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{dev.commits}</div>
                      <div className="text-xs text-slate-500">Commits</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dev.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {dev.tech.length > 4 && (
                        <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                          +{dev.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <a
                        href={dev.github}
                        className="p-2 text-slate-700 hover:text-black hover:bg-slate-100 rounded-lg transition-colors"
                        title="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={dev.linkedin}
                        className="p-2 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={dev.portfolio}
                        className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Portfolio"
                      >
                        <Globe size={18} />
                      </a>
                    </div>
                    
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
                      <MessageSquare size={16} />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {sortedDevelopers.map((dev) => (
              <div
                key={dev.id}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-6">
                  {/* Left Column */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={dev.avatar}
                        alt={dev.name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{dev.name}</h2>
                        <div className="flex items-center gap-4 mt-2">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getRoleColor(dev.role)} text-white`}>
                            {getRoleIcon(dev.role)}
                            {dev.role}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin size={14} />
                            {dev.location}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar size={14} />
                            Joined {dev.joined}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">{dev.tagline}</p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">Expertise</span>
                      </div>
                      <p className="text-slate-600">{dev.expertise}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">Key Responsibilities</span>
                      </div>
                      <ul className="space-y-2">
                        {dev.responsibilities.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="w-64 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{dev.projects}</div>
                        <div className="text-xs text-slate-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{dev.commits}</div>
                        <div className="text-xs text-slate-500">Commits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{dev.productivity}%</div>
                        <div className="text-xs text-slate-500">Productivity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{dev.codeQuality}%</div>
                        <div className="text-xs text-slate-500">Code Quality</div>
                      </div>
                    </div>

                    {/* Fun Fact */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-slate-900">Fun Fact</span>
                      </div>
                      <p className="text-sm text-slate-600">{dev.funFact}</p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                        <Mail size={16} />
                        <span className="text-sm font-medium">Send Message</span>
                      </button>
                      <div className="flex items-center justify-center gap-4">
                        <a href={dev.github} className="text-slate-400 hover:text-slate-900">
                          <Github size={18} />
                        </a>
                        <a href={dev.linkedin} className="text-slate-400 hover:text-blue-600">
                          <Linkedin size={18} />
                        </a>
                        <a href={dev.portfolio} className="text-slate-400 hover:text-emerald-600">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Team Stats Overview */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Team Performance Overview</h2>
              <p className="text-slate-300 mt-2">Collective metrics and achievements</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">Excellent Performance</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">96%</div>
              <div className="text-slate-300 mt-1">Avg. Code Quality</div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold">91%</div>
              <div className="text-slate-300 mt-1">Avg. Productivity</div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold">8.7k</div>
              <div className="text-slate-300 mt-1">Total Commits</div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold">72</div>
              <div className="text-slate-300 mt-1">Projects Delivered</div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <Users className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Join Our Team</h2>
            <p className="text-lg text-slate-600">
              We're always looking for talented developers to join our team. 
              If you're passionate about building amazing software, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
                View Open Positions
              </button>
              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="text-slate-900 font-medium">Made with passion by the CodeLense Team</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 CodeLense • Static Code Analysis Dashboard • All rights reserved
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </div>
  );
}