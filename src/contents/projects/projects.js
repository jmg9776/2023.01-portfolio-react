import './projects.css';
import Github from './github.png'
import Detail from './detail.png'
function ProjectContents(props) {
    return <div className="projects-contents-info-box">
        <div className="projects-contents-info-title">
            <b className="projects-contents-info-title-text"><b className="projects-due-font">2019.06.05 ~ 2019.06.05</b><br/>반응형 웹사이트 리뉴얼</b>
        </div>
        <b className="projects-contents-text">HTML, CSS를 이용하여 웹사이트를 반응형으로<br/>HTML, CSS를 이용하여 웹사이트를 반응형으로<br/>HTML, CSS를 이용하여 웹사이트를 반응형으로<br/>HTML, CSS를 이용하여 웹사이트를 반응형으로</b>
        <div className="projects-button-box">
            <a href="https://www.naver.com" style={{paddingRight:15}}>
                <img src={Github}/>
            </a>
            <a href="https://www.naver.com">
                <img src={Detail}/>
            </a>
        </div>
    </div>
}
function LeftSide(props) {
    return <div>
        <div className="projects-image"/>
        <div className="projects-backboard"/>
        <div className="left-project-info">
            <ProjectContents/>
        </div>
    </div>
}

function RightSide(props) {
    return <div>
        <div className="right-image-container">
            <div className="projects-image"/>
            <div className="projects-backboard"/>
        </div>

        <div className="right-project-info">
            <ProjectContents/>
        </div>
    </div>
}

export function Projects() {
    return <div className="projects-box">
        <div className="projects-title-box">
            <div className="projects-title">
                <b className="projects-title-text">PROJECT</b>
            </div>
        </div>
        <div className="projects-contents-box">
            {<LeftSide></LeftSide>}
        </div>
        <div className="projects-contents-box">
            {<RightSide></RightSide>}
        </div>
        <div className="projects-contents-box">
            {<LeftSide></LeftSide>}
        </div>
        <div className="projects-contents-box">
            {<RightSide></RightSide>}
        </div>
        <div className="projects-contents-box">
            {<LeftSide></LeftSide>}
        </div>
        <div className="projects-contents-box">
            {<RightSide></RightSide>}
        </div>
        <div className="projects-contents-box">
            {<LeftSide></LeftSide>}
        </div>
        <div className="projects-contents-box">
            {<RightSide></RightSide>}
        </div>
    </div>
}
export default Projects;