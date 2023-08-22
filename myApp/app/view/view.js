class view extends HTMLElement 
{
    constructor()
    {
        super();
        this.button = document.createElement('button');
        this.button.innerHTML = "boton";


        this.button.addEventListener( 'click' , () => { 
            this.buttonClick(); 
        });



        this.appendChild(this.button);
    }

    async buttonClick() 
    {
        try{
            
            let DataTransfer ={
                method:"POST"
            }    
            let response = await fetch('http://localhost:3000/', DataTransfer );    
            let responseJSON = await response.json();

            console.log(responseJSON);
            return responseJSON;      
            
        }
        catch(error){
            console.log(error);
        }

    }

    connectedCallback()
	{
		// this.controller.enable();
	}

	disconnectedCallback()
	{
		// this.controller.disable();
	}
}

customElements.define('x-view',  view );

export {view};

