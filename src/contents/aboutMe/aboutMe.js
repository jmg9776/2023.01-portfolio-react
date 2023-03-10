import Photo from './photo.png'
import Github from './github.png'
import './aboutMe.css'
import Check from './check.png'
import Modal from "../../Modal";
import md from "./infoDetail.md";
import {useState} from "react";

function importAll(r) {
    let files = {};
    r.keys().map((item, index) => {
        files[item.replace("./", "")] = r(item);
    });
    return files;
}

export function AboutMe() {
    let Skill_icons = importAll(require.context('./skill_icons'))
    const iconsRender = [];
    const [detail, setDetail] = useState(false);
    let count=0;
    for (let i in Skill_icons) {
        if (count < 4) {
            iconsRender.push(
                <div key={i} className="skill-box" style={{left:100+count*260}}>
                    <img src={Skill_icons[i]} className="skill-image"/>
                </div>
            )
        }
        else {
            iconsRender.push(
                <div key={i} className="skill-box" style={{left:(count-4)*260, top:953}}>
                    <img src={Skill_icons[i]} className="skill-image"/>
                </div>
            )
        }
        count++;
    }
    return <div className="about-me-box">
        <div className="title-back"></div>
        <div className="title">ABOUT ME</div>

        <div className="sub-title">
            <br/><b className="sub-color">"개발하는것과 사람들과 소통하는것</b>을 즐기는 백엔드 개발자 조민균입니다.<br/><br/>
            여러 프로젝트들을 진행하면서 문제를 해결하면서 소통의 중요성을 이해할 수 있게 되었고<br/>
            현재까지 꾸준히 여러 대회에 참여, 토이프로젝트 제작을 하며 개발을 즐기고 있습니다 !
            <a className="sub-color" href='javascript:void(0);' style={{overflow:"auto"}} onClick={() => (!detail)}>
                More
            </a>
            <input style={{display:"none"}} type="button" onClick={() => setDetail(!detail)}/>
            {detail &&
                (<Modal md={md} closeModal={() => setDetail(!detail)}>
                </Modal>)}
        </div>
        <img src={Photo} className="photo"/>
        <a href="https://github.com/dev-daru" className="git-box" target="_blank"><img src={Github}/></a>
        <div className="info-box1">
            <b className="sub-color">
                NAME :
            </b>
            <b>
                &nbsp;조민균
            </b>
            <p>
                <b className="sub-color">LOCATION :</b>
                <b>
                    &nbsp;강원도 춘천시
                </b>
            </p>
        </div>
        <div className="info-box2">
            <b className="sub-color">
                BIRTH :
            </b>
            <b>
                &nbsp;1997.07.06
            </b>
            <p>
                <b className="sub-color">E-MAIL :</b>
                <b>
                    &nbsp;jmg97@kakao.com
                </b>
            </p>
        </div>
        <div className="award-box">
            <img src={Check}/> <b className="sub-color">수상내역</b>
            <p/>
            <p className="list">2021. 호서대학교 해커톤 경진대회 1위</p>
            <p className="list">2021. 호서대학교 아이디어 경진대회 2위</p>
            <p className="list">2021. 충남ICT아이디어 경진대회 입상</p>
            <p className="list">2021. SJSU 동계 소프트웨어 캠프 경진대회 1위</p>
            <p className="list">2015. 한국정보올림피아드 강원도 대회 동상</p>
            <p className="list">2014. 한국정보올림피아드 전국대회 입상</p>
            <p className="list">2014. 한국정보올림피아드 강원도 대회 공동1위</p>
            <p className="list">2012. 한국정보올림피아드 전국대회 동상</p>
            <p>
                <b className="sub-color"><img src={Check}/> 학력 </b>
                <b className="list">
                    &nbsp;호서대학교 정보보호학과
                </b>
            </p>
        </div>
        <div className="experience">
            <img src={Check}/> <b className="sub-color">대외 활동</b>
            <p/>
            <p className="list">2022 산호세 주립대학교 동계 소프트웨어 캠프</p>
            <p className="list">2017~2018 올엔올 CETS데모 개발</p>
            <p className="list">2016 엘젠ICT 근로 장학</p>
            <p className="list">2014~2015 서울여대 정보보호 영재교육원 1,2기 수료</p>
            <p className="list">2012 강원대 과학영재교육원 중등정보과학사사 </p>
        </div>
        <div className="certification">
            <img src={Check}/> <b className="sub-color">자격증/어학</b>
            <p/>
            <p className="list">TOPCIT 정기평가 461점(수준3) <a className="sub-color" href="https://www.topcit.or.kr/introduction/ability.do" target="_blank">LINK</a></p>
            <p className="list">정보처리산업기사</p>
            <p className="list">JLPT N3</p>
        </div>
        <p className="skill-text">SKILL</p>
        {iconsRender}
    </div>
}
export default AboutMe;