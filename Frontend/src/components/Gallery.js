import React, { useState } from "react";

function Gallery() {
  const [isAsideOpen, setIsAsideOpen] = useState(false); // Default to closed
  const toggleAside = () => setIsAsideOpen(!isAsideOpen);

  const [arts, setArts] = useState([
    {
      id: 1,
      image: "image1.jpg",
      artist: "Artist A",
      name: "Art 1",
      likes: 120,
      liked: false, // Initial liked state
    },
    {
      id: 2,
      image: "image2.jpg",
      artist: "Artist B",
      name: "Art 2",
      likes: 85,
      liked: false, // Initial liked state
    },
    // Add more arts here...
  ]);

  const toggleLike = (id) => {
    setArts((prevArts) =>
      prevArts.map((art) =>
        art.id === id
          ? { ...art, liked: !art.liked, likes: art.liked ? art.likes - 1 : art.likes + 1 }
          : art
      )
    );
  };

  return (
    <div className="relative w-full h-screen">
      {/* Navbar Spacer */}

      {/* Content */}
      <div className="flex">
        {/* Aside Section */}
        <aside
          className={`fixed z-[99] left-0 h-full bg-[#ff4500] shadow-lg transition-all duration-300 ${
            isAsideOpen ? "w-64" : "w-16"
          }`}
        >
          <button
            onClick={toggleAside}
            className={`absolute top-4 left-2 transform transition-transform duration-300 text-3xl text-white p-2 rounded-full`}
          >
            {isAsideOpen ? (
              <i className="ri-menu-fold-line"></i>
            ) : (
              <i className="ri-menu-unfold-line"></i>
            )}
          </button>

          {isAsideOpen && (
            <div className="mt-32 px-4">
              <h2 className="text-2xl mb-4 font-caviarDreams text-white font-bold">
                Filters
              </h2>
              <input
                type="text"
                placeholder="Search arts..."
                className="w-full px-3 py-2 mb-4 border rounded-full"
              />
              <div className="space-y-2 text-white">
                <button className="w-full text-left text-lg p-2">
                  Art Style
                </button>
                <button className="w-full text-left text-lg p-2">
                  Recently Uploaded
                </button>
                <button className="w-full text-left text-lg p-2">
                  Most Liked
                </button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isAsideOpen ? "ml-64" : "ml-16"
          }`}
        >
          <div className="h-20"></div>
          {/* Grid for Images */}
          <div className="grid grid-cols-3 gap-10 p-8 pt-20">
            {arts.map((art) => (
              <div
                key={art.id}
                className="relative rounded-sm overflow-hidden shadow-md"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{art.name}</h3>
                  <p className="text-sm text-gray-600">By {art.artist}</p>
                </div>
                {/* Floating Like Button */}
                <button
                  onClick={() => toggleLike(art.id)}
                  className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded-full shadow"
                >
                  {art.liked ? (
                    <i className="ri-heart-fill"></i>
                  ) : (
                    <i className="ri-heart-line"></i>
                  )}{" "}
                  {art.likes}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Gallery;
