document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('scribble');
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

     // Hide the path initially
     path.classList.add('hidden');

    document.addEventListener('scroll', () => {
        // Reveal the path on the first scroll event
        if (path.classList.contains('hidden')) {
            path.classList.remove('hidden');
        }

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollTop / docHeight;

        path.style.strokeDashoffset = pathLength * (1 - scrollPercentage);
    });
});
