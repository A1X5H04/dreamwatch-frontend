import { NextResponse } from "next/server";
import { gql, request } from "graphql-request";

export async function GET() {
  const query = gql`
    query {
      # Trending Anime
      trending: Page(perPage: 6) {
        media(sort: TRENDING_DESC, type: ANIME) {
          id
          title {
            romaji
            english
          }
          startDate {
            year
            month
            day
          }
          coverImage {
            extraLarge
            color
          }
          genres
          popularity
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          bannerImage
        }
      }

      # Popular This Season Anime
      popularThisSeason: Page(perPage: 6) {
        media(
          sort: POPULARITY_DESC
          season: WINTER
          seasonYear: 2024
          type: ANIME
        ) {
          id
          title {
            romaji
            english
          }
          startDate {
            year
            month
            day
          }
          coverImage {
            extraLarge
            color
          }
          genres
          popularity
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          bannerImage
        }
      }

      # Upcoming Next Season Anime
      upcomingNextSeason: Page(perPage: 6) {
        media(
          sort: POPULARITY_DESC
          season: SPRING
          seasonYear: 2024
          type: ANIME
        ) {
          id
          title {
            romaji
            english
          }
          startDate {
            year
            month
            day
          }
          coverImage {
            extraLarge
            color
          }
          genres
          popularity
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          bannerImage
        }
      }

      # All-Time Popular Anime
      allTimePopular: Page(perPage: 6) {
        media(sort: POPULARITY_DESC, type: ANIME) {
          id
          title {
            romaji
            english
          }
          startDate {
            year
            month
            day
          }
          coverImage {
            extraLarge
            color
          }
          genres
          popularity
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          bannerImage
        }
      }

      # Top 100 Anime
      top100: Page(perPage: 10) {
        media(sort: SCORE_DESC, type: ANIME) {
          id
          title {
            romaji
            english
          }
          startDate {
            year
            month
            day
          }
          coverImage {
            extraLarge
            color
          }
          genres
          popularity
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          status
          episodes
          averageScore
          bannerImage
        }
      }
    }
  `;

  const data = await request("https://graphql.anilist.co", query);
  if(!data){
    throw new Error("Failed to fetch data from GraphQL API");
  }

  return NextResponse.json({ data });
}
