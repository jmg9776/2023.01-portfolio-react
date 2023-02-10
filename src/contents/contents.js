import AboutMe from './aboutMe/aboutMe.js'
import './contents.css';
import Header from "../header/header";
import Projects from "./projects/projects";
export function Contents() {
    return <div className="board">
        <Header></Header>
        <AboutMe></AboutMe>
        <Projects></Projects>
    </div>
}
export default Contents;