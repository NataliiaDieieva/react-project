const SUFFIX = {
    START: 'START',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};

/**
 * create object with types
 */
export function createType ( type ) {
    let action = {};
    for ( let name in SUFFIX ) {
        action[name] = `${type}_${SUFFIX[name]}`;
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
