export class Movies{
    Search : Array<MovieList>;
    
    
} 

interface MovieList{
    Title: String,
    Year: Number,
    imdbID: String,
    Type: String,
    Poster: String

}