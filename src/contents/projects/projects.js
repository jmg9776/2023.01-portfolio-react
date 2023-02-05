import './projects.css';
import Github from './github.png'
import Detail from './detail.png'
function ProjectContents(props) {
    return <div className="projects-contents-info-box">
        <div className="projects-contents-info-title">
            <b className="projects-contents-info-title-text"><b className="projects-due-font">{props.text[0]}</b><br/>{props.text[1]}</b>
        </div>
        <b className="projects-contents-text">{props.text[2]}</b>
        <div className="projects-button-box">
            <a href={props.text[3]} target="_blank" style={{paddingRight:15}}>
                <img src={Github}/>
            </a>
            <a href="https://www.naver.com" target="_blank">
                <img src={Detail}/>
            </a>
        </div>
    </div>
}
function LeftSide(props) {
    return <div>
        <img className="projects-image" src={props.imgSrc}/>
        <div className="projects-backboard"/>
        <div className="left-project-info">
            <ProjectContents text={props.text}/>
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

function importAll(r) {
    let files = {};
    r.keys().map((item, index) => {
        files[item.replace("./", "")] = r(item);
    });
    return files;
}

export function Projects() {
    let project_img = importAll(require.context('./project_img'))
    let count = 0;
    const projectRender = [];
    const text = [];
    text.push(["2023.01.28~2022.02.13","포트플리오 사이트", "React.js를 이용한 포트폴리오 페이지입니다.\n계속해서 업데이트 중이며, PC 환경에서 이용가능합니다.\n", "https://github.com/dev-daru/2023.01-portfolio-react"])
    text.push(["2023.01.05~","로아 도우미(개발중)", "로스트 아크의 원정대 도우미 웹사이트 입니다.\nLostArk Open Api를 통해 데이터를 수집하여 원정대 골드 획득 정보, \n빠른각인계산, 스팩업 효율등 여러가지 정보들을 제공합니다. \nFE는 React, BE는 Springboot를 이용합니다."])
    text.push(["2022.09.01~2022.12.28","스프링 부트 공부", "\nRabbitMq를 통한 큐잉\n" +
    "Redis를 통한 캐싱, SpringSecurity를 이용한 JWT 인증과 hMac인증\n" +
    "critical exception 발생시 telegram 으로 알림등을 구현하였습니다."]);
    text.push(["2022.03.02~2022.10.01","스미싱 방지 어플리케이션", "졸업 프로젝트입니다.\nsklearn을 이용해 스미싱을 방지하는 어플리케이션 입니다.\n프로젝트 팀장 및 프론트, 백, AI를 담당했습니다.\nkotlin, node.js, python 을 이용하였습니다.", "https://github.com/SeniorProjectHoseo2022"])
    text.push(["2022.01.15~2022.01.21","Petmilly", "애완동물 종합 커뮤니티 데모 어플리케이션 입니다.\n백엔드를 담당했으며, SJSU 동계소프트웨어 캠프에서 수상하였습니다.", "https://github.com/dev-daru/2022.02-Petmily_BackEnd-node.js"])
    text.push(["2022.01.15~2022.01.21","ILookBook", "의상 가상시착 쇼핑몰입니다.\n사용자의 이미지를 입력받아 쇼핑몰에 등록하여, 관리자가 등록한 \n의상의 착용샷을 랜더링해 보여줘 구매 만족도와, 의사를 높힐 수 있습니다.\n백엔드와 프론트엔드를 담당하였습니다.", "https://github.com/dev-daru/2021.09-ILookBook-node.js"])
    text.push(["2022.03.02~2022.06.10","스케쥴러 웹 프로젝트", "강사그룹을 위한 단체 스케쥴러 웹페이지 입니다.\n전체 강사 시간표 조회, 보강신청, 수업 일정 조정요청등의 기능을 제공합니다.\nJSP서블렛을 담당하였습니다.", "https://github.com/dev-daru/2021.03-Schedule_Web-Jsp"])
    for (let i in project_img) {
        projectRender.push( <div className="projects-contents-box">
            {<LeftSide text={text[count]} imgSrc={project_img[i]}></LeftSide>}
        </div>);
        count++;
    }
    return <div className="projects-box">
        <div className="projects-title-box">
            <div className="projects-title">
                <b className="projects-title-text">PROJECT</b>
            </div>
        </div>
        {projectRender}
    </div>
}
export default Projects;