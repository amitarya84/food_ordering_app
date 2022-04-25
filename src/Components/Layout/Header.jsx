import React from 'react';
import headerImg from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import Headercartbtn from './HeaderCartBtn';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <Headercartbtn onShowCart={props.onShowCart} onHideCart={props.onHideCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt="headerImage" />
            </div>
        </>
    );
}

export default Header;
