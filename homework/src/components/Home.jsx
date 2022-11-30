import React from "react";
import NewReleases from "./NewReleases";
import TrendingNow from "./TrendingNow";
import WatchAgain from "./WatchAgain";

const Home = () => {
  return (
    <div>
      <TrendingNow />
      <WatchAgain />
      <NewReleases />
    </div>
  );
};
export default Home;
