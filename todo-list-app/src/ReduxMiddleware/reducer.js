
const initialState = {
    loading: false,
    error: "",
    data: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state, loading: true
            }
        case "GET_DATA_WITH_SUCCESS":
            return { ...state, loading: false, data: action.payload }
        case "GET_DATA_WITH_FAILURE":
            return { ...state, loading: false, error: action.payload }
        default:
            return {state};
    }


}

export default reducer;