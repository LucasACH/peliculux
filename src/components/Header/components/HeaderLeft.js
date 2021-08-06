import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/logo.svg";

function HeaderLeft() {
  return (
    <div className="left">
      <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
        <Logo />
      </Link>
    </div>
  );
}

export default HeaderLeft;
