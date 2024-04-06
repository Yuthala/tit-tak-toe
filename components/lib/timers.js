import {useState, useEffect} from 'react';

export function useNow(interval, enabled) {
    const [now, setNow] = useState();

    useEffect(() => {
        if(!enabled) {
            setNow(undefined);
            return;
        }

        setInterval(() => {
            setNow(Date.now());
        }, interval);

        return () => {
            clearInterval(int);}
    }, [interval, enabled]);
}

export function useInterval(interval, enabled, cb) {
    useEffect(() => {
        if(!enabled) {
            return;
        }

        const int = setInterval(() => {
            cb(Date.now());
        }, interval);

        return () => {
            clearInterval(int);
        };
    //TODO: useCallBack
    }, [interval, enabled]);
}