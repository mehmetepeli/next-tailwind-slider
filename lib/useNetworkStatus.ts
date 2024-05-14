import { useEffect, useState } from "react";

const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function updateState() {
            setIsOnline(navigator.onLine);
        }

        updateState();

        window.addEventListener('online', updateState);
        window.addEventListener('offline', updateState);
        return () => {
            window.removeEventListener('online', updateState);
            window.removeEventListener('offline', updateState);
        };
    }, []);
    return isOnline;
};

export default useNetworkStatus;