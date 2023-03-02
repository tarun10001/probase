import { useState, useEffect } from "react";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";

export const Header = ({alert}) => {
  const [navbarOpen, setNavbarOpen] = useState("");
  const [hamOpen, setHamOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const ham = () => {
    setHamOpen(!hamOpen);
  };
  const scrollTop = () => {
    if (window.pageYOffset > 20) {
      setShowScroll(false);
    } 
    else if (showScroll && window.pageYOffset <= 20) {
    setShowScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);


  const showSecondaryNav = (nav) => {
    if (navbarOpen === "" || navbarOpen !== nav) {
      setNavbarOpen(nav);
    } else if (navbarOpen === nav) {
      setNavbarOpen("");
    }
  };


  return (
    <>
     
      <header className="main-nav">
      {alert && showScroll &&
         (
          <div className="main-nav__notify">
            <span>
              {alert}
            </span>
          </div>
        )}
        <div className="main-nav__wrapper">
          <div className="main-nav__wrapper__dektop">
            <div className="main-nav__wrapper__dektop__brand">

              <img src="https://cdn2.vectorstock.com/i/1000x1000/91/11/isolated-abstract-purple-color-round-shape-logo-vector-15349111.jpg" />
            </div>

            <div className="main-nav__wrapper__dektop__signin">
              <span className="main-nav__wrapper__dektop__signin__signInIcon">
                <FaRegUserCircle />
              </span>

              <span
                className="main-nav__wrapper__dektop__signin__signIn"
                onClick={ham}
              >
                Sign in
              </span>

              <span
                onClick={ham}
                className="main-nav__wrapper__dektop__signin__hamBurger"
              >
                {hamOpen ? <GrClose /> : <GiHamburgerMenu />}
              </span>
            </div>
          </div>

          <div className="main-nav__wrapper__nav-items">
            <ul
              className={`main-nav__wrapper__nav-items__group ${
                hamOpen ? "" : "show"
              } `}
            >
              <li onClick={() => showSecondaryNav("search-opportunities")}>
                Search opportunities <FaAngleDown />
               
              </li>
              <li>Help humanity</li>
              <li>Shape healthtech</li>
              <li>About us</li>
              <li onClick={() => showSecondaryNav("FAQs")}>
                FAQs <FaAngleDown />
              </li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="main-nav__wrapper__secondary-nav">
          {navbarOpen === "search-opportunities" && (
              <ul
                id="hidden-nav"
                className="main-nav__wrapper__secondary-nav__group"
              >

                <li>
                    <span>COVID-19</span>
                </li>                

                <li>Depression</li>
                <li>General health</li>
                <li>Gut health</li>
                <li>Heart health</li>
                <li>Sleep health</li>
                <li>Skin health</li>
                <li>Technology testers</li>
              </ul>
            )}
            {navbarOpen === "FAQs" && (
              <ul
                id="hidden-nav"
                className="main-nav__wrapper__secondary-nav__group"
              >
                <li>General FAQs</li>
                <li>Study FAQs</li>
                <li>COVID-19 FAQs</li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
