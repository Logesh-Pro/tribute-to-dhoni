import React from 'react';

const Contribution = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <section className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        
        {/* Title */}
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ⭐ My GitHub Contributions
        </h1> */}

{/* GitHub Stars Section */}
<div className="flex flex-col items-center justify-center mb-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
    ⭐ Support This Project
  </h2>

  <a
    href="https://github.com/logesh-pro/tribute-to-dhoni/tree/main"
    target="_blank"
    rel="noopener noreferrer"
    className="transform transition duration-300 hover:scale-110"
  >
    <img
      src="https://img.shields.io/github/stars/logesh-pro/tribute-to-dhoni?style=for-the-badge"
      alt="GitHub stars"
      className="h-14 md:h-16"
    />
  </a>

  <p className="mt-4 text-gray-600 text-base md:text-lg max-w-md text-center">
    If you enjoyed this project or found it inspiring,
    consider giving it a ⭐ on GitHub.  
    Your support means a lot!
  </p>
</div>

        {/* GitHub Stars
        <a
          href="https://github.com/logesh-pro/tribute-to-dhoni/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6"
        >
          <img
            src="https://img.shields.io/github/stars/logesh-pro/tribute-to-dhoni?style=social"
            alt="GitHub stars"
          />
        </a> */}

        {/* Contribution Graph */}
        {/* <div className="flex justify-center mb-6">
          <img
            src="https://ghchart.rshah.org/logesh-pro"
            alt="GitHub contribution graph"
            className="rounded-lg max-w-full"
          />
        </div> */}

        {/* Feedback Text */}
        <p className="text-gray-600 text-lg mb-6">
          Have ideas, feature requests, or improvements in mind?
          I’d love to hear your feedback and suggestions 🚀
        </p>

        {/* Feedback Button */}
        <a
          href="https://github.com/YOUR_USERNAME/YOUR_REPO/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-all duration-200 hover:scale-105"
        >
          Give Feedback on GitHub
        </a>

      </section>
    </main>
  );
};

export default Contribution;
