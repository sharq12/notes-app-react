import { createContext, useState, useContext } from "react";

// 1. create the context
const NotesContext =  createContext();

// 2. create the provider

const NotesProvider = (props)=>{
    const [title, setTitle] = useState("");
    const [inputNote, setInputNote] = useState("");
    const [note, setNote] = useState([]);
    const [pinNotes, setPinNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);


    return(
        <NotesContext.Provider value = {{title , setTitle, inputNote, setInputNote, note, setNote, pinNotes, setPinNotes, archiveNotes, setArchiveNotes}} > {props.children} </NotesContext.Provider>
    )
};

// 3. use the constext    -- creating a custom context
const useNotes = ()=> useContext(NotesContext);

export{NotesProvider, useNotes};



