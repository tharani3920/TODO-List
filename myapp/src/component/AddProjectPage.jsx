import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProjectPage = () => {
  const [project, setProject] = useState({
    name: "",
    projectTitle: "",
    task: "",
    fromDate: "",
    toDate: "",
    status: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !project.name ||
      !project.projectTitle ||
      !project.task ||
      !project.fromDate ||
      !project.toDate ||
      !project.status
    ) {
      alert("All fields are required.");
      return;
    }

    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    storedProjects.push(project);
    localStorage.setItem("projects", JSON.stringify(storedProjects));
    navigate("/");
  };

  return (
    <div className="add-project-container">
      <h1 className="add-project-title">Add Project</h1>
      <form className="add-project-form" onSubmit={handleSubmit}>
        <div className="add-project-form-group">
          <label>
            Name:
            <select
              className="add-project-input"
              name="name"
              value={project.name}
              onChange={handleChange}
              required
            >
              <option value="">Select a name</option>
              <option value="Arun">Arun</option>
              <option value="Tharani">Tharani</option>
              <option value="Gokkul">Gokkul</option>
              <option value="Karthick">Karthick</option>
              <option value="Sam">Sam</option>
              <option value="Nobel">Nobel</option>
              <option value="Venu">Venu</option>
              <option value="Ram">Ram</option>
            </select>
          </label>
        </div>
        <div className="add-project-form-group">
          <label>
            Project Title:
            <select
              className="add-project-input"
              name="projectTitle"
              value={project.projectTitle}
              onChange={handleChange}
              required
            >
              <option value="">Select a project title</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Marketing Campaign">Marketing Campaign</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Customer Support Enhancement">
                Customer Support Enhancement
              </option>
              <option value="Sales Strategy Improvement">
                Sales Strategy Improvement
              </option>
              <option value="Financial Analysis">Financial Analysis</option>
              <option value="Event Planning">Event Planning</option>
            </select>
          </label>
        </div>
        <div className="add-project-form-group">
          <label>
            Task:
            <input
              className="add-project-input"
              type="text"
              name="task"
              value={project.task}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="add-project-form-group">
          <label>
            From Date:
            <input
              className="add-project-input"
              type="date"
              name="fromDate"
              value={project.fromDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="add-project-form-group">
          <label>
            To Date:
            <input
              className="add-project-input"
              type="date"
              name="toDate"
              value={project.toDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="add-project-form-group">
          <label>
            Status:
            <select
              className="add-project-input"
              name="status"
              value={project.status}
              onChange={handleChange}
              required
            >
              <option value="">Select a status</option>
              <option value="On Progress">On Progress</option>
              <option value="Hold">Hold</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </label>
        </div>
        <button className="add-project-submit-button" type="submit">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
