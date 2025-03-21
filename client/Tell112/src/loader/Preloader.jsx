const Preloader = () => {
    return (
      <div className="fixed inset-0 bg-black z-[9999] overflow-hidden">
        <style jsx>{`
          @keyframes tapeMove {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-tape {
            animation: tapeMove 10s linear infinite;
          }
        `}</style>
  
        {/* Crime Scene Tapes */}
        {[-45, 45, 135, 45].map((angle, index) => (
          <div
            key={index}
            className="absolute h-12 w-[200%] -left-1/2"
            style={{
              top: `${(index + 1) * 20}%`,
              transform: `rotate(${angle}deg)`,
            }}
          >
            <div className="flex items-center h-full animate-tape">
              <div className="flex-shrink-0 bg-yellow-400 h-full w-full relative">
                {/* Seamless repeating text */}
                <div className="absolute inset-0 flex items-center whitespace-nowrap">
                  {[...Array(40)].map((_, i) => (
                    <span
                      key={i}
                      className="text-black font-black text-xl uppercase pr-8"
                    >
                      CRIME SCENE DO NOT CROSS
                    </span>
                  ))}
                </div>
                {/* Black border */}
                <div className="absolute inset-0 border-2 border-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Preloader;