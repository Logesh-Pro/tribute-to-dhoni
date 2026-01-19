import React from "react";
import { useNavigate, Link } from "react-router-dom";
// Sample videos
const videos = [
  { id: "i3tcsO277qs", comment: "Dhoni’s iconic helicopter shot" },
  { id: "VHlifzyyzC8", comment: "Last-over finish under pressure" },
  { id: "PEUuSm7gHHk", comment: "Captain Cool leadership moment" },
  { id: "bzC2aAoA_RY", comment: "Lightning-fast stumping" },
  { id: "Wj61ficxSzs", comment: "World Cup winning six" },
  { id: "6L5-DKQ1m-c", comment: "Epic cricket highlight" },
  { id: "MWemYfk_-Lc", comment: "Another memorable moment" },
  { id: "sD_M_HY_hLs", comment: "Amazing finisher" },
  { id: "hedJhsgIiF8", comment: "Lightning wicket keeper" },
  { id: "GvcHhAK_zzQ", comment: "Lightning wicket keeper" },
];

const MoreIw = () => {
  const navigate = useNavigate();
  const openVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black p-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/india")}
        className="text-white mb-8 flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg shadow hover:bg-gray-800 hover:text-yellow-400 transition"
      >
        ← Back
      </button>
      <h1 className="text-white text-3xl font-bold mb-8">More Videos</h1>

      {/* Grid with 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => openVideo(video.id)}
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.comment}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Comment */}
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {video.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreIw;
