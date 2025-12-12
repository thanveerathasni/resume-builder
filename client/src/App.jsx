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

// PREVIEWS
import PersonalPreview from "./components/Preview/PersonalPreview";
import SummaryPreview from "./components/Preview/SummaryPreview";
import EducationPreview from "./components/Preview/EducationPreview";
import ExperiencePreview from "./components/Preview/ExperiencePreview";
import ProjectsPreview from "./components/Preview/ProjectsPreview";
import SkillsPreview from "./components/Preview/SkillsPreview";
import CertificationsPreview from "./components/Preview/CertificationsPreview";
import AwardsPreview from "./components/Preview/AwardsPreview";
import LanguagesPreview from "./components/Preview/LanguagesPreview";
import SoftSkillsPreview from "./components/Preview/SoftSkillsPreview";
import HobbiesPreview from "./components/Preview/HobbiesPreview";
import ReferencesPreview from "./components/Preview/ReferencesPreview";
import CustomSectionPreview from "./components/Preview/CustomSectionPreview";

function App() {
  // ---------------- THEME ----------------
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  // ---------------- TEMPLATE ----------------
  const [template, setTemplate] = useState("minimal");

  // ---------------- SECTIONS (WITH AUTO-LOAD) ----------------
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

  // ---------------- AUTO-SAVE ----------------
  useEffect(() => {
    localStorage.setItem("resume-sections", JSON.stringify(sections));
  }, [sections]);

  // ---------------- ACTIVE SECTION ----------------
  const [activeId, setActiveId] = useState("personal");
  const activeSection = sections.find((s) => s.id === activeId);

  // ---------------- UPDATE SECTION ----------------
  const handleUpdate = (newData) => {
    setSections(prev =>
      prev.map((s) => (s.id === activeId ? { ...s, data: newData } : s))
    );
  };

  // ---------------- ADD CUSTOM SECTION ----------------
  const handleAddCustom = () => {
    const id = "custom-" + Date.now();
    const newSection = {
      id,
      type: "custom",
      title: "Custom Section",
      data: { title: "Custom Section", items: [{ heading: "", description: "" }] },
    };

    setSections(prev => [...prev, newSection]);
    setActiveId(id);
  };

  // ---------------- DELETE SECTION ----------------
  const handleDelete = (id) => {
    setSections(prev => prev.filter(sec => sec.id !== id));

    if (activeId === id) {
      setActiveId("personal");
    }
  };

  // ---------------- REORDER ----------------
  const handleReorder = (start, end) => {
    const updated = [...sections];
    const [moved] = updated.splice(start, 1);
    updated.splice(end, 0, moved);
    setSections(updated);
  };

  // ---------------- EDITOR + PREVIEW MAPPER ----------------
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

  const previews = {
    personal: PersonalPreview,
    summary: SummaryPreview,
    experience: ExperiencePreview,
    education: EducationPreview,
    projects: ProjectsPreview,
    skills: SkillsPreview,
    certifications: CertificationsPreview,
    awards: AwardsPreview,
    languages: LanguagesPreview,
    softskills: SoftSkillsPreview,
    hobbies: HobbiesPreview,
    references: ReferencesPreview,
  };

  const ActiveEditorComponent = editors[activeSection?.type];

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
        ActiveEditorComponent ? (
          <ActiveEditorComponent
            data={activeSection.data}
            onUpdate={handleUpdate}
          />
        ) : null
      }
      preview={
        <>
          {sections.map((sec) => {
            if (sec.type === "custom") {
              return <CustomSectionPreview key={sec.id} data={sec.data} />;
            }

            const PreviewComp = previews[sec.type];
            return PreviewComp ? (
              <PreviewComp key={sec.id} data={sec.data} template={template} />
            ) : null;
          })}
        </>
      }
    />
  );
}

export default App;
