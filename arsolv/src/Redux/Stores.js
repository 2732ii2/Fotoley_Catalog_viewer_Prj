import { createStore } from "redux";
import Reducer_func from "./Reducer";



const Store = createStore(Reducer_func);
export default Store;