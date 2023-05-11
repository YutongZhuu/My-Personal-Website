
import { useState } from "react";
export const useScroll = () => {
    const [requestId, setRequestId] = useState(null);

    function animation(target) {
        const currentValue = parseInt(window.scrollY);
        let step = (target - currentValue) / 20;
        if (step < 0 && step > -1) {
            step = -1;
        } else if (step < 1 && step > 0) {
            step = 1;
        }
        window.scrollBy(0, step);
        if (Math.abs(target - currentValue) !== 0) {
            setRequestId(requestAnimationFrame(() => animation(target)));
        }
    }

    const cancel = () => {
        if (!requestId) return
        cancelAnimationFrame(requestId);
    }

    const scroll = (target) => {
        cancelAnimationFrame(requestId);
        animation(target);
    };

    return [cancel, scroll];
}

