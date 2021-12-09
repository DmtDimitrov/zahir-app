import { useEffect, useState } from "react";

export const useFetch = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let isMounted = true;

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                    setError(null);
                }
            })
            .catch(error = {
                if(isMounted) {
                    setError(error);
                    setData(null);
                }
            })
            .finally(() => (isMounted = false));

        return () => (isMounted = false);
    }, [url, options]);

    return [loading, error, data];
};