const Hero = ({ title = "My MTG Tracker" }) => {
  return (
    <section className="bg-gradient-to-b from-gray-700 to-orange-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
