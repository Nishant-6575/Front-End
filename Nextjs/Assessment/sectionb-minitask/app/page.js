"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
  });

  useEffect(() => {
    const savedProjects =
      localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

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
    <main className="min-h-screen mt-16">
      <div className="max-w-6xl text-center mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">
            Creator Portfolio Builder
          </h1>

          <p className="text-gray-600 mt-3">
            Showcase and manage your creative
            projects effortlessly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <form
            onSubmit={addProject}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Project
            </button>

            <button
              type="button"
              onClick={clearPortfolio}
              className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Clear Portfolio
            </button>
          </form>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h2 className="text-2xl font-bold mb-2">
              Getting Started
            </h2>

            <p className="text-gray-600">
              You haven't added any projects to
              your portfolio yet!
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">
                My Projects
              </h2>

              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                {projects.length} Projects
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  year={project.year}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}