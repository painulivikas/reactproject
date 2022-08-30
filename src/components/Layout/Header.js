import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assests/meals.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            <div className={classes['main-image']} >
                <img src={mealsImage} alt="A Table Full of Delicious Food!" />
            </div>
        </Fragment>
    );
};

export default Header;