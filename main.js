// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been submitted.');
    this.reset();
});
