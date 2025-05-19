// Handle dynamic section switching
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Allow normal behavior for external links
        if (this.dataset.ignore === "true") return;

        e.preventDefault();
        const targetId = this.getAttribute('data-section');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const target = document.getElementById(targetId);
        if (target) {
            target.classList.add('active');
        }
    });
});
