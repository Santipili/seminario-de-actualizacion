class loader extends HTMLElement {
    constructor()
    {
        super();

        this.loaderImg = document.createElement('div');   
        this.loaderImg.classList.add('spinner');     

    }


    connectedCallback()
    {
        this.render();     

    }

    disconnectedCallback()
    {
        this.removeChild(this.loaderImg);
    }

    render()
    {
        this.appendChild(this.loaderImg);         

        let style = document.createElement('style');
        style.innerText = `.spinner {
            margin: 10% auto;            
            width: 56px;
            height: 56px;
            display: grid;
            border: 4px solid #0000;
            border-radius: 50%;
            border-right-color: rgba(167, 139, 250, 1);
            animation: spinner-a4dj62 1s infinite linear;
           }
           
           .spinner::before,
           .spinner::after {
            content: "";
            grid-area: 1/1;
            margin: 2px;
            border: inherit;
            border-radius: 50%;
            animation: spinner-a4dj62 2s infinite;
           }
           
           .spinner::after {
            margin: 8px;
            animation-duration: 3s;
           }
           
           @keyframes spinner-a4dj62 {
            100% {
             transform: rotate(1turn);
            }
           }`;
        this.appendChild(style);

    }

}

customElements.define('x-loader',  loader );

export  {loader}