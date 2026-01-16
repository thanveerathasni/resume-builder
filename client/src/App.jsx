import React, { useState, useEffect } from "react";

// LAYOUT
import MainLayout from "./layouts/MainLayout";

// SIDEBAR
import Sidebar from "./components/Sidebar";

// EDITORS
import PersonalEditor from "./components/Editor/PersonalEditor";
import SummaryEditor from "./components/Editor/SummaryEditor";
import EducationEditor from "./components/Editor/EducationEditor";
import ExperienceEditor from "./components/Editor/ExperienceEditor";
import ProjectsEditor from "./components/Editor/ProjectsEditor";
import SkillsEditor from "./components/Editor/SkillsEditor";
import CertificationsEditor from "./components/Editor/CertificationsEditor";
import AwardsEditor from "./components/Editor/AwardsEditor";
import LanguagesEditor from "./components/Editor/LanguagesEditor";
import SoftSkillsEditor from "./components/Editor/SoftSkillsEditor";
import HobbiesEditor from "./components/Editor/HobbiesEditor";
import ReferencesEditor from "./components/Editor/ReferencesEditor";
import CustomSectionEditor from "./components/Editor/CustomSectionEditor";

// TEMPLATES
import MinimalTemplate from "./templates/MinimalTemplate";
import SidePanelTemplate from "./templates/SidePanelTemplate";

function App() {
  // ---------------- THEME ----------------
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ---------------- TEMPLATE ----------------
  const [template, setTemplate] = useState("minimal");

  // ---------------- DEFAULT SECTIONS ----------------
  const defaultSections = [
    {
      id: "personal",
      type: "personal",
      title: "Personal Info",
      data: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
        portfolio: "",
      },
    },
    {
      id: "summary",
      type: "summary",
      title: "Summary",
      data: { text: "" },
    },
    {
      id: "experience",
      type: "experience",
      title: "Experience",
      data: [{ company: "", role: "", start: "", end: "", description: "" }],
    },
    {
      id: "education",
      type: "education",
      title: "Education",
      data: [{ school: "", degree: "", start: "", end: "", description: "" }],
    },
    {
      id: "projects",
      type: "projects",
      title: "Projects",
      data: [{ name: "", link: "", description: "" }],
    },
    {
      id: "skills",
      type: "skills",
      title: "Skills",
      data: [],
    },
    {
      id: "certifications",
      type: "certifications",
      title: "Certifications",
      data: [{ title: "", issuer: "", year: "" }],
    },
    {
      id: "awards",
      type: "awards",
      title: "Awards",
      data: [{ title: "", issuer: "", year: "", description: "" }],
    },
    {
      id: "languages",
      type: "languages",
      title: "Languages",
      data: [],
    },
    {
      id: "softskills",
      type: "softskills",
      title: "Soft Skills",
      data: [],
    },
    {
      id: "hobbies",
      type: "hobbies",
      title: "Hobbies",
      data: [],
    },
    {
      id: "references",
      type: "references",
      title: "References",
      data: [{ name: "", position: "", company: "", email: "", phone: "" }],
    },
  ];

  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem("resume-sections");
    return saved ? JSON.parse(saved) : defaultSections;
  });

  // ---------------- AUTO SAVE ----------------
  useEffect(() => {
    localStorage.setItem("resume-sections", JSON.stringify(sections));
  }, [sections]);

  // ---------------- ACTIVE SECTION ----------------
  const [activeId, setActiveId] = useState("personal");
  const activeSection = sections.find((s) => s.id === activeId);

  // ---------------- UPDATE SECTION ----------------
  const handleUpdate = (newData) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === activeId ? { ...s, data: newData } : s
      )
    );
  };

  // ---------------- ADD CUSTOM SECTION ----------------
  const handleAddCustom = () => {
    const id = "custom-" + Date.now();
    const newSection = {
      id,
      type: "custom",
      title: "Custom Section",
      data: {
        title: "Custom Section",
        items: [{ heading: "", description: "" }],
      },
    };

    setSections((prev) => [...prev, newSection]);
    setActiveId(id);
  };

  // ---------------- DELETE SECTION ----------------
  const handleDelete = (id) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
    if (activeId === id) setActiveId("personal");
  };

  // ---------------- REORDER ----------------
  const handleReorder = (start, end) => {
    const updated = [...sections];
    const [moved] = updated.splice(start, 1);
    updated.splice(end, 0, moved);
    setSections(updated);
  };

  // ---------------- EDITORS ----------------
  const editors = {
    personal: PersonalEditor,
    summary: SummaryEditor,
    experience: ExperienceEditor,
    education: EducationEditor,
    projects: ProjectsEditor,
    skills: SkillsEditor,
    certifications: CertificationsEditor,
    awards: AwardsEditor,
    languages: LanguagesEditor,
    softskills: SoftSkillsEditor,
    hobbies: HobbiesEditor,
    references: ReferencesEditor,
    custom: CustomSectionEditor,
  };

  const ActiveEditor = editors[activeSection?.type];

  // ---------------- TEMPLATE SWITCH ----------------
  const renderPreview = () => {
    switch (template) {
      case "sidepanel":
        return <SidePanelTemplate sections={sections} />;
      case "minimal":
      default:
        return <MinimalTemplate sections={sections} />;
    }
  };

  return (
    <MainLayout
      theme={theme}
      toggleTheme={toggleTheme}
      template={template}
      setTemplate={setTemplate}
      sidebar={
        <Sidebar
          sections={sections}
          activeId={activeId}
          onSelect={setActiveId}
          onAddCustom={handleAddCustom}
          onDelete={handleDelete}
          onReorder={handleReorder}
        />
      }
      editor={
        ActiveEditor ? (
          <ActiveEditor
            data={activeSection.data}
            onUpdate={handleUpdate}
          />
        ) : null
      }
      preview={renderPreview()}
    />
  );
}

export default App;


