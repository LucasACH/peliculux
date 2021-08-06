import { useContext, useEffect, useState } from "react";

import HeaderRight from "./components/HeaderRight";
import HeaderCenter from "./components/HeaderCenter";
import HeaderLeft from "./components/HeaderLeft";

import "./styles/Header.css";
import { FilterDrawerContext } from "../../context/FilterDrawerContext";
import { useLocation, useHistory } from "react-router-dom";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const { setOpen } = useContext(FilterDrawerContext);

  let location = useLocation();
  let history = useHistory();

  const getPageYOffset = () => {
    const offsetMarker =
      window.innerHeight *
      (location.pathname === "/saved-movies" || location.pathname === "/search"
        ? 0.2
        : 0.7);

    if (window.pageYOffset > offsetMarker) return setIsFixed(true);

    return [setIsFixed(false), setOpen(false)];
  };

  useEffect(() => {
    setIsFixed(false);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);

    return () => {
      window.removeEventListener("scroll", getPageYOffset);
    };
  });

  function handleInputChange(event) {
    if (event.keyCode === 13) {
      history.push(`/search?query=${event.target.value}`);
    }
  }

  return (
    <div className={`header ${isFixed ? "fixed" : ""}`}>
      <HeaderLeft />
      <HeaderCenter onKeyDown={handleInputChange} />
      <HeaderRight
        isFixed={isFixed}
        isHomeScreen={
          location.pathname === "/saved-movies" ||
          location.pathname === "/search"
        }
      />
    </div>
  );
}

Header.propTypes = {};

export default Header;
