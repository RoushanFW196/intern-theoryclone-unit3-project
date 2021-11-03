function validation(x){
    let form = document.querySelector('.form')
    form.addEventListener('submit', (event) => {
  
    event.preventDefault();

    let Eemail = document.getElementById('email').value;
        let Epassword = document.getElementById('password').value;

        let local = JSON.parse(localStorage.getItem(x))
        local.forEach(({ email, password }) => {
            if (email == Eemail && password == Epassword) {
                alert('login successfully')
            }

        })
});
}

export default validation