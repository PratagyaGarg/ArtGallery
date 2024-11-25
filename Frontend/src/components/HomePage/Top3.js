import React from "react";

function Top3Art() {
  const artData = [
    {
      id: 1,
      title: "Sunset Serenity",
      artist: "John Doe",
      concept: "A beautiful depiction of nature's calm during a sunset.",
      image: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww", // Add your image path here
    },
    {
      id: 2,
      title: "Abstract Dreams",
      artist: "Jane Smith",
      concept: "A modern take on abstract art, exploring emotions through color.",
      image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww", // Add your image path here
    },
    {
      id: 3,
      title: "Whispers of the Forest",
      artist: "Emily White",
      concept: "A piece capturing the serenity and mystery of a quiet forest.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww", // Add your image path here
    },
  ];

  return (
    <section className="py-28 uppercase text-center bg-[#000000ef] text-white">
      <h2 className="text-6xl font-bold tracking-wider font-queenRogette text mb-12">Artistry in Focus:<br/>Top Artists of the Week</h2>
      <div className="max-w-7xl mx-auto space-y-16">
        {artData.map((art, index) => (
          <div
            key={art.id}
            className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center justify-between gap-20 `}
          >
            <div className="flex-1">
              <img
                src={art.image}
                alt={art.title}
                className=" w-full h-96 object-cover rounded-lg shadow-lg "
              />
            </div>
            <div className="flex-1 ">
              <h3 className="text-6xl  mb-6 font-light font-caviarDreams text-[#F9F2ED]">{art.title}</h3>
              <p className="text-xl  text-[#ff6600]">By: {art.artist}</p>
              <p className="text-xl text-gray-600">{art.concept}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Top3Art;
