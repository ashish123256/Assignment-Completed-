import * as actionTypes from "../action/type";

export const tabsReducers = (state = actionTypes.ALL_TODOS, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_TABS:
            return action.selected

        default:
            return state;
    }
}