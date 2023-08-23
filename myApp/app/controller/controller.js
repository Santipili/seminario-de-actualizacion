class controller
{
  constructor(viewReference, modelReference)
  {
    this.innerView = viewReference;
    this.innerModel = modelReference

    this.innerView.container.addEventListener("click", (event) =>{
      const target = event.target;
  
      if (target.tagName === 'BUTTON') {
        switch (target.id)
        {
          case "GetUsers":
            this.onGetUsersButtonClick();
          break;
          
          case "GetGroups":
            this.onGetGroupsButtonClick();
          break;
  
          case "CreateUser":
            this.onCreateUserButtonClick();
            break;
  
          case "CreateGroup":
            this.onCreateGroupButtonClick();
            break;
  
          case "DeleteUser":
            this.onDeleteUserButtonClick();
            break;
  
          case "DeleteGroup":
            this.onDeleteGroupButtonClick();                    
        }
      }      
    })    
  }
  
  async onGetUsersButtonClick()
  {
    let data = {
        type: "USERS"
    }        
  
    let users = await this.innerModel.read(data);
  
    console.log ("La lista de Usuarios es: ");
    console.log(users);     
  
    return users;      
  }

  async onGetGroupsButtonClick()
  {
    let data = {
        type: "GROUPS"
    }
  
    const groups = await this.innerModel.read(data);
     
    console.log ("La lista de Grupos es: ");
    console.log(groups);
  
    return groups;
  }

  // Modificar como obtener los datos de la vista, para q sea diferente la creacion, el login y la informacion adicional
  async onCreateUserButtonClick()
  {
    let user = this.innerView.getUserData();

    let userData = {
      type: "CreateUser",
      data:{
        nick: user.nick,
        password: user.password
      }
    }        

    let id = await this.innerModel.create(userData);
  
    console.log ("El id de ", user.nick, " es:");
    console.log(id[0].id);     
  
    return id;    
  }

  async onCreateGroupButtonClick()
  {
    let group = this.innerView.getGroupData();

    let groupData = {
      type: "CreateGroup",
      data:{
        name:group.name
      }
    }        

    let id = await this.innerModel.create(groupData);
  
    console.log ("El id de ", group.name, " es:");
    console.log(id[0].id);     
  
    return id;
  }

  // Modificar como obtener los datos de la vista, para q sea diferente la creacion, el login y la informacion adicional
  async onDeleteUserButtonClick()
  {
    let user = this.innerView.getUserData();

    let userData = {
      type: "DelteUser",
      data:{
        nick:user.nick
      }
    }        

    let id = await this.innerModel.delete(userData);
  
    if (id[0].id){
      console.log(user.nick, " Borrado Exitosamente")
    }    
  
    return id;
  }

  async onDeleteGroupButtonClick()
  {
    let group = this.innerView.getGroupData();

    let groupData = {
      type: "DeleteGroup",
      data:{
        name:group.name
      }
    }        

    let id = await this.innerModel.delete(groupData);
  
    if (id[0].id){
      console.log(group.name, " Borrado Exitosamente")
    }     
  
    return id;
  }

  async onUpdateUserButtonClick()
  {

  }    
}

export {controller};