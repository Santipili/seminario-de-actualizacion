class model 
{
    constructor()
    {

    }

    async create(data)
    {
        try{       
            // la "data" que recibe el metodo debe contener el tipo (type) del metodo que va usar y data necesaria para hacer lo q se necesita   
            // en "create" los type son: CreateUser o CreateGroup  
            // ademas se necesita el nick y password del usuario a crear o el nombre del grupo a crear        
            let DataTransfer ={
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }    
            let response = await fetch('http://localhost:3000/', DataTransfer );    
            
            let responseJSON = await response.json();
            
            return responseJSON;                 
        }
        catch(error){
            console.log(error);
        }
    }

    async read(data)
    {
        try{ 
            // la "data" que recibe el metodo debe contener el tipo (type) del metodo que va usar y data necesaria para hacer lo q se necesita 
            // en "read" los type son: USERS o GROUPS, dependiendo que queramos obtener    
            let DataTransfer ={
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }    
            let response = await fetch('http://localhost:3000/', DataTransfer );    
            let responseJSON = await response.json();

            return responseJSON;                 
        }
        catch(error){
            console.log(error);
        }
    }

    async delete(data)
    {
        try{            
            // la "data" que recibe el metodo debe contener el tipo (type) del metodo que va usar y data necesaria para hacer lo q se necesita  
            // en "delete" los type son: DeleteUser o DeleteGroup
            // ademas se necesita el nick del usuario o el nombre del grupo 
            let DataTransfer ={
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }    
            let response = await fetch('http://localhost:3000/', DataTransfer );    
            let responseJSON = await response.json();

            return responseJSON;                 
        }
        catch(error){
            console.log(error);
        }
    }
}

export {model};