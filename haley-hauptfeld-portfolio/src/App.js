import logo from './logo.svg';
import './App.css';
import About from "./pages/about/about.js";
import Projects from "./pages/projects/projects.js";
import CookingBlog from "./pages/cooking-blog/cooking-blog.js";
import Header from "./components/header/header.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/cooking-blog"
          element={<CookingBlog />}
        />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Description 
//                 title={"Hi! My name is Haley Hauptfeld."}
//                 text={"I am a technical product manager with a passion for connecting communities. Scroll down for more information about me!"}
//                 image={headshot}
//                 />
//       <Description 
//                 title={"What do I do as a technical product manager?"}
//                 text={"I am responsible for managing the success of a product through it's lifecycle. From ideating to implementation to a release, I do whatever is needed to make the product as successful as it can be. This could mean developing solution intent documents, documenting user stories, connecting with external teams, etc."}
//                 />
//     </div>
//   );
// }

// export default App;
