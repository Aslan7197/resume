
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // For now, simply show an alert; you can expand this to send data to your backend
    alert('Thank you for your message!');
    // Optionally, you can reset the form:
    this.reset();
  });
  