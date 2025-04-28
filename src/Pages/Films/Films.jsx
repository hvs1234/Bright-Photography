/* eslint-disable no-unused-vars */
import React from "react";
import TopBanner from "../../Components/Card/TopBanner";
import { FilmsTopBannerData } from "../../Services/Data/TopBannerData";
import FilmsMain from "./FilmsMain";

const Films = () => {
  return (
    <>
      <TopBanner topBannerData={FilmsTopBannerData} />
      <FilmsMain />
    </>
  );
};

export default Films;
