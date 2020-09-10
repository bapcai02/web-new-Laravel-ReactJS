import * as Types from '../constand/ActionType';


const initialState = {
    list_category : [],
    hastag : [],
};

const categoryReducer = (state=initialState,action) => {
    switch (action.type) {
        case Types.SELECT_CATEGORY:{
            return {...state,list_category:[...action.category]};       
        }
        case Types.HASTAG_CATEGORY:{
            return {...state,hastag:[...action.category]};       
        }
        default:
            return {...state};
    }
}

export default categoryReducer;