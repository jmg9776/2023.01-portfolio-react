import './projects.css';
import Github from './github.png'
import Detail from './detail.png'
import {useState} from "react";
import Modal from "../../Modal";

function ProjectContents(props) {
    const [detail, setDetail] = useState(false);

    return <div className="projects-contents-info-box">
        <div className="projects-contents-info-title">
            <b className="projects-contents-info-title-text"><b className="projects-due-font">{props.text[0]}</b><br/>{props.text[1]}</b>
        </div>
        <b className="projects-contents-text">{props.text[2]}</b>
        <div className="projects-button-box">
            <a href={props.text[3]} target="_blank" style={{paddingRight:15}}>
                <img src={Github}/>
            </a>

            <a href='javascript:void(0);' style={{overflow:"auto"}} onClick={() => setDetail(!detail)}>
                <img src={Detail}/>
            </a>
            <input id={props.text[0]} style={{display:"none"}} type="button" value="회원가입" className="blueBtn" onClick={() => setDetail(!detail)}/>
            {detail &&
                (<Modal md={props.md} closeModal={() => setDetail(!detail)}>
                </Modal>)}
        </div>
    </div>
}
function LeftSide(props) {
    return <div>
        <img className="projects-image" src={props.imgSrc}/>
        <div className="projects-backboard"/>
        <div className="left-project-info">
            <ProjectContents md={props.md} text={props.text}/>
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
    let markdown = importAll(require.context('./markdown'));
    let project_img = importAll(require.context('./project_img'));

    let count = 0;
    const projectRender = [];
    const text = [];
    text.push(["2023.01.28~2022.02.13","포트플리오 사이트", "진행했던 프로젝트나 공부했던 것들이 정리되지 않아 한눈에 보기 어려워 보기쉽게 정리한 웹사이트입니다.\n현재 보고 있으신 페이지이기도 합니다.\n제작하던 도중 진행했던 프로젝트들을 되돌아볼 수 있었습니다.", "https://github.com/jmg9776/2023.01-portfolio-react"])
    text.push(["2023.01.05~","로아 도우미(개발중)", "좋아하는 게임 로스트아크를 플레이하다가 내가 어떤 강화를 하면 효율적으로 강화를 할 수 있을까?, 각인을 어떻게 하면 빠르게 맞출 수 있을까?\n내가 한주에 얻을 수 있는 재화는 얼마일까? 이러한 것들을 직접 자료를 모으고 분석하기 어려워 제작하게 되었습니다.","https://github.com/jmg9776/2023.01-LostArk-springboot"])
    text.push(["2022.09.01~2022.12.28","스프링 부트 공부", "Node.js를 이용해 BE 개발을 하다 우연한 계기로 스프링부트를 접하는 계기가 생기게 되었습니다. \nORM의 편리함에 스프링부트의 기초들까지 공부하게 될 정도로 푹 빠지게 되어, 여러가지 기술을 찾아보며 공부하면서 만든 프로젝트입니다.","https://github.com/jmg9776/2022.09-practice-springboot"]);
    text.push(["2022.03.02~2022.10.01","스미싱 방지 어플리케이션", "시간이 지날수록 높아져 가는 스미싱 피해에 AI를 접목하면 스미싱 피해를 줄일 수 있지 않을까? 라는 생각에서부터 시작된 졸업 프로젝트입니다. \nAI에 관련한 지식이 없어 많은 어려움이 있었고, 사이킷 런 라이브러리를 이용해 AI를 직접 사용해 보았다는 보람을 느낄 수 있었습니다.", "https://github.com/SeniorProjectHoseo2022"])
    text.push(["2022.01.15~2022.01.21","Petmilly", "애완동물 용품에 전문화된 관련한 중고 거래사이트가 없어, 팀장님이 고양이를 기르는데 기호에 맞는 장난감들로 인해 낭비를 하게 되었습니다. \n이러한 문제를 해결할 수 있는 커뮤니티를 형성하고, 초보 반려인들을 위한 퀘스트들을 제공해 더욱 즐거운 반려생활 위한 어플을 제작하였습니다.", "https://github.com/jmg9776/2022.02-Petmily_BackEnd-node.js"])
    text.push(["2022.01.15~2022.01.21","ILookBook", "온라인 쇼핑몰의 단점인 실제로 입어 볼 수 없다는 단점으로 낭비되는 비용이 아깝다는 생각이 들었습니다. \n패션 아이템을 착용한 나의 모습을 보여주면 구매 만족도와 구매 의사가 높아지지 않을까? 라는 생각에서 출발하여 제작하게 된 쇼핑몰입니다.", "https://github.com/jmg9776/2021.09-ILookBook-node.js"])
    text.push(["2022.03.02~2022.06.10","스케쥴러 웹 프로젝트", "코로나로 인해서 화상수업의 수요가 늘어났는데, 한 업체의 강사들의 시간표와 일정을 수작업으로 엑셀에 작성하는 모습을 보게 되었습니다. \n불편한 엑셀 대신 강사들의 일정을 통합 관리를 할 수 있는 프로그램이 있으면 좋겠다는 생각에 제작하게 되었습니다.", "https://github.com/jmg9776/2021.03-Schedule_Web-Jsp"])
    for (let i in project_img) {
        projectRender.push( <div className="projects-contents-box">
            {<LeftSide key={project_img} num={count+"project"} md={markdown[(count+1)+".md"]} text={text[count]} imgSrc={project_img[i]}></LeftSide>}
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