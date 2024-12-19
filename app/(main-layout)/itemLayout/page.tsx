import React from 'react'
import FetchData from '@/app/api/data/route.js'
import './ListData.css'
import { Datum } from '@/Types'
import Image from 'next/image'

export default async function ListData() {
  const response: Datum[] = await FetchData()

  return (
    <>
      {response.map((data) => (
        <div key={data.id} className='main-layout'>
          <div>
            <Image src={data.bannerImage || null !} alt={data.title.romaji} width={0} height={0} sizes='50vw' className='banner-image' />
          </div>
          <div className='header'>
            <div className='details'>
              <div className='detail'>
                <div className='cover-rap-overlay'>
                  <div className='cover-rap-inner'>
                    <Image src={data.coverImage.extraLarge} alt={data.title.romaji} width={0} height={0} sizes='50vw' className='cover-image w-screen' />
                  </div>
                  <div className='action'>
                    <div className='list'>
                      <div className='add'>Add to Cart</div>
                    </div>
                    <div>
                      {/* heart logo */}
                    </div>
                  </div>
                </div>
                <div className='description'>
                  <h2>{data.title.romaji}</h2>
                  {/* <p>{data.description}</p> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  )
}
