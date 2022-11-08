function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "contact.nicolasbaudoing",
        Password : "password",
        To : 'contact.nicolasbaudoing@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
