import React from "react";
import DisplayAnime from "@/components/HomePage/ItemsLayout/layout";
import SlideShow from "@/components/HomePage/ItemsLayout/SlideShow/js/SlideShow";
import BannerAnime from "@/components/HomePage/ItemsLayout/BannerAnime";

function HomePage() {
  return (
    <>
    <div className="">
      <SlideShow />
      {/* <BannerAnime /> */}

    </div>
    <div className="min-h-[100vh]">
      <div>
        <DisplayAnime topic="Trending Anime" name="trending" />
        <DisplayAnime topic="Popular This Season Anime" name="popularThisSeason" />
        <DisplayAnime topic="Upcoming Next Season Anime" name="upcomingNextSeason" />
        <DisplayAnime topic="All-Time Popular Anime" name="allTimePopular" />
      </div>
    </div>
    </>
  );
}

export default HomePage;
