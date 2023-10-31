import classes from "./Header.module.css";
import headimg from "../../../Ui/img/headImg.svg";
function Header() {
  return (
    <section className={classes.head}>
      <div className={classes.title}>YOUR GAMING ZONE</div>
      <div className={classes.imge}>
        <img src={headimg} alt="Header img"></img>
      </div>
    </section>
  );
}
export default Header;
