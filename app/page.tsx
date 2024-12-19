import React from 'react'
import AnimePlatform from '@/components/Platform/AnimePlatform'
import ItemList from '@/components/ItemList/itemList'

export default function page() {
  return (
    <div className='min-h-[100vh]'>
      <AnimePlatform />
      <div>
        <ItemList name="Trending now" e1={0} e2={6} />
        <ItemList name="Popular this season" e1={6} e2={12} />
        <ItemList name="Upcoming next season" e1={12} e2={18} />
        <ItemList name="All time popular" e1={18} e2={24} />
      </div>
    </div>
  )
}
