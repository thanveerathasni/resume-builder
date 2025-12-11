import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Sidebar";

import PersonalEditor from "./components/Editor/PersonalEditor";
import SummaryEditor from "./components/Editor/SummaryEditor";
import EducationEditor from "./components/Editor/EducationEditor";
import ExperienceEditor from "./components/Editor/ExperienceEditor";
import ProjectsEditor from "./components/Editor/ProjectsEditor";

import PersonalPreview from "./components/Preview/PersonalPreview";
import SummaryPreview from "./components/Preview/SummaryPreview";
import EducationPreview from "./components/Preview/EducationPreview";
import ExperiencePreview from "./components/Preview/ExperiencePreview";
import ProjectsPreview from "./components/Preview/ProjectsPreview";

function App() {
  // ---------------------- THEME ----------------------
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));


  const handleReorder = (startIndex, endIndex) => {
  const updated = Array.from(sections);
  const [moved] = updated.splice(startIndex, 1);
  updated.splice(endIndex, 0, moved);
  setSections(updated);
};

  // ---------------------- TEMPLATE ----------------------
  const [template, setTemplate] = useState("minimal"); // minimal | enhanced

  // ---------------------- SECTIONS ----------------------
  const [sections, setSections] = useState([
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
        portfolio: ""
      }
    },
    {
      id: "summary",
      type: "summary",
      title: "Summary",
      data: { text: "" }
    },
    {
      id: "experience",
      type: "experience",
      title: "Experience",
      data: [
        {
          company: "",
          role: "",
          start: "",
          end: "",
          description: ""
        }
      ]
    },
    {
      id: "education",
      type: "education",
      title: "Education",
      data: [
        {
          school: "",
          degree: "",
          start: "",
          end: "",
          description: ""
        }
      ]
    },
   {
  id: "projects",
  type: "projects",
  title: "Projects",
  data: [
    {
      name: "",
      link: "",
      description: ""
    }
  ]
}

  ]);

  // ---------------------- ACTIVE SECTION ----------------------
  const [activeId, setActiveId] = useState("personal");
  const activeSection = sections.find((s) => s.id === activeId);

  // ---------------------- UPDATE DATA ----------------------
  const handleUpdate = (newData) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === activeId ? { ...s, data: newData } : s
      )
    );
  };

  // ---------------------- APP RENDER ----------------------
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
  onReorder={handleReorder}
/>

      }
      editor={
        <>
          {activeSection?.type === "personal" && (
            <PersonalEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "summary" && (
            <SummaryEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "education" && (
            <EducationEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "experience" && (
            <ExperienceEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "projects" && (
            <ProjectsEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}
        </>
      }
      preview={
        <>
          <PersonalPreview
            data={sections.find((s) => s.type === "personal")?.data}
            template={template}
          />

          <SummaryPreview
            data={sections.find((s) => s.type === "summary")?.data}
            template={template}
          />

          <ExperiencePreview
            data={sections.find((s) => s.type === "experience")?.data}
            template={template}
          />

          <EducationPreview
            data={sections.find((s) => s.type === "education")?.data}
            template={template}
          />

          <ProjectsPreview
            data={sections.find((s) => s.type === "projects")?.data}
            template={template}
          />
        </>
      }
    />
  );
}

export default App;
