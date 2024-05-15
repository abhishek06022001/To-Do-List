import { get } from "lodash";

const localStorageKey = "lists"; 
function saveToLocalStorage(lists){
    localStorage.setItem(localStorageKey,JSON.stringify(lists));
    // store as object as string 
}
function getFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    return data ;// return object which contains object 
}
export {saveToLocalStorage , getFromLocalStorage};