import React from "react";
import "./homepage.css";
import FetchData from "@/app/api/data/route.js";
import { Datum } from "@/Types";
import Image from "next/image";
import Link from "next/link";

interface ItemListProps {
  name: string;
  e1: number;
  e2: number;
}

const ItemList: React.FC<ItemListProps> = async ({ name, e1, e2 }) => {
  const response: Datum[] = await FetchData();

  return (
    <div className="trending-container">
      <div className="trending-header">
        <h2>{name}</h2>
        <a href="#" className="view-all">
          View All
        </a>
      </div>
      <div className="trending-grid">
        {response.slice(e1, e2).map((item) => (
          <Link href={`/itemDetail/${item.id}`} key={item.id}>
            <div
              className="trending-item"
              style={
                {
                  "--hover-color": `${item.coverImage.color}`,
                } as React.CSSProperties
              }
              key={item.id}
            >
              <div>
                <Image
                  src={item.coverImage.extraLarge}
                  alt={item.title.english || item.title.romaji}
                  width={30}
                  height={10}
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                  className="item-image"
                />
              </div>
              <p className="item-title">{item.title.romaji}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
