import {createElement} from './createHTMLElement.js';

class BackTest extends HTMLElement {
    constructor() {
        super();
        this.container = document.createElement('div');
        this.appendChild(this.container);
        this.buttonCreateGroup = createElement('button', 'Create Group');
        this.buttonDeleteGroup = createElement('button', 'Delete Group');
        this.buttonListGroup = createElement('button', 'List Group');
        this.buttonEditGroup = createElement('button', 'Edit Group');

        this.buttonDeleteUser = createElement('button', 'Delete User');
        this.buttonEditUser = createElement('button', 'EditUser');
        this.buttonListUsers = createElement('button', 'List Users');

    }
    connectedCallback() {
        this.container.appendChild(this.buttonCreateGroup); 
        this.container.appendChild(this.buttonDeleteGroup); 
        this.container.appendChild(this.buttonListGroup); 
        this.container.appendChild(this.buttonEditGroup); 
        this.container.appendChild(this.buttonDeleteUser); 
        this.container.appendChild(this.buttonEditUser); 
        this.container.appendChild(this.buttonListUsers); 

        this.buttonCreateGroup.addEventListener('click', ()=> {
            this.createGroup();
        })
        this.buttonDeleteGroup.addEventListener('click', ()=> {
            this.deleteGroup();
        })
        this.buttonListGroup.addEventListener('click', ()=> {
            this.listarGroup();
        })
        this.buttonEditGroup.addEventListener('click', ()=> {
            this.editGroup();
        })
        this.buttonDeleteUser.addEventListener('click', ()=> {
            this.deleteUser();
        })
        this.buttonEditUser.addEventListener('click', ()=> {
            this.editUser();
        })
        this.buttonListUsers.addEventListener('click', ()=> {
            this.listarUsers();
        })
    }
    disconnectedCallback() {    

    }

    async createGroup(){
         let data = {
            newGroup:'Clase nueva Test33',
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
            console.log("RESULTADO: "+jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }

    async deleteGroup(){
        let data = {
            groupName : 'Clase nueva Test'
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

    async listarGroup(){
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
            alert(jsonResult.message); 
            console.log(jsonResult);
                 
   
        } catch (error) {
            console.log(error);         
            alert(error);
        }
    }

    async editGroup(){
        let data = {
            groupToUpdate:'Clase nueva Test223', 
            newName:'Nuevo Nombre4'
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

    async deleteUser(){
        let data = {
            userID : 34,
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
            let result = await fetch ("http://localhost:3000/user/delete", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }

    async editUser(){
        let data = {
            idUser : 33,
            name : null, 
            surname: null,
            nid: null,
            email: 'iecmdp@hotmail.com',
            phone: '02235117896',
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
            let result = await fetch ("http://localhost:3000/user/edit", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }

    async listarUsers(){
        let data = {
           
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
            let result = await fetch ("http://localhost:3000/user/getList", requestMetadata);    
            let jsonResult = await result.json();
            alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
    }
}
  
customElements.define("x-back-test", BackTest);
export { BackTest };
  