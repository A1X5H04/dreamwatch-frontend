'use client';
import React, { useEffect, useState } from 'react';
import './layout.css';
import Link from 'next/link';
import Image from 'next/image';

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
        const response = await fetch('/api/home');
        const json: ApiResponse = await response.json();
        setTrendingAnime(json.data[name].media.slice(0, 6) || []); 
      } catch (error) {
        console.error('Error fetching anime data:', error);
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
    <div className="trending-container">
      <div className="trending-header">
        <h2>{topic}</h2>
        <a href="#" className="view-all">
          View All
        </a>
      </div>
      <div className="trending-grid">
        {trendingAnime.map((anime) => (
          // <Link href={`/itemDetail/${anime.id}`} key={anime.id}>
          <Link href={`/item/${anime.id}`} key={anime.id}>
            <div className="trending-item-wrapper w-52 mb-10">
              <div
                className="trending-item"
                style={{
                  '--hover-color': anime.coverImage.color || '#ffffff',
                } as React.CSSProperties}
              >
                <Image
                  src={anime.coverImage.extraLarge}
                  alt={anime.title.english || anime.title.romaji}
                  width={190}
                  height={280}
                  sizes="50vw"
                  style={{ objectFit: 'cover' }}
                  className="item-image"
                />
                <p className="item-title">{anime.title.romaji.slice(0, 30)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayAnime;
