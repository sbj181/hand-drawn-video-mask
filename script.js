document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('scribble');
    const pathLength = path.getTotalLength();
    const videoWrapper = document.getElementById('video-wrapper');
    const backgroundVideo = document.getElementById('background-video');

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Hide the path initially
    path.classList.add('hidden');

    // Add touch event listener
    videoWrapper.addEventListener('touchstart', () => {
        backgroundVideo.src += "&autoplay=1&mute=1";
    });

    window.addEventListener('scroll', () => {
        // Reveal the path on the first scroll event
        if (path.classList.contains('hidden')) {
            path.classList.remove('hidden');
        }

        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var draw = pathLength * scrollpercent;

        // Reverse the drawing (when scrolling upwards)
        path.style.strokeDashoffset = pathLength - draw;
    });
});
