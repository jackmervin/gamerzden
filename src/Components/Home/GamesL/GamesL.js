import classes from "./Games.module.css";
import w2 from "../../../Ui/img/Watch_Dogs.svg";
import gta from "../../../Ui/img/gta-5.svg";
import god from "../../../Ui/img/EGS_GodofWar1.svg";
import acb from "../../../Ui/img/Assassins_Creed_brotherhood_cover.svg";
import www from "../../../Ui/img/w2k22.svg";
import mku from "../../../Ui/img/MortalKombat.svg";
import cr22 from "../../../Ui/img/Cricket22.svg";
import gt7 from "../../../Ui/img/GranTurismo.svg";
import inj from "../../../Ui/img/Injustice.svg";
import lou2 from "../../../Ui/img/thelastofus.svg";
import jc4 from "../../../Ui/img/justcause4.svg";
import fifa23 from "../../../Ui/img/fifa23.svg";
import nfsp from "../../../Ui/img/needforspeed.svg";
import fifa18 from "../../../Ui/img/fifa18.svg";
import god3 from "../../../Ui/img/godofwar3.svg";
import aco from "../../../Ui/img/assassinscreedorigins.svg";

import GameSilder from "./GameSlider";
function GamesL() {
  const GameList = [
    { name: "Watch Doges", img: `${w2}` },
    { name: "GTA 5", img: `${gta}` },
    { name: "God of War", img: `${god}` },
    { name: "Assassins Creed Brotherhood", img: `${acb}` },
    { name: "W 2k22", img: `${www}` },
    { name: "Mortal Kombat Ultimate 2", img: `${mku}` },
    { name: "Cricket 22", img: `${cr22}` },
    { name: "Gran Turismo 7", img: `${gt7}` },
    { name: "Injustice", img: `${inj}` },
    { name: "The Last of Us 2", img: `${lou2}` },
    { name: "Just Cause 4", img: `${jc4}` },
    { name: "FIFA 23", img: `${fifa23}` },
    { name: "Need for Speed Payback", img: `${nfsp}` },
    { name: "FIFA 18", img: `${fifa18}` },
    { name: "God of War 3", img: `${god3}` },
    { name: "Assassins Creed Origins", img: `${aco}` },
  ];

  return (
    <div className={classes.games}>
      <div className={classes.head}>
        <h2>Experience the true power of Games</h2>
      </div>{" "}
      <div className={classes.slider}>
        <GameSilder />
      </div>
      <div className={classes.glist}>
        {GameList.map((Game) => (
          <div className={classes.gcard}>
            <div className={classes.border}>
              <div className={classes.img}>
                <img src={Game.img} alt="w2"></img>
              </div>
            </div>
            <div className={classes.gname}>{Game.name}</div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default GamesL;
