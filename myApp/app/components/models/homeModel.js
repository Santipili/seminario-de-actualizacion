class homeModel
{
    constructor(viewReference)
    {
        this.innerView = viewReference;
    }

    register()
    {
        console.log('Register');
        //------------ Controlar si tiene la clase ya puesta para no repetir acciones ----------------
        this.innerView.homeContainer.classList.remove('start');
        this.innerView.homeContainer.classList.add('active');
        window.dispatchEvent(new CustomEvent('register-button-event'));

    }

    signIn()
    {
        console.log('Sign In');
        //------------ Controlar si tiene la clase ya puesta para no repetir acciones ----------------
        this.innerView.homeContainer.classList.remove('start');
        this.innerView.homeContainer.classList.add('active');
        window.dispatchEvent(new CustomEvent('signin-button-event'));
    }

};

export {homeModel};