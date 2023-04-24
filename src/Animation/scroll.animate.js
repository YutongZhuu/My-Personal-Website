// export const scroll = (targetValue, duration) => {
//     const startValue = parseInt(window.scrollY);
//     const distance = targetValue+10 - startValue;
//     const startTime = performance.now();
//     function animationStep() {
//         const elapsed = performance.now() - startTime;
//         const progress = Math.min(elapsed / duration, 1);
//         const currentValue = startValue + distance * progress;
//         window.scrollTo(0, currentValue);
//         if (progress < 1) {
//             requestAnimationFrame(animationStep);
//         }else{
//             console.log('stop')
//         }   
//      }

//     requestAnimationFrame(animationStep);
// }


let requestId;

function animation(target) {
  const currentValue = parseInt(window.scrollY);
  let step = (target - currentValue) / 20;
  if (step < 0 && step > -1) {
    step = -1;
  } else if (step < 1 && step > 0) {
    step = 1;
  }
  window.scrollBy(0, step);
  if (Math.abs(target - currentValue)!==0) {
    requestId= requestAnimationFrame(() => animation(target));
  }else{
    // return false;
  }
}
export const scroll = (target) => {
  cancelAnimationFrame(requestId);
  animation(target);
};
