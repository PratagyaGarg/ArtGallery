import React, { useState } from "react";

function Gallery() {
  const [isAsideOpen, setIsAsideOpen] = useState(false); // Default to closed
  const toggleAside = () => setIsAsideOpen(!isAsideOpen);

  const [arts, setArts] = useState([]); // Initialize as empty
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality

  const API_KEY = "wQxLG40vEXdMJqnZHxkrctiWqwBo6htiz34Wg6Mw_Fs";

  // Fetch images from Unsplash
  const fetchArts = async (query = "", orderBy = "latest") => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query || "art"}&per_page=9&order_by=${orderBy}`,
        {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch arts");
      }

      const data = await response.json();

      // Map response to arts format
      const images = data.results.map((item) => ({
        id: item.id,
        image: item.urls.regular,
        artist: item.user.name,
        name: item.alt_description || "Untitled",
        likes: item.likes,
        liked: false,
      }));

      setArts(images);
    } catch (error) {
      console.error("Error fetching arts:", error);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    fetchArts(searchQuery);
  };

  // Toggle like functionality
  const toggleLike = (id) => {
    setArts((prevArts) =>
      prevArts.map((art) =>
        art.id === id
          ? { ...art, liked: !art.liked, likes: art.liked ? art.likes - 1 : art.likes + 1 }
          : art
      )
    );
  };

  // Fetch default arts on component mount
  React.useEffect(() => {
    fetchArts();
  }, []);

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
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search arts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 mb-4 border rounded-full"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#ff4500] py-2 rounded-full"
                >
                  Search
                </button>
              </form>
              <div className="space-y-2 text-white">
                <button
                  onClick={() => fetchArts("", "latest")}
                  className="w-full  text-left text-lg p-2"
                >
                  Recently Uploaded
                </button>
                <button
                  onClick={() => fetchArts("", "popular")}
                  className="w-full text-left text-lg p-2"
                >
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
          <div className="grid grid-cols-3 gap-16 p-8 pt-20">
            {arts.map((art) => (
              <div
                key={art.id}
                className="relative rounded-sm overflow-hidden shadow-md"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-96 object-cover"
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

export default Gallery
