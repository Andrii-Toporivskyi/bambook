import React from 'react';

function getLocalStorage(path){
    let config = null;
    try {
        const configStr = localStorage.getItem(path);
        configStr && (config = JSON.parse(configStr));
    } catch (e) {
        console.warn(`getLocalStorage: Error when reading config from localStorage: ${e.toString()}`);
        config = null;
    }
    return config;
}

function setLocalStorage(path, config){
    localStorage.setItem(path, JSON.stringify(config));
}


export default function useLocalStorageState(path, stateName, defaultValue){
    const [state, setState] = React.useState(defaultValue);

    React.useEffect(() => {
        const options = getLocalStorage(path);
        if (options && options[stateName] !== undefined){
            setState(options[stateName]);
        }
    }, [path, stateName])

    const setStateProxy = React.useCallback(val => {
        setState(val);
        let options = getLocalStorage(path);
        if (!(options && typeof options === 'object')){
            options = {};
        }
        options = {...options, [stateName]: val};
        setLocalStorage(path, options);
    }, [path, stateName])

    return [state, setStateProxy];
}