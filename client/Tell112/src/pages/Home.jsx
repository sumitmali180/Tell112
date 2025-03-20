import SplashCursor from '../reactbits/SplashCursor'
import yellow from "../assets/yellow.jpg";



const Home = () => {
    return <div
          className="min-h-screen flex items-center justify-center  p-4 mt-16"
          style={{
            backgroundImage: `url(${yellow})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          

<SplashCursor />
        </div>;
  };
  
  export default Home;