import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollVelocity from "../reactbits/ScrollVelocity";
import yellow from "../assets/yellow.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4  overflow-hidden"
      style={{
        backgroundImage: `url(${yellow})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div  className="mt-40 mb-20">
      {/* Splash Text Animation */}
      <ScrollVelocity
        texts={["WELCOME TO TELL 112 |", "REPORT CRIME NOW |"]}
        velocity="100"
        className="custom-scroll-text text-white text-5xl font-bold mb-8  shadow-lg"
      /></div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 drop-shadow-md">
          Help Yourself, Your Friends, and Your Family
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Reporting a crime is an essential step in keeping our communities safe.
          By reporting a crime, you assist law enforcement in identifying,
          investigating, and prosecuting criminals. You also contribute to
          protecting yourself, your family, and your neighbors from becoming
          victims of crime. Additionally, reporting crimes allows law enforcement
          to track and analyze trends, enabling them to prevent and solve future
          crimes more effectively. Ultimately, reporting a crime ensures justice
          is served and that perpetrators are held accountable.
        </p>

        {/* Report Crime Button */}
        <Link
          to="/report"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Report Crime
        </Link>
      </div>

      {/* Crime Reduction Techniques Section */}
      <section className="mt-16 w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Crime Reduction Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technique 1 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">Community Watch</h3>
            <p className="text-white mt-2">
              Organize neighborhood watch programs to monitor suspicious activities
              and report them promptly.
            </p>
          </div>

          {/* Technique 2 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Proper Lighting
            </h3>
            <p className="text-white mt-2">
              Ensure streets, alleys, and public spaces are well-lit to deter
              criminal activities.
            </p>
          </div>

          {/* Technique 3 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Secure Your Home
            </h3>
            <p className="text-white mt-2">
              Install security systems, locks, and cameras to protect your property
              and loved ones.
            </p>
          </div>

          {/* Technique 4 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Stay Informed
            </h3>
            <p className="text-white mt-2">
              Keep up-to-date with local crime reports and safety alerts to stay
              vigilant.
            </p>
          </div>

          {/* Technique 5 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Support Victims
            </h3>
            <p className="text-white mt-2">
              Offer assistance to victims of crime and encourage them to seek help
              from authorities.
            </p>
          </div>

          {/* Technique 6 */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white">
              Educate Youth
            </h3>
            <p className="text-white mt-2">
              Teach children about personal safety and the importance of reporting
              suspicious behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Together, We Can Make a Difference
        </h2>
        <p className="text-lg text-white leading-relaxed">
          Every report matters. By working together, we can create safer
          neighborhoods and ensure justice is served. Don't hesitate—take action
          today!
        </p>
        <Link
          to="/report"
          className="inline-block mt-6 bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Take Action Now
        </Link>
      </section>
    </div>
  );
};

export default Home;