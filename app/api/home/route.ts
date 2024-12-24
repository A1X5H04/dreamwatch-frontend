import { NextResponse } from "next/server";
import { gql, request } from "graphql-request";

export async function GET() {
  const query = gql`
    query {
      # Trending Anime
      trending: Page(perPage: 5) {
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
        }
      }

      # Popular This Season Anime
      popularThisSeason: Page(perPage: 5) {
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
        }
      }

      # Upcoming Next Season Anime
      upcomingNextSeason: Page(perPage: 5) {
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
        }
      }

      # All-Time Popular Anime
      allTimePopular: Page(perPage: 5) {
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
        }
      }
    }
  `;

  const data = await request("https://graphql.anilist.co", query);

  return NextResponse.json({ data });
}
