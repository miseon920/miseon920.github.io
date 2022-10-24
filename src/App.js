import React, { useEffect, useHistory } from "react";
import HomeNav from "./components/HomeNav";
import Top_bt from "./components/Top_bt";

const App = () => {
  // const history = useHistory();

  // useEffect(() => {
  //   let unlisten = history.listen((location) => {});

  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

  return (
    <div className={`Wrap`}>
      <HomeNav />
      <Top_bt />
    </div>
  );
};

export default App;
