document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('scribble');
    const pathLength = path.getTotalLength();
    const videoWrapper = document.getElementById('video-wrapper');
    const backgroundVideo = document.getElementById('background-video');

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Do not hide the path initially
    // path.classList.add('hidden');

    // Add touch event listener
    videoWrapper.addEventListener('touchstart', () => {
        backgroundVideo.src += "&autoplay=1&mute=1";
    });

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
