import React from "react";
import { useNavigate, Link } from "react-router-dom";
// Sample videos
const videos = [
  { id: "DnZF9dbV80Y", comment: "Captain Cool leadership moment" },
  { id: "4uh0u3-ckxs", comment: "Epic cricket highlight" },
  { id: "ABS7EDxXcys", comment: "Lightning-fast stumping" },
  { id: "EyKIlcMto6M", comment: "World Cup winning six" },
  { id: "lH6oRAH0z-E", comment: "Another memorable moment" },
  { id: "b4fpgCwUYLE", comment: "Dhoni’s iconic helicopter shot" },
  { id: "a3ydWcUKXSk", comment: "Last-over finish under pressure" },
  { id: "4nO6fiXh90Q", comment: "Amazing finisher" },
  { id: "VHEXqO2gPeU", comment: "Lightning wicket keeper" },
];

const MoreCC = () => {
  const navigate = useNavigate();
  const openVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black p-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/csk")}
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

export default MoreCC;
