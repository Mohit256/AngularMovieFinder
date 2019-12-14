

export interface MovieDetails {
    Title:String,
    Year:Number,
    Rated:String,
    Release:String,
    Runtime:String,
    Genre:String[],
    Writers:String[],
    Actors:String[],
    Plot:String,
    Country:String[],
    Languages:String[],
    Poster:String,
    Ratings:{ source:String; value: String }[];
    imdbRating:Number,
    imdbVotes:Number,
    imdbID:Number

}