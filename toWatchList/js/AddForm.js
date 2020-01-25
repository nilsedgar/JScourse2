class AddForm extends Domer {
    title = ''
    genre = ''
    numberOfEpisodes = ''
    runTime = ''


    entertainment = [];

    constructor() {
        super();
    }

    saveMovie() {
        this.entertainment.push(new Movie(this.runTime, this.title, this.genre));
    }

    saveTvSeries() {
        this.entertainment.push(new TvSeries(this.numberOfEpisodes, this.title, this.genre));
    }

    removeObject(e){
        this.entertainment.splice(0)
    }

    createListObject(){
        //return html `<li click="removeObject">${this.entertainment[0]}</li><br></br>`
    }


    render(html) {
        return html`
       <div> 
            <section>
            <input placeholder="Title" bind="title" type="text" id="title"><br>
            <select bind="genre">
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="scifi">Science Fiction</option>
            </select>
            <br>
            <input placeholder="Runtime" bind="runTime" type="text" id="runTime">
            <br>
            <input placeholder="Number of Episodes" bind="numberOfEpisodes" type="text" id="numberOfEpisodes">
            <br>
            <button click="saveMovie" type="button">Save Movie</button><br>
            <button click="saveTvSeries" type="button">Save Tv-Series</button><br>
            </section>
            <section>

            
            <ul id="list">
                    ${this.createListObject()}
                    <li click="removeObject">${this.entertainment[0]}</li><br>
                    <li click="removeObject">${this.entertainment[1]}</li><br>
                    <li click="removeObject">${this.entertainment[2]}</li><br>
                    <li click="removeObject">${this.entertainment[3]}</li><br>
                    <li click="removeObject">${this.entertainment[4]}</li><br>
                </ul>
            </section>    
        </div>
    `
    }
}