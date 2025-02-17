import request, { gql } from "graphql-request";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { animeId: string } }
) {
  const { animeId } = await params;

  const query = gql`
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        # Basic Anime Information
        id
        title {
          romaji
          english
          native
        }
        description(asHtml: false)
        coverImage {
          extraLarge
          large
          color
        }
        bannerImage
        format
        duration
        status
        startDate {
          year
          month
          day
        }
        endDate {
          day
          month
          year
        }
        season
        averageScore
        meanScore
        popularity
        favourites
        studios(isMain: true) {
          nodes {
            name
          }
        }
        staff {
          nodes {
            name {
              full
            }
            image {
              medium
            }
          }
        }

        source
        hashtag
        genres
        tags {
          name
        }

        trailer {
          id
          site
          thumbnail
        }

        # Relations (Related Anime)
        relations {
          edges {
            node {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
              format
              type
            }
            relationType
          }
        }

        # Characters
        characters {
          edges {
            role
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }

        # Staff
        staff {
          edges {
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }

        #Episodes

        # Recommendations
        recommendations {
          edges {
            node {
              mediaRecommendation {
                id
                title {
                  romaji
                  english
                }
                coverImage {
                  large
                }
                format
              }
            }
          }
        }
      }
    }
  `;

  const data = await request("https://graphql.anilist.co", query, {
    id: parseInt(animeId),
  });

  return NextResponse.json({ data });
}
