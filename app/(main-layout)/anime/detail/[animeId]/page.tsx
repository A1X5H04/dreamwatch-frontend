import { getAnimeDetail } from "@/lib/queries";
import React from "react";

interface AnimeDetailPageProps {
  params: Promise<{ animeId: string }>;
}

async function AnimeDetailPage({ params }: AnimeDetailPageProps) {
  const { animeId } = await params;

  const animeData = await getAnimeDetail(animeId);

  return (
    <div>
      <h1>Anime Detail Page</h1>
      <p>animeId: {animeId}</p>
      <pre>{JSON.stringify(animeData, null, 2)}</pre>
    </div>
  );
}

export default AnimeDetailPage;
