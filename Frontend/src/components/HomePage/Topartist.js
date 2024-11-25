import React from "react";

function TopArtist() {
  const artist = {
    name: "Emily White",
    about: "Emily is a renowned contemporary artist known for her nature-inspired works. Her abstract pieces explore the connection between human emotions and the natural world.",
    image: "https://images.unsplash.com/photo-1631585506172-213fc1e99403?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual image URL
  };

  return (
    <section className="relative w-full h-[500px] bg-gray-300">
      <img
        src={artist.image}
        alt={artist.name}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
        {/* Black overlay with opacity */}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white px-6 py-8">
          <h2 className="text-4xl font-bold">{artist.name}</h2>
          <p className="text-lg mt-4">{artist.about}</p>
        </div>
      </div>
    </section>
  );
}

export default TopArtist;
