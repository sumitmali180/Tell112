import police from "../assets/police.webp";

const Preloader2 = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/5 z-[9999] overflow-hidden">
      <img src={police} alt="Loading..." className="w-72 h-72 animate-pulse" />
    </div>
  );
};

export default Preloader2;
