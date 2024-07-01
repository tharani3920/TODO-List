import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedProject, setEditedProject] = useState({
    name: "",
    projectTitle: "",
    task: "",
    fromDate: "",
    toDate: "",
    status: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const openModal = (index) => {
    setEditIndex(index);
    const projectToEdit = projects[index];
    setEditedProject(projectToEdit);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(-1);
    setEditedProject({
      name: "",
      projectTitle: "",
      task: "",
      fromDate: "",
      toDate: "",
      status: "",
    });
  };

  const handleSaveEdit = () => {
    const updatedProjects = [...projects];
    updatedProjects[editIndex] = editedProject;
    setProjects(updatedProjects);
    closeModal();
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredProjects = projects.filter((project) => {
    const {
      name = "",
      projectTitle = "",
      task = "",
      fromDate = "",
      toDate = "",
      status = "",
    } = project;
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      projectTitle.toLowerCase().includes(search.toLowerCase()) ||
      task.toLowerCase().includes(search.toLowerCase()) ||
      fromDate.includes(search) ||
      toDate.includes(search) ||
      status.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 className="title">ToDo List</h1>
      <div className="header-actions">
        <input
          type="text"
          className="search-input search"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <Link className="add-link" to="/add">
          Add +
        </Link>
      </div>
      <table className="project-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Project Title</th>
            <th>Task</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.projectTitle}</td>
              <td>{project.task}</td>
              <td>{project.fromDate}</td>
              <td>{project.toDate}</td>
              <td>{project.status}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => openModal(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Editing */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Edit Project Modal"
      >
        <h2>Edit Project</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <select
              name="name"
              value={editedProject.name}
              onChange={handleChange}
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
          </div>
          <div className="form-group">
            <label>Project Title:</label>
            <select
              name="projectTitle"
              value={editedProject.projectTitle}
              onChange={handleChange}
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
          </div>
          <div className="form-group">
            <label>Task:</label>
            <input
              type="text"
              name="task"
              value={editedProject.task}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>From Date:</label>
            <input
              type="date"
              name="fromDate"
              value={editedProject.fromDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>To Date:</label>
            <input
              type="date"
              name="toDate"
              value={editedProject.toDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={editedProject.status}
              onChange={handleChange}
            >
              <option value="On Progress">On Progress</option>
              <option value="Hold">Hold</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div className="modal-buttons">
            <button className="save-button" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default HomePage;
