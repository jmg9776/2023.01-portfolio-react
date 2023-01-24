import Photo from './photo.png'
import Github from './github.png'
import './aboutMe.css'
import {NavLink} from "react-bootstrap";
export function AboutMe() {
    return <div>
        <div className="title-back"></div>
        <div className="title">ABOUT ME</div>
        <div className="sub-title">
            "팀원과의 소통과 협력을 중요하게 생각하는 <b className="sub-color">생각이 유연하고 적응이 빠른</b> 백엔드 개발자 입니다."
        </div>
        <img src={Photo} className="photo"/>
        <a href="https://github.com/DARU970706" className="git-box" target="_blank"><img src={Github}/></a>
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
    </div>
}
export default AboutMe;