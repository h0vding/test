document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        const imageUrl = button.getAttribute('data-image');
        document.getElementById('display-image').src = imageUrl;
    });
});
