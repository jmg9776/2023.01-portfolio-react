import Photo from './photo.png'
import Github from './github.png'
import './aboutMe.css'
import Check from './check.png'

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
            [팀원과의 소통과 협력을 중시하고 어울리는것을 즐기며,  <b className="sub-color">생각이 유연한 백엔드 개발자</b>입니다.]
            <br/><br/>
            중학생 때부터 개발에 관심을 가지게 되며 현재에 이르기까지 개발을 즐기고 있습니다!
            <br/>
            군대에서까지 사무 자동화를 할 정도로 편리함과 효율을 추구합니다.
            <br/>
            언제나 열린 마음으로 새로운 사람과 소통하는 것을 즐기며, 함께 문제를 해결하는 것을 좋아합니다.
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