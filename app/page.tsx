import React from 'react'
import AnimePlatform from '@/components/HomePage/Platform/AnimePlatform'
import DisplayAnime from '@/components/HomePage/ItemsLayout/layout'

export default function page() {
  return (
    <div className='min-h-[100vh]'>
      <AnimePlatform />
      <div>
        <DisplayAnime topic="Trending Anime" name="trending" />
        <DisplayAnime topic="Popular This Season Anime" name="popularThisSeason" />
        <DisplayAnime topic="Upcoming Next Season Anime" name="upcomingNextSeason" />
        <DisplayAnime topic="All-Time Popular Anime" name="allTimePopular" />
      </div>
    </div>
  )
}
