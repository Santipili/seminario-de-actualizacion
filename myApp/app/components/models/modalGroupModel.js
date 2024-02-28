class modalGroupModel 
{
    constructor(viewReference)
    {
        this.view = viewReference;
    }

    async getGroupsList(){
        let data ={

        };
       
        try {      
            let requestMetadata = {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json', 
                //     'user-id': '1'
                // },
                body:JSON.stringify(data),
              };
              
            let result = await fetch ("http://localhost:3000/group/getList", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            // console.log(jsonResult);
            return jsonResult;
                 
        } catch (error) {
            console.log(error);         
            alert(error);
        }

    }

    async saveGroupChanges(group){
        let data = {
            groupToUpdate: group.actualName, 
            newName: group.newName
        }
        try {      
            let requestMetadata = {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json', 
                //     'user-id': '18324405-0624-4520-99c4-968adb141d6b'
                // },
                body:JSON.stringify(data),
              };
            let result = await fetch ("http://localhost:3000/group/edit", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }

    }

    async deleteGroup(group){
        let data = {
            groupName : group
        }
        try {      
            let requestMetadata = {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json', 
                //     'user-id': '18324405-0624-4520-99c4-968adb141d6b'
                // },
                body:JSON.stringify(data),
              };
            let result = await fetch ("http://localhost:3000/group/delete", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }

    async saveNewGroup(groupName){
        let data = {
            newGroup:groupName,
         }
        try {      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify(data),
              };

            let result = await fetch ("http://localhost:3000/group/add", requestMetadata); 
            // console.log(result)
            // alert(result)   
            let jsonResult = await result.json();
            // console.log("RESULTADO: "+jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }
    
}

export {modalGroupModel};