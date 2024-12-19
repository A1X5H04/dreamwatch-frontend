import React from 'react';
import FetchData from '@/app/api/data/route.js';
import '../../itemLayout/ListData.css';
import { Datum } from '@/Types';
import Image from 'next/image';

type Props = {
  params: { itemid: string };
};

export default async function ListData({ params }: Props) {
  // Fetch the data
  const response: Datum[] = await FetchData();

  // Ensure `itemid` is compared as a string
  const itemId = params.itemid;

  return (
    <>
      {response.map((data) =>
        itemId === String(data.id) ? (
          <div key={data.id} className="main-layout">
            <div>
              {data.bannerImage && (
                <Image
                  src={data.bannerImage}
                  alt={data.title.romaji}
                  width={800}
                  height={300}
                  sizes="50vw"
                  className="banner-image"
                  priority
                />
              )}
            </div>
            <div className="header">
              <div className="details">
                <div className="detail">
                  <div className="cover-rap-overlay">
                    <div className="cover-rap-inner">
                      <Image
                        src={data.coverImage.extraLarge}
                        alt={data.title.romaji}
                        width={300}
                        height={400}
                        sizes="50vw"
                        className="cover-image"
                      />
                    </div>
                    <div className="action">
                      <div className="list">
                        <div className="add">Add to Cart</div>
                      </div>
                      <div>
                        {/* heart logo */}
                      </div>
                    </div>
                  </div>

                  <div className="description">
                    <h2>{data.title.romaji}</h2>
                    {/* <p>{data.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
}
