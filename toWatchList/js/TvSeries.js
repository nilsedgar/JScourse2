class TvSeries extends Entertainment{

    numberOfEpisodes = '';

    constructor(numberOfEpisodes, title, genre){
        super(title, genre);
        this.numberOfEpisodes = numberOfEpisodes;
    }

}