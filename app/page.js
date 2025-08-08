import Navbar from "./components/Navbar";
import Body from "./landing/Body";

import Hero from "./landing/Hero";
import InfoCardPage from "./landing/Infocardpage";
import Slide from "./landing/Slide";


export default function Home() {
  return (
    <div className="bg-white" >
      <Navbar/>
      <div className="overflow-x-hideen ">
         <Hero/>
         <Body/>
         <Slide/>
         <InfoCardPage/>
        
      </div>
     
     
    </div>
  );
}
