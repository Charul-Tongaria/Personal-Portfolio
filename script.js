function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// contact.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Use EmailJS or any other email service to send the form data
    emailjs.send('service_ay9dzvy', '__ejs-test-mail-service__', {
        name: name,
        contact: contact,
        email: email,
        message: message,
    }).then(function(response) {
        alert('Your message has been sent successfully!');
    }, function(error) {
        alert('There was an error sending your message. Please try again later.');
    });
});
