"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HexToRGBA } from "@/lib/utils";

// Define the type for a single media item
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
};

// Define the API response type
type ApiResponse = {
  data: {
    [key: string]: {
      media: Media[];
    };
  };
};

interface DisplayAnimeProps {
  topic: string;
  name: string;
}

const DisplayAnime: React.FC<DisplayAnimeProps> = ({ topic, name }) => {
  const [trendingAnime, setTrendingAnime] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        const json: ApiResponse = await response.json();
        setTrendingAnime(json.data[name].media.slice(0, 6) || []);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-32 my-20">
      <div className="flex justify-between py-3">
        <h2 className="text-[20px] font-semibold">{topic}</h2>
        <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-6 gap-10">
        {trendingAnime.map((anime) => (
          // <Link href={`/itemDetail/${anime.id}`} key={anime.id}>
          <Link href={`/item/${anime.id}`} key={anime.id}>
            <div
              style={
                {
                  "--anime-color": HexToRGBA(
                    anime.coverImage.color || "#fff",
                    0.75
                  ),
                } as React.CSSProperties
              }
              className="group relative aspect-[10/14] w-full rounded-box overflow-hidden"
            >
              <Image
                src={anime.coverImage.extraLarge}
                alt={anime.title.english || anime.title.romaji}
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-all duration-300 w-full h-full "
              />
              <div className="absolute opacity-0 inset-0 bg-[var(--anime-color)] group-hover:opacity-100 backdrop-blur-md transition-all duration-300 flex items-center justify-center p-5">
                <p
                style={{ textShadow: "0 0 10px oklch(var(--bc))" }} 
                className="text-neutral-content text-center font-bold">
                  {anime.title.english || anime.title.romaji}
                </p>
              </div>
            </div>

            {/* <div className="trending-item-wrapper w-52">
              <div
                className="trending-item"
                style={
                  {
                    "--hover-color": anime.coverImage.color || "#ffffff",
                  } as React.CSSProperties
                }
              >
                <Image
                  src={anime.coverImage.extraLarge}
                  alt={anime.title.english || anime.title.romaji}
                  width={190}
                  height={280}
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                  className="item-image hover:bg-blue-200"
                />
                <p className="item-title">{anime.title.romaji.slice(0, 30)}</p>
              </div>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayAnime;
