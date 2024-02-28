class modalGroupController 
{
    constructor(viewReference, modelReference)
    {
        this.view = viewReference;
        this.model = modelReference;
        this.Innit();
    }

    enable()
    {
        
        window.addEventListener('editGroups-event', () => { this.showModal();});

        this.view.addEventListener('click', (event) => {
            const target = event.target.className;

            switch(target)
            {
                case "close":
                    this.onCloseButtonClick();
                    break;
                
                case "modal":
                    this.onModalClick();
                    break;
                
                case "deleteGroupButton":
                    this.onDeleteGroupButtonClick(event.target);
                    break;
                
                case "saveGroupButton":
                    this.onSaveGroupButtonClick(event.target);
                    break;
                
                case "editGroupButton":
                    this.onEditGroupButtonClick(event.target);
            }            

        })

        this.view.addEventListener('click', (event) => {
            const target = event.target.id;

            switch(target)
            {
                case "newGroupButton":
                    this.onNewGroupButtonClick();
                    break;
                
                case "newGroupSaveButton":
                    this.onNewGroupSaveButtonClick();
                    
            }            

        })


    }

    disable()
    {

    }
    async Innit(){
        await this.getGroupsList();
        this.completeTable();
    }

    showModal(){
        this.view.showModal();
    }
    
    completeTable(){
        this.view.showGroups(this.view.groupList);
    }

    async getGroupsList(){
        const groups = await this.model.getGroupsList();
        this.view.groupList = groups;
    }


    onCloseButtonClick(){
        this.view.closeModal();
        //this.model.closeModal(); esto deberia enviar un evento para cerrar el modal y sacarlodel DOM
    }

    onModalClick(){
        this.view.closeModal();
        //this.model.closeModal(); esto deberia enviar un evento para cerrar el modal y sacarlodel DOM        
    }

    async onDeleteGroupButtonClick(target){
        const confirmation = confirm("Are you sure you want to delete category?");

        if(confirmation){
            const group = this.view.deleteGroup(target);
            await this.model.deleteGroup(group);
        }
    }

    async onSaveGroupButtonClick(target){
        const group = this.view.saveGroupChanges(target);
        await this.model.saveGroupChanges(group);
        this.getGroupsList();
    }

    onEditGroupButtonClick(target){
        this.view.editGroup(target);
    }

    onNewGroupButtonClick(){
        this.view.newCategory();
    }

    async onNewGroupSaveButtonClick(){
        const groupName = this.view.saveNewCategory();
        await this.model.saveNewGroup(groupName);
    }

}

export {modalGroupController};