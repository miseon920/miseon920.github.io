import React, { useEffect, useHistory } from "react";
import HomeNav from "./components/HomeNav";

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
    </div>
  );
};

export default App;
