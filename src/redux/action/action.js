export const ADD = (item) => {
    return{
        type:"ADD_STATEDATA",
        payload:item
    }
}

export const ADDDISTRICT = (item) => {
    return{
        type:"ADD_DISTRICTDATA",
        payload:item
    }
}

export const DELETE = (id) => {
    return {
        type:"DELETE_DATA",
        payload:id
    }
}
