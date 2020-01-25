import { 
    ADD_LOG, 
    GET_LOGS, 
    LOGS_ERROR, 
    DELETE_LOG,
    UPDATE_LOG, 
    SET_CURRENT, 
    SET_LOADING, 
    CLEAR_CURRENT, 
} from './log.types';


// Get logs
export const getLogs = () => async dispatch => {

    try {

        // Set lpoading to true
        setLoading();
    
        const res = await fetch('/logs');
        const data = await res.json();
    
        dispatch({
            type: GET_LOGS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }


}; //


// Add new log
export const addLog = log => async dispatch => {

    try {

        // Set lpoading to true
        setLoading();
    
        const res = await fetch('/logs', {
            method: 'POST', 
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
    
        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }


}; //

// Delete log
export const updateLog = log => async dispatch => {

    try {

        // Set lpoading to true
        setLoading();
    
       const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
    
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }


}; //

// Delete log
export const deleteLog = id => async dispatch => {

    try {

        // Set lpoading to true
        setLoading();
    
        await fetch(`/logs/${id}`, {
            method: 'DELETE' 
        });
    
        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }


}; //

// Set current log
export const setCurrent = log => {

    return {  
        type: SET_CURRENT,
        payload: log,
    };

}; //

// Clear current log
export const clearCurrent = () => {

    return {  
        type: CLEAR_CURRENT
    };

}; //

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}; // 