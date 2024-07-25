document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('scribble');
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    document.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollTop / docHeight;

        path.style.strokeDashoffset = pathLength * (1 - scrollPercentage);
    });
});
