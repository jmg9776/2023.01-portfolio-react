import AboutMe from './aboutMe/aboutMe.js'
import './contents.css';
import Header from "../header/header";
export function Contents() {
    return <div className="board">
        <Header></Header>
        <AboutMe></AboutMe>
    </div>
}
export default Contents;