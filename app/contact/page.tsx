"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Remove metadata from this file if this is a client component.
// Metadata should stay in a server component or separate file if needed.

export default function ContactPage() {
  const [projects, setProjects] = useState([
    { projectType: "", details: "" }
  ]);

  const addProject = () => {
    setProjects([...projects, { projectType: "", details: "" }]);
  };

  const updateProject = (
    index: number,
    field: "projectType" | "details",
    value: string
  ) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", projects);
  };

  return (
    <main className="section dark-section">
      <div className="container two-col">
        <div>
          <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            Request an Estimate
          </div>

          <h1 style={{ marginTop: 14 }}>
            Let's talk about your surface transformation!
          </h1>

          <p className="lead" style={{ marginTop: 18 }}>
            From countertop resurfacing and custom epoxy counters to decorative
            floors and garages or outdoor living surfaces, Inland Pacific
            Coatings is built to help clients create spaces that look elevated
            and perform beautifully. Tell us about your countertop, floor,
            garage, or outdoor-surface project.
          </p>

          <p>
            <strong style={{ color: "var(--gold-soft)" }}>Phone:</strong>{" "}
            208.714.1951
          </p>
          <p>
            <strong style={{ color: "var(--gold-soft)" }}>Email:</strong>{" "}
            kevin@ipcepoxy.com
          </p>
          <p>
            <strong style={{ color: "var(--gold-soft)" }}>Service Area:</strong>{" "}
            Coeur d&apos;Alene, Spokane, and surrounding Inland Northwest
            communities
          </p>
        </div>

        <div className="form-wrap">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="form-grid"
          >
            <input
              type="hidden"
              name="access_key"
              value="eb3f9dd0-c44b-426d-bc76-67926e0f3c90"
            />
            <input
              type="hidden"
              name="subject"
              value="New Estimate Request - Inland Pacific Coatings"
            />
            <input
              type="hidden"
              name="from_name"
              value="Inland Pacific Coatings Website"
            />

            <div className="input-row">
              <input name="name" placeholder="Name" required />
              <input name="phone" placeholder="Phone" required />
            </div>

            <input type="email" name="email" placeholder="Email" required />
            <input name="city" placeholder="City" />

            {projects.map((project, index) => (
              <div key={index} className="project-block">
                <select
                  name="project_type[]"
                  value={project.projectType}
                  onChange={(e) =>
                    updateProject(index, "projectType", e.target.value)
                  }
                  required
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Epoxy Countertop Refinishing & Resurfacing</option>
                  <option>Custom Epoxy Countertops</option>
                  <option>Decorative Epoxy Floors</option>
                  <option>Garage Floor Systems</option>
                  <option>Outdoor Surface Systems</option>
                </select>

                <textarea
                  name="project_details[]"
                  placeholder="Tell us about your project"
                  value={project.details}
                  onChange={(e) =>
                    updateProject(index, "details", e.target.value)
                  }
                  required
                />
              </div>
            ))}

            <button
              type="button"
              className="btn btn-secondary"
              onClick={addProject}
            >
              + Add Another Project
            </button>

            <button className="btn btn-primary" type="submit">
              Submit Estimate Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
