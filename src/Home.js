import Header from "./components/Header";
import CarouselFadeExample from './components/Carousel';
import HomeBody from "./components/Body";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="App">
            <Header />
            <CarouselFadeExample />
            <HomeBody />
            <Footer />
            </div>
    );
}

export default Home;