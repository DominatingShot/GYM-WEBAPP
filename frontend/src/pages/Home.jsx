import Navbar from '../components/layout/Navbar';
import Hero from '../components/specific/Hero';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;
