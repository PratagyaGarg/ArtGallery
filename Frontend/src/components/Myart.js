import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Myart({ likedArts }) {
  const [myArts, setMyArts] = useState([]);  // State to store user's uploaded art
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [message, setMessage] = useState("");  // Message state for error handling

  // Fetch user data on component mount
  useEffect(() => {
    const fetchMyArts = async () => {
      const token = localStorage.getItem("authToken");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        setMessage("User is not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/upload/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch arts.");
        }

        const data = await response.json();
        console.log(data);
        if (data.arts && data.arts.length > 0) {
          setMyArts(data.arts);  // Set the fetched arts in the state
        } else {
          setMessage("No arts uploaded yet.");
        }
      } catch (error) {
        setMessage(error.message || "An error occurred while fetching the arts.");
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchMyArts();
  }, []);

  return (
    <div className="relative w-full p-5 flex flex-col items-center bg-[#ff4500]">
      {/* navbar spacer */}
      <div className="my-14 w-full"></div>
      
      <div className="w-11/12 mt-10">
        {/* My Arts Section */}
        <h2 className="text-5xl font-caviarDreams bg-[#000000da] px-4  rounded-sm text-white font-bold mb-4">My Arts</h2>
        
        {loading ? (
          <p>Loading...</p>  // Display loading message while fetching data
        ) : message ? (
          <p className="text-gray-500">{message}</p>  // Display error/success message
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {myArts.map((art) => (
              <div
                key={art._id}
                className="p-2 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <img
                  src={`http://localhost:5000${art.imageUrl}`}  // Use the correct image URL from the response
                  alt={art.title}
                  className="w-full h-96 object-cover rounded-md mb-2"
                />
                <h3 className="font-bold text-2xl tracking-wide font-caviarDreams ">{art.title}</h3>  {/* Title of the art */}
                <p className="text-sm text-black">{art.description}</p>  {/* Description of the art */}
                <p className="text-xs text-gray-400">{new Date(art.createdAt).toLocaleDateString()}</p>  {/* Date the art was uploaded */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Liked Arts Section */}
      <div className="w-11/12 mt-10">
      <h2 className="text-5xl font-caviarDreams bg-[#000000da] px-4  rounded-sm text-white font-bold mb-4">Liked Arts</h2>
      <div className="grid grid-cols-3 gap-4">
          {likedArts && likedArts.length > 0 ? (
            likedArts.map((art) => (
              <div
                key={art.id}
                className="p-2 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full h-96 object-cover rounded-md mb-2"
                />
                <h3 className="font-bold text-lg tracking-wide font-caviarDreams ">{art.name}</h3>
                <p className="text-sm text-gray-600">By {art.artist}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No liked arts yet.</p>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <Link
        to="/upload"
        className="fixed bottom-10 text-3xl border-2 border-solid border-black bg-white hover:bg-gray-200 text-[#ff4500] font-bold py-4 px-6 rounded-full shadow-lg"
        style={{ transform: "translateX(-50%)", left: "50%" }}
      >
        +
      </Link>
    </div>
  );
}

export default Myart;
