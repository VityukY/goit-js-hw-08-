const loginFormLink = document.querySelector('.login-form');

loginFormLink.addEventListener("submit", event => {
   event.preventDefault();
   const form = event.target;
   const email = form.elements.email.value.trim();
   const password = form.elements.password.value.trim();
   if (!email || !password) {
      alert('All form fields must be filled in')
   }
   const loginData = {
      'email':email,
      'password':password,
   }
   console.log(loginData);
   loginFormLink.reset()

})