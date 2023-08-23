class view extends HTMLElement 
{
    constructor()
    {
        super();
        this.buttonUsers = document.createElement('button');
        this.buttonUsers.innerHTML = 'Users';
        this.buttonUsers.id = "GetUsers"

        this.buttonGroups = document.createElement('button');
        this.buttonGroups.innerHTML = "Groups";
        this.buttonGroups.id = "GetGroups";

        this.buttonCreateUser = document.createElement('button');
        this.buttonCreateUser.innerHTML = "Create User";
        this.buttonCreateUser.id = "CreateUser";

        this.buttonCreateGroup = document.createElement('button');
        this.buttonCreateGroup.innerHTML = "Create Group";
        this.buttonCreateGroup.id = "CreateGroup";

        this.buttonDeleteUser = document.createElement('button');
        this.buttonDeleteUser.innerHTML = "Delete User";
        this.buttonDeleteUser.id = "DeleteUser";

        this.buttonDeleteGroup = document.createElement('button');
        this.buttonDeleteGroup.innerHTML = "Delete Group";
        this.buttonDeleteGroup.id = "DeleteGroup";

        this.formUser = document.createElement('form');
        
        this.inputUserName = document.createElement('input');
        this.inputUserPassword = document.createElement('input');

        this.formUser.appendChild(this.inputUserName);
        this.formUser.appendChild(this.inputUserPassword);      



        this.container = document.createElement('div');
        this.container.appendChild(this.buttonUsers);
        this.container.appendChild(this.buttonGroups);
        this.container.appendChild(this.formUser);
        this.container.appendChild(this.buttonCreateUser);



        this.appendChild(this.container);
    }

    getUserData()
    {
        let data = 
        {
            nick: this.inputUserName.value,
            password: this.inputUserPassword.value
        }

        return data;       
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

