import "./App.css"

import Navbar from "./components/Navbar/navbar"
import MyPhoto from "./assets/IMG_6512.JPG"


const App = () =>(
  <div className="react-app">
    <div className="portfolio-container">
      <Navbar/>
      <img src={MyPhoto} alt="amar" className="my-photo"/>
      <div>
        <h1>Hai !</h1>
        <h1>I am Amar kumar Reddy</h1>
      </div>
      <div className="details-container">
          <p>A civil Engineer change his career to a software developer</p>
          <p>Frontend Developer</p>
          <p>Backend Developer</p>
          <button type="button" className="resume-download">Download Resume</button>
      </div>
    </div>
  </div>
)

export default App