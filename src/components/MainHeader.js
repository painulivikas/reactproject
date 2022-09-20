import { NavLink } from "react-router-dom";

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default MainHeader;


/* 
<Link to='/products'>Products</Link>
is used to create links like a href= (Link to='/welcome')

Link is a component
*/

/*
NavLink component is work same like as Link component but it also holds the active class css, that's why we use NavLink component instead of Link component
*/