const form  = document.getElementById('cf-button');

form.addEventListener('submit', () => {
    // handle the form data
    let name = form['Name']
    let email = form['Email']
    let message = form['Message']

    console.log([name, email, message])
});