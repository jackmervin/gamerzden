import classes from "./Nav.module.css";
import logo from "../../../Ui/img/logo.svg";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className={classes.nav}>
      <div className={classes.navSet}>
        <div style={{ display: "flex", flex: "auto" }}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo"></img>
          </div>
          <div className={classes.text}>
            <h4>
              <p style={{ fontSize: "20px" }}>Gamerz</p>
              <p style={{ fontSize: "16px" }}>Den</p>
            </h4>
          </div>
        </div>
        <div style={{ marginRight: "15px" }}>
          {/* <Link to="/booking">
            <button className={classes.btn}>Booking</button>
          </Link> */}
          <button className={classes.btn}>Booking</button>
        </div>
      </div>
    </section>
  );
}
export default Nav;
