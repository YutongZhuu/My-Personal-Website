export const scroll = (targetValue, duration) => {
    const startValue = parseInt(window.scrollY);
    const distance = targetValue+10 - startValue;
    const startTime = performance.now();
    function animationStep() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = startValue + distance * progress;
        window.scrollTo(0, currentValue);
        if (progress < 1) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}