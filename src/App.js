
import './App.css';
import {Button, Container, Form, FormControl, Navbar, NavDropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './header/intro.js'
function Header(props) {
    return <div className="App">
        {props.title}
    </div>
}
function Nav(props) {
    const lis = [];
    for(let i=0; i<props.topics.length;i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={''}></a>{t.title + t.body}</li>)
    }
    return <ol>
        {lis}
    </ol>;
}


function App() {
    const topics = [
        {id:1, title:"안녕", body:"안녕하세요"},
        {id:2, title:"안녕", body:"안녕하세요"},
        {id:3, title:"안녕", body:"안녕하세요"}
    ]
    return (<div>
            <div>
                <Intro></Intro>
                <Header title="test"></Header>
                <Nav topics={topics}></Nav>
                <Button>BootStrap</Button>
            </div>
        </div>
    );
}

export default App;
