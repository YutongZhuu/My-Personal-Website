export const fadeIn=(element, property, targetValue, duration)=> {
    const startValue = parseInt(window.getComputedStyle(element)[property]);
    const distance = targetValue - startValue;
    const startTime = performance.now();

    function animationStep() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = startValue + distance * progress;
        const currentOpacity=1*progress;
        element.style[property] = `${currentValue}px`;
        element.style['opacity']=currentOpacity;
        if (progress < 1) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}