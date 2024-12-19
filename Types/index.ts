export interface Welcome {
    data: Datum[];
}

export interface Datum {
    id:          number;
    title:       Title;
    coverImage:  CoverImage;
    bannerImage: null | string;
    chapters:    null;
    duration:    number;
}

export interface CoverImage {
    color:      null | string;
    extraLarge: string;
}

export interface Title {
    romaji:  string;
    english: null | string;
    native:  string;
}
