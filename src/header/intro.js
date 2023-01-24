import './intro/intro.css';
import Els from './intro/ellips.png'
import Rectangle from './intro/Rectangle.png'
import HeaderNavigation from "./headerNavigation";

export function Intro() {
    return<div className="all">
        <HeaderNavigation></HeaderNavigation>
        <div className="intro" style={{background: 'url(/header/intro/intro.png)',backgroundRepeat:'no-repeat'}}>
            <div className="title1">Flexible</div>
            <div className="title2">BACKEND PROGRAMMER</div>
            <img src={Rectangle} className="Rectangle"/>
            <img src={Els} className="Ellipse"/>
            <div className="SCROLL_DOWN">SCROLL DOWN</div>
        </div>
    </div>

}
export default Intro;