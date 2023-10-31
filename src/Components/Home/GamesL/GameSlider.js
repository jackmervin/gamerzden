import "./GameSlider.css";
import just from "../../../Ui/SliderImg/just_cause4.jpg";
import fifa23 from "../../../Ui/SliderImg/fifa_23.jpg";
import last from "../../../Ui/SliderImg/lastofus2.jpg";
import ass from "../../../Ui/SliderImg/assassin_origins.jpg";
import wwe from "../../../Ui/SliderImg/wwe.webp";
import god from "../../../Ui/SliderImg/391551-god-of-war-ragnarok-playstation-game-4k-pc-wallpaper.jpg";
function GameSilder() {
  return (
    <div className="sliders">
      <div id="textComAz" className="slider-container">
        <div className="slider item-1">
          <img src={wwe} alt="img" />
        </div>
        <div className="slider item-2">
          <img src={just} alt="img" />
        </div>
        <div className="slider item-3">
          <img src={fifa23} alt="img" />
        </div>
        <div className="slider item-4">
          <img src={last} alt="img" />
        </div>
        <div className="slider item-5">
          <img src={ass} alt="img" />
        </div>
        <div className="slider item-6">
          <img src={god} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default GameSilder;
