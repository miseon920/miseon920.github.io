import React, { useSyncExternalStore } from "react";
import HomeNav from "./components/HomeNav";

const App = () => {
  //it = openmodal:false
  //console.log(openmodal); //false
  return (
    <div className={`Wrap`}>
      <HomeNav />
    </div>
  );
};

export default App;
