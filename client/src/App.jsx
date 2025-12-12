import React, { useState, useEffect } from "react";

// ---------------------- LAYOUT ----------------------
import MainLayout from "./layouts/MainLayout";

// ---------------------- SIDEBAR ----------------------
import Sidebar from "./components/Sidebar";

// ---------------------- EDITORS ----------------------
import PersonalEditor from "./components/Editor/PersonalEditor";
import SummaryEditor from "./components/Editor/SummaryEditor";
import EducationEditor from "./components/Editor/EducationEditor";
import ExperienceEditor from "./components/Editor/ExperienceEditor";
import ProjectsEditor from "./components/Editor/ProjectsEditor";
import SkillsEditor from "./components/Editor/SkillsEditor";
import CertificationsEditor from "./components/Editor/CertificationsEditor"
import AwardsEditor from "./components/Editor/AwardsEditor";
import LanguagesEditor from "./components/Editor/LanguagesEditor";
import SoftSkillsEditor from "./components/Editor/SoftSkillsEditor";

// ---------------------- PREVIEWS ----------------------
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

function App() {

  // ---------------------- THEME ----------------------
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () =>
  setTheme((prev) => (prev === "light" ? "dark" : "light"));

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
    },
    {
      id: "skills",
      type: "skills",
      title: "Skills",
      data: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" }
      ]
    },
    {
  id: "certifications",
  type: "certifications",
  title: "Certifications",
  data: [
    { title: "", issuer: "", year: "" }
  ]
},
{
  id: "awards",
  type: "awards",
  title: "Awards",
  data: [
    { title: "", issuer: "", year: "", description: "" }
  ]
},
{
  id: "languages",
  type: "languages",
  title: "Languages",
  data: [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Fluent" }
  ]
},
{
  id: "softskills",
  type: "softskills",
  title: "Soft Skills",
  data: [
    { name: "Communication" },
    { name: "Teamwork" },
    { name: "Problem Solving" }
  ]
},




  ]);

  // ---------------------- ACTIVE SECTION ----------------------
  const [activeId, setActiveId] = useState("personal");
  const activeSection = sections.find((s) => s.id === activeId);

  // ---------------------- UPDATE SECTION DATA ----------------------
  const handleUpdate = (newData) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === activeId ? { ...s, data: newData } : s
      )
    );
  };

  // ---------------------- REORDER SECTIONS ----------------------
  const handleReorder = (startIndex, endIndex) => {
    const updated = [...sections];
    const [moved] = updated.splice(startIndex, 1);
    updated.splice(endIndex, 0, moved);
    setSections(updated);
  };

  // ---------------------- RENDER ----------------------
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

          {activeSection?.type === "experience" && (
            <ExperienceEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "education" && (
            <EducationEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "projects" && (
            <ProjectsEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}

          {activeSection?.type === "skills" && (
            <SkillsEditor data={activeSection.data} onUpdate={handleUpdate} />
          )}
          {activeSection?.type === "certifications" && (
  <CertificationsEditor data={activeSection.data} onUpdate={handleUpdate} />
)}
{activeSection?.type === "awards" && (
  <AwardsEditor data={activeSection.data} onUpdate={handleUpdate} />
)}
{activeSection?.type === "languages" && (
  <LanguagesEditor data={activeSection.data} onUpdate={handleUpdate} />
)}
{activeSection?.type === "softskills" && (
  <SoftSkillsEditor data={activeSection.data} onUpdate={handleUpdate} />
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

          <SkillsPreview
            data={sections.find((s) => s.type === "skills")?.data}
            template={template}
          />
          <CertificationsPreview
  data={sections.find((s) => s.type === "certifications")?.data}
  template={template}
/>
<AwardsPreview
  data={sections.find((s) => s.type === "awards")?.data}
  template={template}
/>
<LanguagesPreview
  data={sections.find((s) => s.type === "languages")?.data}
  template={template}
/>
<SoftSkillsPreview
  data={sections.find((s) => s.type === "softskills")?.data}
  template={template}
/>


        </>
      }
    />
  );
}

export default App;
