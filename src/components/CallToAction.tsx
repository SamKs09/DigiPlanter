import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-tr from-primary to-primary-400 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Ready to Transform Your Plant Care Experience?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Download the app today and join thousands of plant lovers who have
          revolutionized their gardening journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg shadow hover:bg-white/90 transition-colors w-64 justify-center"
          >
            <img
              src="/assets/PlayStore.png"
              alt="Play Store"
              className="w-7 h-7"
              style={{ objectFit: "contain" }}
            />
            Download on Play Store
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg shadow hover:bg-white/90 transition-colors w-64 justify-center"
          >
            <img
              src="/assets/AppStore.png"
              alt="App Store"
              className="w-7 h-7"
              style={{ objectFit: "contain" }}
            />
            Download on App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
