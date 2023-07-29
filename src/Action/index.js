export const settablenumber = (value) => async dispatch => {
    dispatch({
        type:"SETTABLENUMBER",
        payload : value
    })
}

export const resettabelnumber = () => async dispatch =>{
    dispatch({
        type : "RESETTABLENUMBER"
    })
}

export const setfilter = (value) => async dispatch =>{
    dispatch({
        type : "SETFILTER",
        payload : value
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type : "RESETFILTER"
    })
}

export const addorder = (id,name,prize,table_number,url) => async dispatch =>{
    dispatch({
        type : "ADDORDER",
        payload : {
            id:id,
            name : name,
            prize:prize,
            table_number : table_number,
            url:url
        }
    })
}