class App extends Domer {

    addForm = new AddForm()

    render(html) {
        return html`
            <div>
                ${this.addForm}
            </div>
        `
    }

}
new App();