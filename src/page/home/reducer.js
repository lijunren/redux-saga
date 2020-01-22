import {ADD, REDUCE} from "./actontype"

const actionNum = (state = 0, action) => {
    if (action.type === ADD) {
        return state+=1;
    } else if (action.type === REDUCE) {
        if (state <= 0) {
            return state = 0;
        }
        return state-=1;
    } else {
        return state;
    }
}

export default actionNum
