import Navbar from "./components/Navbar";
import Body from "./landing/Body";
import Bottom from "./landing/Bottom";

import Hero from "./landing/Hero";
import InfoCardPage from "./landing/Infocardpage";
import Slide from "./landing/Slide";


export default function Home() {
  return (
    <div className="bg-black overflow-y-hidden" >
      <Navbar/>
      <div className="overflow-x-hideen ">
         <Hero/>
         <Body/>
        
         <div className="bg-white">
            <Slide/>
         </div>
         <InfoCardPage/>
         <Bottom/>
        
      </div>
     
     
    </div>
  );
}
