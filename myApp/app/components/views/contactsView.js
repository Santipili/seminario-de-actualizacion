class contactsView extends HTMLElement
{
    constructor()
    {
        super();
        // this.userData = {};

        this.contactsContainer = document.createElement('div');
        this.contactsTitle = document.createElement('h2');

        this.contactsSection = document.createElement('section');
        this.search = document.createElement('input');
        this.table = document.createElement('table');
        this.tableHead = document.createElement('thead');
        this.tableBody = document.createElement('tbody');

        this.titlesTable = document.createElement('tr');
        this.titleName = document.createElement('th');
        this.titleSurname = document.createElement('th');
        this.titleNID = document.createElement('th');
        this.titleEmail = document.createElement('th');
        this.titlePhone = document.createElement('th');
        this.titleCategory = document.createElement('th');
        this.titleAccion = document.createElement('th');

        this.newContact = document.createElement('button');
        this.editCategories = document.createElement('button');
    }

    connectedCallback()
    {
        this.render();
    }

    disconectedCallback()
    {

    }

    render()
    {
        this.setAttributes();
        
        this.titlesTable.appendChild(this.titleName);
        this.titlesTable.appendChild(this.titleSurname);
        this.titlesTable.appendChild(this.titleNID);
        this.titlesTable.appendChild(this.titleEmail);
        this.titlesTable.appendChild(this.titlePhone);
        this.titlesTable.appendChild(this.titleCategory);
        this.titlesTable.appendChild(this.titleAccion);
        this.tableHead.appendChild(this.titlesTable);
        this.table.appendChild(this.tableHead);
        this.table.appendChild(this.tableBody);
        
        this.contactsSection.appendChild(this.search);
        this.contactsSection.appendChild(this.table);
        this.contactsSection.appendChild(this.newContact);
        this.contactsSection.appendChild(this.editCategories);

        this.contactsContainer.appendChild(this.contactsTitle);
        this.contactsContainer.appendChild(this.contactsSection);
        this.appendChild(this.contactsContainer);
    }
    
    setAttributes(){
        this.contactsTitle.textContent = 'Lista de Contactos';

        this.search.setAttribute('type', 'text'); // Establecemos el tipo de input
        this.search.setAttribute('placeholder', 'Buscar...');
    
        this.titleName.textContent = 'Nombre'; //hacer pruebas de css sino, utilizar innerText
        this.titleSurname.textContent = 'Apellido'; 
        this.titleNID.textContent = 'DNI';
        this.titleEmail.textContent = 'Email';
        this.titlePhone.textContent = 'Phone';
        this.titleCategory.textContent = 'Categoría';
        this.titleAccion.textContent = '';

        this.newContact.textContent = '+ Nuevo Contacto';
        this.editCategories.textContent = 'Editar Categorías';
        this.newContact.className = 'buttonContacts';
        this.editCategories.className = 'buttonContacts';
        this.newContact.id = 'newContact';
        this.editCategories.id = 'editCategories';

        this.classList.add('contactsView');
    }

    tableView(users){
        const usersArray = Array.from(users);
        console.log("usuarios: ", typeof usersArray);

        usersArray.forEach(user => {
            const row = document.createElement('tr');
    
            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            row.appendChild(nameCell);
    
            const surnameCell = document.createElement('td');
            surnameCell.textContent = user.surname;
            row.appendChild(surnameCell);
    
            const nidCell = document.createElement('td');
            nidCell.textContent = user.NID;
            row.appendChild(nidCell);
    
            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const phoneCell = document.createElement('td');
            phoneCell.textContent = user.phone;
            row.appendChild(phoneCell);
    
            const groupCell = document.createElement('td');
            groupCell.textContent = user.group_name;
            row.appendChild(groupCell);

            const accionCell = document.createElement('td');
            const saveButton = document.createElement('img');
            saveButton.src = './app/src/diskette.png';
            saveButton.alt = 'Guardar';
            saveButton.className = 'saveButton';
            const editButton = document.createElement('img');
            editButton.src = './app/src/edit.png'; 
            editButton.alt = 'Editar';
            editButton.className = 'editButton';
            const deleteButton = document.createElement('img');
            deleteButton.src = './app/src/delete.png'; 
            deleteButton.alt = 'Eliminar';
            deleteButton.className = 'deleteButton';
            accionCell.appendChild(saveButton);
            accionCell.appendChild(editButton);
            accionCell.appendChild(deleteButton);
            row.appendChild(accionCell);
            
            row.id = user.id;
            this.tableBody.appendChild(row);
        });
    }

    getUserData(target){
        
        const row = target.closest('tr');
        const cells = row.querySelectorAll('td');

        const userData = {
            id: row.id,
            name: cells[0].textContent,
            surname: cells[1].textContent,
            nid: cells[2].textContent,
            email: cells[3].textContent,
            phone:cells[4].textContent
        }
        
        cells.forEach(cell => {
            cell.contentEditable = false;
            cell.classList.remove('editable');
        });
    
        return userData;
    }

    getUserID(target){
        const row = target.closest('tr');
        const id = row.id;

        return id;
    }


}

customElements.define('x-contacts-view', contactsView);
  
export { contactsView}