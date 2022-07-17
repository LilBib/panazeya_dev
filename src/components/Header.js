import React from "react";
import logo from "../images/main_logo.svg";
import menuArrow from "../images/reg-menu_open_icon.svg";
import {Link} from 'react-router-dom';
import FlyOut from "./FlyOut";

function Header (props) {
    const [isFlyoutOpen, setFlyoutState] = React.useState(false);
    return (
        <header className="header">
            <img src={logo} alt="логотип проекта Панацея" className="header__logo" />
            <div className="header__nav-bar">
                <Link to="/" className="header__link">главная</Link>
                <Link to="/" className="header__link header__link_dedicated">подобрать врача</Link>
                <Link to="/" className="header__link">для врачей</Link>
                <Link to="/" className="header__link">поиск</Link>
                <div className={"header__flyout-menu-button"} onClick={()=>{setFlyoutState(!isFlyoutOpen)}}>
                    <h2 className="header__flyout-menu-button_title">вход</h2>
                    <img src={menuArrow} alt="кнопка открытия всплывающего меню входа" className={isFlyoutOpen?"header__flyout-menu-button_arrow_active":"header__flyout-menu-button_arrow"} onClick={()=>{setFlyoutState(!isFlyoutOpen)}} />
                </div>
                <FlyOut isActive={isFlyoutOpen} />             
            </div>
        </header>
    )
}
export default Header;