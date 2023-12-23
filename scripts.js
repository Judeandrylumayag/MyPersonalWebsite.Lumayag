document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); 
      validateForm();
    });
  
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
     
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
  
     
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });
  