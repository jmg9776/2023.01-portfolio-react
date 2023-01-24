import './headerNavigation.css';
export function HeaderNavigation() {
    return <div>
        <div className="FLEXIBLE">FLEXIBLE</div>
        <div className="MENU">
            <ul>
                <li className="menu-list">
                    <a className="menu-font" href="https://www.google.com">
                        HOME
                    </a>
                </li>
                <li className="menu-list">
                    <a className="menu-font" href="https://www.google.com">
                        INFORMATION
                    </a>
                </li>
                <li className="menu-list">
                    <a className="menu-font" href="https://www.google.com">
                        PORTFOLIO
                    </a>
                </li>
            </ul>
        </div>
    </div>
}
export default HeaderNavigation;