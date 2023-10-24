import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";



const Nav = ({ onSearch }) => {


    
    return (
        <div>

            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/'>
                <button>Log In</button>
            </Link>

            <SearchBar onSearch={onSearch} />
        </div>
    )
}


export default Nav