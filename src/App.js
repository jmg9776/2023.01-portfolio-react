
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BrowserDetection from "https://cdn.skypack.dev/react-browser-detection@1.2.1"
import Content from './contents/contents.js'

const browserHandler = {
    chrome: () => "",
    default: (browser) => alert("이 웹페이지는 데스크탑 전용이며\n Chrome 브라우저에서만 테스트 되었습니다." +
        "\n 다른 브라우저 이용시 오류가 발생할 수 있습니다.")
}
function App() {
    return (<div>
            <BrowserDetection>
                {browserHandler}
            </BrowserDetection>
            <div className="wrap">
                <Content></Content>
            </div>
        </div>
    );
}

export default App;
