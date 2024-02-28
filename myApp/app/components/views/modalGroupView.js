class modalGroupView extends HTMLElement {
    constructor()
    {
        super();
        this.groupList = [];

        this.groupChanges = {};

        this.modalDiv = document.createElement('div');
        this.modalContentDiv = document.createElement('div');
        this.closeSpan = document.createElement('span');

        this.titleH2 = document.createElement('h2');
        
        this.table = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');

        this.theadRow = document.createElement('tr');
        this.nameHeader = document.createElement('th');
        this.actionsHeader = document.createElement('th');

        this.newGroup = document.createElement('div');
        this.newGroupButton = document.createElement('button');
        this.newGroupInput = document.createElement('input');
        this.newGroupSaveButton = document.createElement('button');
    }


    connectedCallback()
    {
        this.render();    
    }

    disconnectedCallback()
    {

    }

    render()
    {   
        this.modalDiv.id = 'modal';
        this.modalDiv.classList.add('modal');

        this.modalContentDiv.classList.add('modal-content');

        this.closeSpan.classList.add('close');
        this.closeSpan.innerHTML = '&times;'; // Carácter X

        this.titleH2.textContent = 'Categorías';

        this.table.id = 'categories-table';

        this.nameHeader.textContent = 'Nombre';
        this.actionsHeader.textContent = 'Acciones';
   
        this.theadRow.appendChild(this.nameHeader);
        this.theadRow.appendChild(this.actionsHeader);
        this.thead.appendChild(this.theadRow);

        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);


        this.newGroupButton.textContent = 'Nueva Categoría';
        this.newGroupButton.id= 'newGroupButton';
        this.newGroupButton.classList.add('ActionButton');
        this.newGroupSaveButton.textContent = 'Guardar';
        this.newGroupSaveButton.id= 'newGroupSaveButton';
        this.newGroupSaveButton.classList.add('NoActionButton');
        this.newGroupInput.classList.add('NoActionButton');
        this.newGroupInput.setAttribute('placeholder', 'Nueva Categoría');
        this.newGroup.appendChild(this.newGroupButton);
        this.newGroup.appendChild(this.newGroupSaveButton);
        this.newGroup.appendChild(this.newGroupInput);


        this.modalContentDiv.appendChild(this.closeSpan);
        this.modalContentDiv.appendChild(this.titleH2);
        this.modalContentDiv.appendChild(this.table);
        this.modalContentDiv.appendChild(this.newGroup);

        this.modalDiv.appendChild(this.modalContentDiv);
    

        this.appendChild(this.modalDiv);
    }

    showModal(){
        this.modalDiv.style.display = 'block'; //Remplazar por un evento que lo ponga en el DOM
    }

    showGroups(groups){

        const groupsArray = Array.from(groups);
        // console.log("usuarios: ", typeof groupsArray);

        let i = 0;

        groupsArray.forEach(group => {
            const row = document.createElement('tr');
            row.id = i;
            i++;
    
            const nameCell = document.createElement('td');
            nameCell.textContent = group.name;
            row.appendChild(nameCell);

            const accionCell = document.createElement('td');

            const saveButton = document.createElement('img');
            saveButton.src = './app/src/diskette.png';
            saveButton.alt = 'Guardar';
            saveButton.className = 'saveGroupButton';
            const editButton = document.createElement('img');
            editButton.src = './app/src/edit.png'; 
            editButton.alt = 'Editar';
            editButton.className = 'editGroupButton';
            const deleteButton = document.createElement('img');
            deleteButton.src = './app/src/delete.png'; 
            deleteButton.alt = 'Eliminar';
            deleteButton.className = 'deleteGroupButton';

            accionCell.appendChild(saveButton);
            accionCell.appendChild(editButton);
            accionCell.appendChild(deleteButton);
            row.appendChild(accionCell);
            
            this.tbody.appendChild(row);
        });        
    }

    closeModal(){
        this.modalDiv.style.display = 'none'; //Remplazar por un evento que lo ponga en el DOM
    }

    editGroup(target){
        const row = target.closest('tr');
        const cells = row.querySelectorAll('td');
        this.groupChanges[row.id] = {actualName : cells[0].textContent,};
        // this.groupChanges[row.id].actualName = cells[0].textContent;
    
        cells[0].contentEditable = true;
        cells[0].classList.add('editable');      
    }

    saveGroupChanges(target){
        const row = target.closest('tr');
        const cells = row.querySelectorAll('td');
        // this.groupChanges[row.id] = {newName : cells[0].textContent,};
        this.groupChanges[row.id].newName = cells[0].textContent;
    
        cells[0].contentEditable = false;
        cells[0].classList.remove('editable'); 

        return this.groupChanges[row.id];
    }

    deleteGroup(target){
        const row = target.closest('tr');
        const cells = row.querySelectorAll('td');

        return cells[0].textContent;
    }

    newCategory(){
        this.newGroupButton.classList.remove('ActionButton');
        this.newGroupButton.classList.add('NoActionButton');
        this.newGroupSaveButton.classList.remove('NoActionButton');
        this.newGroupSaveButton.classList.add('ActionButton');
        this.newGroupInput.classList.remove('NoActionButton');
        this.newGroupInput.classList.add('ActionButton');
        this.newGroupInput.classList.add('editable');
    }

    saveNewCategory(){
        this.newGroupButton.classList.remove('NoActionButton');
        this.newGroupButton.classList.add('ActionButton');
        this.newGroupSaveButton.classList.remove('ActionButton');
        this.newGroupSaveButton.classList.add('NoActionButton');
        this.newGroupInput.classList.remove('editable');
        this.newGroupInput.classList.remove('ActionButton');
        this.newGroupInput.classList.add('NoActionButton');
        return this.newGroupInput.value;
    }

}

customElements.define('x-modalgroup-view',  modalGroupView );

export  {modalGroupView}