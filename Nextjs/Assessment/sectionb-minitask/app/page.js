"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
  });

  // Load saved projects
  useEffect(() => {
    const savedProjects =
      localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects whenever state changes
  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addProject = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData,
    };

    setProjects((prev) => [
      ...prev,
      newProject,
    ]);

    setFormData({
      title: "",
      description: "",
      year: "",
    });
  };

  const clearPortfolio = () => {
    setProjects([]);
    localStorage.removeItem("projects");
  };

  return (
    <main className="container">
      <h1>Creator Portfolio Builder</h1>

      <form
        onSubmit={addProject}
        className="form"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Project
        </button>
      </form>

      <button
        onClick={clearPortfolio}
        className="clearBtn"
      >
        Clear Portfolio
      </button>

      {projects.length === 0 ? (
        <div className="emptyState">
          <h2>Getting Started</h2>
          <p>
            You haven't added any projects to
            your portfolio yet!
          </p>
        </div>
      ) : (
        <div className="projectGrid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              year={project.year}
            />
          ))}
        </div>
      )}
    </main>
  );
}