import React from "react";
import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import NewsSettler from "./component/NewsSettler";


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Analytics/>
     <NewsSettler/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
