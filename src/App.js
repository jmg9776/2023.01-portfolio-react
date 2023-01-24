
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header/header.js'
function App() {
    const topics = [
        {id:1, title:"안녕", body:"안녕하세요"},
        {id:2, title:"안녕", body:"안녕하세요"},
        {id:3, title:"안녕", body:"안녕하세요"}
    ]
    return (<div>
            <div>
                <Header></Header>
            </div>
        </div>
    );
}

export default App;
