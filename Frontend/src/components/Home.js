import React from "react";
import Introduction from './HomePage/Introduction'
import Top3 from './HomePage/Top3'
import Topartist from './HomePage/Topartist'


function Home() {
  return (
    <div className="w-full h-screen">
      <Introduction />
      <Top3 />
      <Topartist />
    </div>
  );
}


export default Home;