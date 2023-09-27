
import './App.css';
// import { Header } from  './components/Header/Header';
// import { InputNotes } from './components/InputNotes/InputNotes';
import { Home } from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import { Archive } from "./Pages/Archive/Archive";

function App() {
  return (

    <Routes>
      <Route path ="/" element = { <Home /> } />
      <Route path= "/archive" element = { <Archive /> } />
    </Routes>
    // <div className="App">
      
    //   <Home />
    
    // </div>
  );
}

export default App;

// folder structure 

// public 
//   -- index.html
// src
//   -- components
//      --common       // when the project size is too big then we have to use this common folder 

//      --Header
//         -- Header.jsx
//         -- Header.css 
//      --Sidebar
//         -- Sidebar.jsx
//         -- Sidebar.css
//      --InputNotes
//         -- InputNotes.jsx
//         -- InputNotes.css
//   -- App.js
//   -- App.css
//   -- pages 
//      -- Home
//          -- Home.js
//          -- Home.css
//   -- context
//       -- notes-context 

//   -- index.js     

    
        