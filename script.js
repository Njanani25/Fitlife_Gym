document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration successful!');
});

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.gear-item, .offer, .supplement').forEach(item => {
    item.addEventListener('click', function() {
        modalBody.innerHTML = this.dataset.details;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
