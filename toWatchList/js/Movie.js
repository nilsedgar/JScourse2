class Movie extends Entertainment{

    runTime = '';

    constructor(runTime, title, genre){
        super(title, genre);
        this.runTime = runTime;
    }

}