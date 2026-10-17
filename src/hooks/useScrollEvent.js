import { useEffect } from "react";

export function useScrollEvent(onScroll) {
    useEffect(() => {
        window.addEventListener(`scroll`, onScroll, { passive: true });
        return () => {
            window.removeEventListener(`scroll`, onScroll);
        };
    }, [onScroll]);
}
