import APICategory from '../../API/APICategory';
import * as Types from '../constand/ActionType';

export const GetApiCategory = () => {
    return (dispatch) => {
        return  APICategory.getAllCategory().then(res=>{
            dispatch(SelectCategory(res))
        })     
    }
}

export const GetApiHastag= () => {
    return (dispatch) => {
        return  APICategory.getAllHastag().then(res=>{
            dispatch(SelectHastag(res))
        })     
    }
}
export const SelectHastag= (category)=>{
    return {
        type:Types.HASTAG_CATEGORY,
        category,
    }
}

export const AddCategory = (category)=>{
    return {
        type:Types.ADD_CATEGORY,
         category,
    }
}

export const SelectCategory = (category)=>{
    return {
        type:Types.SELECT_CATEGORY,
        category,
    }
}

export const DeleteCategory = (category)=>{
    return {
        type:Types.DELETE_CATEGORY,
         category,
    }
}