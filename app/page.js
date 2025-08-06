import Navbar from "./components/Navbar";
import Body from "./landing/Body";

import Hero from "./landing/Hero";


export default function Home() {
  return (
    <div className="bg-white" >
      <Navbar/>
      <div className="">
         <Hero/>
         <Body/>
        
      </div>
     
     
    </div>
  );
}
