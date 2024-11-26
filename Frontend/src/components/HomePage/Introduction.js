import React from "react";

function Introduction() {
  return (
    <section className="relative bg-[#ff4500] h-screen overflow-hidden">
      {/* Manually Positioned Images as Background */}
      <img
        src="https://plus.unsplash.com/premium_photo-1676668705395-047a9d36f6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwaW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Overlay 1"
        className="absolute rounded-lg w-[10vw] top-[20vh] left-[5vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFydCUyMGluJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
        alt="Overlay 2"
        className="absolute rounded-lg w-[15vw] top-[16vh] left-[58vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://plus.unsplash.com/premium_photo-1677679817087-b8f827c22300?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Overlay 3"
        className="absolute rounded-lg w-[10vw] top-[60vh] left-[40vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Overlay 4"
        className="absolute rounded-lg w-[10vw] top-[70vh] left-[5vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://plus.unsplash.com/premium_photo-1677609898243-63280b6c89a1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Overlay 5"
        className="absolute rounded-lg w-[15vw] top-[15vh] left-[80vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://images.unsplash.com/photo-1578406843598-34a4518d168d?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Overlay 6"
        className="absolute rounded-lg w-[16vw] top-[70vh] left-[68vw] z-10 border-2 border-solid border-white"
      />

      <img
        src="https://images.unsplash.com/photo-1577720643272-265f09367456?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Overlay 7"
        className="absolute rounded-lg w-[10vw] top-[40vh] left-[25vw] z-10 border-2 border-solid border-white"
      />

      {/* Title */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <h2 className="text-7xl font-florilan font-light text-white text-center">
          Find Inspiration<br />
          Wherever You Are
        </h2>
      </div>
    </section>
  );
}

export default Introduction;
