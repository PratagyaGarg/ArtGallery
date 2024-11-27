import React, { useState } from "react";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(""); // To display success/error messages

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Authorization token
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Art uploaded successfully!");
        console.log("Uploaded Art:", data);

        // Reset form
        setTitle("");
        setDescription("");
        setTags("");
        setImage(null);
      } else {
        setMessage(data.message || "Failed to upload art.");
      }
    } catch (error) {
      console.error("Error uploading art:", error);
      setMessage("An error occurred while uploading. Please try again.");
    }
  };

  return (
    <div className="relative bg-[#ff4500] h-screen">
      {/* Placeholder space for the fixed navbar */}
      <div className="h-20"></div> {/* Adjust height as per navbar */}

      {/* Form Container */}
      <form onSubmit={handleUpload} className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow-lg shadow-black mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-600 text-center">Upload Your Art</h2>

        {message && (
          <p
            className={`mb-6 p-4 text-center rounded-lg ${
              message.includes("success") ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-black mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter the title of the your Art"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff4500] text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="write the desription of your Art"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff4500] text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="write the tags for categoriztion"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff4500] text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full p-3  text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ff4500]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#ff4500] text-white font-bold text-lg rounded-lg hover:bg-[#ff5733] transition duration-300"
        >
          Upload Art
        </button>
      </form>
    </div>
  );
};

export default Upload;
