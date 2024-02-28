class contactsController
{
    constructor(viewReference, modelReference)
    {
        this.innerView = viewReference;
        this.innerModel = modelReference;

    }

    enable()
    {
        this.completeTable();

        this.innerView.addEventListener('click', (event) => {
            const target = event.target.id;
            switch(target)
            {
                case "newContact":
                    this.onNewContactButtonClick();
                    break;
                case "editCategories":
                    this.onEditCategoriesButtonClick();
                    break;
            }            
        })

        this.innerView.addEventListener('click', (event) => {
            const target = event.target.className;
            switch(target)
            {
                case "editButton":
                    this.onEditUsersButtonClick(event.target);
                    break;
                case "deleteButton":
                    this.onDeleteUsersButtonClick(event.target);
                    break;
                case "saveButton":
                    this.onSaveUsersButtonClick(event.target);
                    break;
            }
        })
    }



    onNewContactButtonClick()
    {
        //this.innerModel.register();
    }

    onEditCategoriesButtonClick()
    {
        window.dispatchEvent(new CustomEvent('editGroups-event'));
    }

    onEditUsersButtonClick(target){
 
        const row = target.closest('tr');
    
        const cells = row.querySelectorAll('td');
    
        for (let i = 0; i < 5; i++) {
            cells[i].contentEditable = true;
            cells[i].classList.add('editable');
        }

    }
    onSaveUsersButtonClick(target){
        // const row = target.closest('tr');

        const user = this.innerView.getUserData(target);

        this.innerModel.saveUser(user);

        
    }

    onDeleteUsersButtonClick(target){

        const confirmation = confirm("Are you sure you want to delete this user?");

        if(confirmation){
            const userID = this.innerView.getUserID(target);

            this.innerModel.deleteUser(userID);
        }
        
    }


    async completeTable()
    {
        let users = await this.innerModel.getUsersList();

        this.innerView.tableView(users);
    }
}

export {contactsController};