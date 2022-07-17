import { combineReducers } from "redux";
import { ourTeamReducer } from "./OurTeam.reducers";

export const rootReducer = combineReducers({
    ourTeam: ourTeamReducer
})