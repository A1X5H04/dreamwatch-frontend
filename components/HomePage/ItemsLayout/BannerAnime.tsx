"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import SlideShow from "./SlideShow/js/SlideShow";

type Media = {
  id: number;
  title: {
    romaji: string;
    english?: string;
  };
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  coverImage: {
    extraLarge: string;
    color?: string;
  };
  genres: string[];
  popularity: number;
  studios: {
    nodes: { name: string }[];
  };
  format: string;
  bannerImage: string;
};

// Define the API response type
type ApiResponse = {
  data: {
    [key: string]: {
      media: Media[];
    };
  };
};

const BannerAnime = () => {
  const [Anime, setAnime] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        const json: ApiResponse = await response.json();
        setAnime(json.data.top100.media.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-32 h-[30vh]">
        <span className="text-slate-400 text-xl">Loading....</span>
      </div>
    );
  }

  return Anime.map((anime) => {
    return (
      <div className="embla__slide " key={anime.id}>
        <div className="embla__slide__number overflow-hidden bg-slate-950">
          <div className="relative w-full h-full overflow-hidden rounded-sm shadow-md">
            <Image
              className="object-cover h-full w-full"
              fill
              src={anime.bannerImage}
              alt={anime.title.romaji}
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-top from-black to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-bottom from-slate-400 to-slate-600 text-white px-4 py-2 text-sm">
              {anime.title.romaji}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default BannerAnime;
