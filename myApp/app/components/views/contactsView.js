class contactsView extends HTMLElement
{
    constructor()
    {
        super();

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
        this.titleCategory = document.createElement('th');
        this.titleAccion = document.createElement('th');

        this.newContact = document.createElement('button');
        this.editCategories = document.createElement('button');

        // <tr> 
        //     <td> Juan Carlos </td>
        //     <td> Esquivel </td>
        // </tr>
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
        this.titleCategory.textContent = 'Categoría';
        this.titleAccion.textContent = '....';

        this.newContact.textContent = '+ Nuevo Contacto';
        this.editCategories.textContent = 'Editar Categorías';

        this.classList.add('contactsView');
    }


}

customElements.define('x-contacts-view', contactsView);
  
export { contactsView}