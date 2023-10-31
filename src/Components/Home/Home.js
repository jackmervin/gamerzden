import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Plane from "./Plane/Plane";
import GamesL from "./GamesL/GamesL";
import Footer from "./Footer/Footer";
import SlideConsole from "./SlideConsole/SlideConsole";
function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Plane />
      <SlideConsole />
      <GamesL />
      <Footer />
    </div>
  );
}

export default Home;
