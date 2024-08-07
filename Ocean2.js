document.getElementById('dob').addEventListener('change', function() {
    const dob = new Date(this.value);
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);

    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    document.getElementById('age').value = age;
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});
