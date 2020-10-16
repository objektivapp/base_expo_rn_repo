


export default function (state = { count: 0 }, action) {
    switch (action.type) {
        case 'COUNT':
            return { ...state, count: action.data };
        case 'DATA':
            return { ...state, data: action.data };
        default:
            return state;
    }
}