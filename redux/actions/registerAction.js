
export const GET_INFORMATION = "GET_INFORMATION";
export const ADD_INFORMATION = "ADD_INFORMATION";
export const DEL_INFORMATION = "DEL_INFORMATION";
export const EDIT_INFORMATION = "EDIT_INFORMATION";
export const UPDATE_INFORMATION = "UPDATE_INFORMATION";

//Action Creator

export const getInfo = () => {
    return {
        type : GET_INFORMATION
    }
}

export const addInfo = (data) => {
    //console.log('Action-addInfo: ',data) // check log action
    return {
        type: ADD_INFORMATION,
        payload : data
    }
};

export const delInfo = (id) => {

    return {
        type : DEL_INFORMATION,
        payload : id
    }
};

export const editInfo = (data) => {
    return {
        type : EDIT_INFORMATION,
        payload : {
            data
        }
    }
};

export const updateInfo = (data) => {
    return {
        type : UPDATE_INFORMATION,
        payload : data,
    }
}
