import "./App.css"

import Navbar from "./components/Navbar/navbar"
import MyPhoto from "./assets/IMG_6512.JPG"


const App = () =>(
  <div className="react-app">
    <Navbar/>
    <div className="portfolio-container">
      <div className="header-container">
      <img src={MyPhoto} alt="amar" className="my-photo"/>
      <div>
        <h1>Hai !</h1>
        <h1>I am Amar kumar Reddy</h1>
      </div>
      </div>
      <div className="details-container">
          <p className="heading">A civil Engineer change his career to a software developer</p>
          <p className="designation">Frontend Developer</p>
          <p className="designation">Backend Developer</p>
          <button type="button" className="resume-download">Download Resume</button>
      </div>
      <div className="projects-cotainer">
        <h1>Projects</h1>
        <div className="header-container">
          <div style={{padding:"10px"}}>
            <h1>Web Development Projects</h1>
            <button type="button" className="resume-download">See Projects</button>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1679813155~exp=1679813755~hmac=a6aec8bb908091a73b93d0318208c1b1c0880acf6c92457ed75f2337323f869c"
             alt="web develper logo" width={500} className="project-images"/>
          </div>
        </div>
      </div>
      <div className="header-container">
        <img src="https://img.freepik.com/premium-vector/developing-programming-coding-technologies-engineering-development-programmer-developer-create-code-laptop-screen-with-codes-developer-work-with-task-coding-software-using-pc_458444-1153.jpg?w=900"
         alt="games container" width={500} />
         <div>
          <h1>Games</h1>
          <button type="button" className="resume-download">See Projects!</button>
         </div>
      </div>
      <h1 style={{textAlign:"center"}}>Contact me</h1>
      <ul className="contacts-container">
        <li className="contacts">
          <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="linkedin" className="contacts-image"/>
        </li>
        <li className="contacts">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="instagram" className="contacts-image"/>
        </li>
        <li className="contacts">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" className="contacts-image"/>
        </li>
      </ul>
    </div>
  </div>
)

export default App