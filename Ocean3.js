document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});
