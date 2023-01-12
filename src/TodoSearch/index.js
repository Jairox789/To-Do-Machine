import React from "react";
import { TodoContext } from "../TodoContex";
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <React.Fragment>
        <input 
            className="TodoSearch" 
            placeholder="Ej: Limpiar el cuarto"
            value={searchValue}
            onChange={onSearchValueChange}
        />
        </React.Fragment>
    );
}
export {TodoSearch};