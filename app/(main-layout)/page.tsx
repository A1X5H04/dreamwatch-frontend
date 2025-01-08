import React from "react";
import DisplayAnime from "@/components/HomePage/ItemsLayout/layout";

function HomePage() {
  return (
    <div className="min-h-[100vh]">
      <div>
        <DisplayAnime topic="Trending Anime" name="trending" />
        <DisplayAnime topic="Popular This Season Anime" name="popularThisSeason" />
        <DisplayAnime topic="Upcoming Next Season Anime" name="upcomingNextSeason" />
        <DisplayAnime topic="All-Time Popular Anime" name="allTimePopular" />
      </div>
    </div>
  );
}

export default HomePage;
