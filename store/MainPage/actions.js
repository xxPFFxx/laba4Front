
export const INVALID_DATA_ACTION="INVALID_DATA_ACTION";


export const InvalidDataActionCreator = (reason) => ({
    type: INVALID_DATA_ACTION,
    payload: {
        reason
    }

});



