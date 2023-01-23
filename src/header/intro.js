import {Button} from "react-bootstrap";
import './intro.css';
export function Intro() {
    return <div className="intro">
        <div className="introTitle">
            Performance<br/>
            Easy<br/>
            Creative<br/>
        </div>
        <video loop muted autoPlay className="introVideo" src="/intro.mp4#00:03,00:14" type="video/mp4"/>
    </div>

}
export default Intro;