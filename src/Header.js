import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <nav className="header">
            {/* Logo ->img */}
            <Link to="/">
            <img src="./amazon-logo.png" className="header_logo" alt="" />
            </Link>
            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchinput" />
                <SearchIcon className="header_searchicon"/>
            </div>
            
            {/* links */}
            <div className="headerNav">
            {/* 1st link */}
            <Link to={!user && '/login'} className="header_link">
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLine1">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
            {/* 2nd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLine1">Returns</span>
                <span className="header_optionLine2">& Orders</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLine1">Your</span>
                <span className="header_optionLine2">Prime</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/checkout" className="header_link">
                <div className="header_basket">
                {/* shopping basket icon */}
                    <ShoppingBasketIcon />
                 {/*no of items in basket */}
                 <span className="header_optionLine2 header_basketcount">{basket?.length}</span>
                </div>
            </Link>
            </div>
            {/* basket n number */}
        </nav>
    );
}

export default Header
