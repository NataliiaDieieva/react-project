const SUFFIX = {
    START: 'START',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};

export function createType ( type ) {
    let action = {};
    for ( let name of Object.keys(SUFFIX) ) {
        action[name] = `${type}.${name}`;
    }
    return action;
}

export const AUTH = {
    CLEAR: 'CLEAR',
    PRELOADER: 'PRELOADER',
    LOGIN: createType('LOGIN'),
    UPDATE_SESSION: 'UPDATE_SESSION',
    //complex
    MAKE_LOGIN: 'MAKE_LOGIN'
};
