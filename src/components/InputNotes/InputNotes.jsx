import "./InputNotes.css";
import { useNotes } from "../../context/notes-context";
import {v4} from "uuid";
export const InputNotes =()=>{

    const state = useNotes();
    const {title, setTitle, inputNote, setInputNote , note, setNote} = state;

    const onTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const onNotesChange=(e)=>{
        setInputNote(e.target.value);
    }

    const onAddNoteClick =()=>{
        setNote([...note,{id: v4() ,title, inputNote}]);
    }

    return (
        <div className="d-flex flex-column InputNotes ">
            <input value={title} onChange={onTitleChange} placeholder="Enter the title" />
            <textarea value={inputNote} onChange={onNotesChange} placeholder="Enter the Note" />
            <button onClick={onAddNoteClick}>Add</button>
        </div>
    );
}