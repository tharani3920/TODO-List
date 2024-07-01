// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./component/HomePage.jsx/index.js";
import AddProjectPage from "./component/AddProjectPage.jsx";

const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Project</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
