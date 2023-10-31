import classes from "./SlideConsole.module.css";
import Ps from "../../../Ui/img/ps.webp";
import pslo from "../../../Ui/img/pslogo.svg";
import xbox from "../../../Ui/img/xbox.webp";
import xboxl from "../../../Ui/img/xbox.svg";
import wheel from "../../../Ui/img/wheel.webp";
import wheell from "../../../Ui/img/wheel.svg";
import vr from "../../../Ui/img/vr.webp";
import vrl from "../../../Ui/img/vr.svg";
function SlideConsole() {
  return (
    <div className={classes.console}>
      <div className={classes.slidCon}>
        {" "}
        <div className={classes.slider}>
          {" "}
          <div className={classes.type}>
            <img className={classes.cimg} src={Ps} alt="PS"></img>
            <div className={classes.title}>
              <img src={pslo} alt="pslogo"></img>
              <h2>PlayStation5</h2>
            </div>
          </div>
        </div>
        <div className={classes.slider}>
          {" "}
          <div className={classes.type}>
            <img className={classes.cimg} src={xbox} alt="Xbox-s"></img>
            <div className={classes.title}>
              <img src={xboxl} alt="pslogo"></img>
              <h2>Xbox series-x</h2>
            </div>
          </div>
        </div>
        <div className={classes.slider}>
          {" "}
          <div className={classes.type}>
            <img className={classes.cimg} src={wheel} alt="PSw"></img>
            <div className={classes.title}>
              <img src={wheell} alt="pslogo"></img>
              <h2>Drive Wheel</h2>
            </div>
          </div>
        </div>
        <div className={classes.slider}>
          {" "}
          <div className={classes.type}>
            <img className={classes.cimg} src={vr} alt="PS"></img>
            <div className={classes.title}>
              <img src={vrl} alt="pslogo"></img>
              <h2>PlayStation.VR</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideConsole;
