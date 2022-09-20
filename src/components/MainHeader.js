import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
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