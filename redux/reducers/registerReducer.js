import { 
    ADD_INFORMATION,
    DEL_INFORMATION,
    EDIT_INFORMATION, 
    GET_INFORMATION,
    UPDATE_INFORMATION
} from '../actions/registerAction';

export const initialState = {
    userList : []
};

const registerAction = (state = initialState , action) => {

    switch (action.type) {

        case GET_INFORMATION :
            return {
                exampleInfo : [
                    { firstName : "Eric", lastName : "Thomson", gender : "Male", nationality : "US", phone : "5555" }
                ]
            };

        case ADD_INFORMATION :
            console.log('action-case-reducer: ', action);
            //console.log('localStorage',localStorage)
            //let temp = [];
            return { ...state,
                userList : state.userList.concat(action.payload)
            };
             state.push('userList', action.payload)
                //user : action.payload};
        case DEL_INFORMATION :
            console.log('del_information: ', action);
            return {
                ...state,
                userList : state.userList.filter((info, id) => id !== action.payload )
            };
        
        case EDIT_INFORMATION :
            console.log("EDIT: ", action.payload);
            // return {
            //     ...state,
            //     userList : state.userList.map((info, index) => {
            //         info.id === action.payload ? {...info, userList : action.payload.userList} : info
            //     } )
            // };
            
            return {
                ...state,
                xxxx : state.userList.map(obj => action.payload.data.find(o => o.id === obj.id) || obj),
            }
            // return {
            //     ...state, userList : {...state.userList, ...action.payload}
            // }

        default:
            return {...state};
    }
};

export default registerAction;