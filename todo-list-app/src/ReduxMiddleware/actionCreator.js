
// ACTION CREATOR
export const FETCH_DATA = () => {
    return {
        type: "FETCH_DATA"
    }
}

// ACTION CREATOR
export const GET_DATA_WITH_SUCCESS = (data) => {
    return {
        type: "GET_DATA_WITH_SUCCESS",
        payload: data
    }
}

// ACTION CREATOR
export const GET_DATA_WITH_FAILURE = (error) => {
    return {
        type: "GET_DATA_WITH_FAILURE",
        payload: error
    }
}

// THUNK ACTION CREATOR
export const fetchData = () => {
    return (dispatch) => {
        dispatch(FETCH_DATA);
        fetch('https://fake-json-api.mock.beeceptor.com/users')
            .then((res) => { return res.json() })
            .then((data) => {
                dispatch(GET_DATA_WITH_SUCCESS(data))
            })
            .catch((error) => {
                dispatch(GET_DATA_WITH_FAILURE(error))
            })
    }
}

