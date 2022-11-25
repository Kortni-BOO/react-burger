import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyle from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
                <div className={headerStyle.menu}>
                <nav className={headerStyle.nav}>
                    <BurgerIcon type="primary" />
                    <p className={headerStyle.text}>Конструктор</p>
                </nav>
                <nav className={headerStyle.nav}>
                    <ListIcon type="secondary" />
                    <p className={headerStyle.text}>Лента заказов</p>
                </nav >
                </div>
                <nav className={headerStyle.logo}>
                    <Logo />
                </nav>
                <nav className={headerStyle.nav}>
                    <ProfileIcon type="secondary" />
                    <p className={headerStyle.text}>Личный кабинет</p>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;