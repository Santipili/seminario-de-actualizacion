class homeView extends HTMLElement
{
    constructor()
    {
        super();

        this.homeContainer = document.createElement('div');

        this.homeTitle = document.createElement('h2');


    }

    connectedCallback()
    {
        this.render();

    }

    disconectedCallback()
    {

    }

    render()
    {
        const nombre = localStorage.getItem('nickname');
        this.homeTitle.innerText = "Hola " + nombre;


        this.homeContainer.appendChild(this.homeTitle);
        this.appendChild(this.homeContainer);

        let style = document.createElement('style');
        style.innerText = `
          
        `;
        this.appendChild(style);
    }



}

customElements.define('x-home-view', homeView);
  
export { homeView}