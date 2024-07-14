document.getElementById('myForm').addEventListener('submit', function(event) {
    console.log("hi")
    const namePattern = /^[a-zA-Z\s'-]{1,50}$/;
    const phonePattern = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const agePattern = /^(1[0-1][0-9]|120|[1-9][0-9]?)$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (!namePattern.test(name)) {
        alert('Invalid name');
        event.preventDefault();
    }

    if (!phonePattern.test(phone)) {
        alert('Invalid phone number');
        event.preventDefault();
    }

    if (!passwordPattern.test(password)) {
        alert('Invalid password');
        event.preventDefault();
    }

    if (password !== repassword) {
        alert('Passwords do not match');
        event.preventDefault();
    }

    if (!agePattern.test(age)) {
        alert('Invalid age');
        event.preventDefault();
    }

    if (!emailPattern.test(email)) {
        alert('Invalid email');
        event.preventDefault();
    }
});