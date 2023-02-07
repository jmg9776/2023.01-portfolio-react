
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './contents/contents.js'
import video from "./header/intro/intro.mp4";
import {useEffect, useState} from "react";
import Modal from "./Modal";
import md from "./file/1.md";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
function App() {

    const size = useWindowSize();
    let sUsrAg = navigator.userAgent;
    let scale = (window.innerWidth/1300*100);
    if ((window.innerWidth/1300*100) > 100) {
        scale = '100'
    }
    if (sUsrAg.indexOf("Chrome") > -1) {
    } else {
        alert("이 웹페이지는 데스크탑 전용입니다.\n" +
            "크롬 브라우저 기준으로 작성되었습니다.\n" +
            "다른 브라우저 이용시 정상적인 확인이 불가능 할 수 있습니다.")
    }
    let videoHeight = (1080*scale/100) + "px";
    const [detail, setDetail] = useState(false);
    return (
        <div>
            <div style={{overflow:"hidden", width:window.innerWidth, height:videoHeight, position:"absolute", left:"50%",transform: "translate(-50%, 0%)"}}>
                <div style={{background:"linear-gradient(to bottom, rgba(25,25,25,40%),rgba(25,25,25,100%))", position:"absolute", left:"0", zIndex:1000, width:window.innerWidth, height:videoHeight}}></div>
                <video loop muted autoPlay>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div style={{scale:scale+"%"}}>
                <Content>

                </Content>
            </div>
        </div>
    );




}

export default App;
