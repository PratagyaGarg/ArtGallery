import React, { useState } from "react";

const Upload = ({ addArt }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();

    // Create new art object
    const newArt = {
      id: Date.now(), // unique ID
      title,
      description,
      price,
      tags: tags.split(",").map((tag) => tag.trim()), // split tags by commas
      imageUrl: URL.createObjectURL(image), // preview image
      uploadedBy: "user123", // replace with logged-in user ID
      liked: false,
    };

    addArt(newArt);

    // Reset form
    setTitle("");
    setDescription("");
    setPrice("");
    setTags("");
    setImage(null);
  };

  return (
    <form onSubmit={handleUpload} className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Your Art</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Tags (comma-separated)</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full p-2"
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Upload Art
      </button>
    </form>
  );
};

export default Upload;
