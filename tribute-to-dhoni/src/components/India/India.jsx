import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const videos = [
  { id: "1OaBsf2XM20", comment: "Dhoni’s iconic helicopter shot" },
  { id: "65JObp45enc", comment: "Last-over finish under pressure" },
  { id: "c9cG7FT2aUU", comment: "Captain Cool leadership moment" },
  { id: "y9-Wn8RinFQ", comment: "Lightning-fast stumping" },
  { id: "bafotoGrnqQ", comment: "World Cup winning six" },
];
const videos1 = [
  { id: "i3tcsO277qs", comment: "Dhoni’s iconic helicopter shot" },
  { id: "VHlifzyyzC8", comment: "Last-over finish under pressure" },
  { id: "PEUuSm7gHHk", comment: "Captain Cool leadership moment" },
  { id: "Wj61ficxSzs", comment: "Lightning-fast stumping" },
  { id: "GvcHhAK_zzQ", comment: "World Cup winning six" },
];
const videos2 = [
  { id: "hUNAtr-xgyo", comment: "Dhoni’s iconic helicopter shot" },
  { id: "Vz9T0utnbnw", comment: "Last-over finish under pressure" },
  { id: "R0alThHNb0Y", comment: "Captain Cool leadership moment" },
  { id: "rO_Os9iz4Hw", comment: "Lightning-fast stumping" },
  { id: "0VbrzFWKJGM", comment: "World Cup winning six" },
];

// Generic Video Row Component
const VideoRow = ({ title, videos, reverse = false, moreLink = "/" }) => {
  const [isPaused, setIsPaused] = useState(false); // state to pause animation

  const openVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Row Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-white font-extrabold text-2xl uppercase">{title}</p>
        <Link
          to={moreLink}
          className="text-white px-4 py-1 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          more...
        </Link>
      </div>

      {/* Scroll Hints */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl opacity-30 pointer-events-none">
        ←
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl opacity-30 pointer-events-none">
        →
      </div>

      {/* Video Cards */}
      <div
        style={{ animationPlayState: isPaused ? "paused" : "running" }} // pause on hover
        className={`flex gap-6 w-max transition-transform duration-500 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {[...videos, ...videos].map((video, index) => (
          <div
            key={index}
            onClick={() => openVideo(video.id)}
            className="group w-72 rounded-xl overflow-hidden shadow-xl flex-shrink-0 bg-white cursor-pointer
                       hover:scale-110 hover:shadow-2xl transition-transform duration-300"
          >
            {/* Thumbnail with overlay */}
            <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.comment}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-bold">Watch ▶</span>
              </div>
            </div>

            {/* Comment */}
            <div className="p-3 bg-gray-100 rounded-b-xl">
              <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
                {video.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// India Page
const India = () => {
  const navigate = useNavigate();

  return (
    <div  className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-10 flex flex-col gap-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="text-white mb-8 flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg shadow hover:bg-gray-800 hover:text-yellow-400 transition"
      >
        ← Back
      </button>

      {/* Video Rows */}
      <VideoRow
        title="Best Finisher"
        videos={videos}
        reverse
        moreLink="more-india-batting"
      />
      <VideoRow
        title="Lightning Wicket Keeper"
        videos={videos1}
        moreLink="more-india-keeping"
      />
      <VideoRow
        title="Captain Cool"
        videos={videos2}
        reverse
        moreLink="more-india-captain"
      />
    </div>
  );
};

export default India;
