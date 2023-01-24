
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './contents/contents.js'

function App() {
    let sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {
    } else {
        alert("이 웹페이지는 데스크탑 전용입니다.\n" +
            "크롬 브라우저 기준으로 작성되었습니다.\n" +
            "다른 브라우저 이용시 정상적인 확인이 불가능 할 수 있습니다.")
    }
    return (<div>
            <div className="wrap">
                <Content></Content>
            </div>
        </div>
    );
}

export default App;
