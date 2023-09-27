import "./NoteCard.css";
import {useNotes} from "../../context/notes-context";
import { InputNotes } from "../InputNotes/InputNotes";


export const NoteCard = (props)=>{

    // const {id, title, inputNote} = props;

    const {notes} = props; 
    const {id, title, inputNote} = notes ;
    

    const state = useNotes();
    const {note, setNote, pinNotes, setPinNotes, archiveNotes, setArchiveNotes} = state;

   


    const onDeletebtn = (id)=>{
        const filterredArrOtherNotes = note.filter(note=>note.id !== id)
        setNote(filterredArrOtherNotes);
        // console.log(filterredArr);
        // console.log(id);

        const filterredArrPinNotes = pinNotes.filter(note=>note.id !== id)
        setPinNotes(filterredArrPinNotes);

        const flteredArrArchiveNotes = archiveNotes.filter(note=>note.id !== id);
        setArchiveNotes(flteredArrArchiveNotes);

    }
    const onPinClick = (id)=>{
        const filterredArr = note.filter(note=>note.id !== id);
        setNote(filterredArr);
        setPinNotes([...pinNotes, {id , title , inputNote}]);
        console.log(notes);
        console.log(pinNotes);
    }

    const onUnpinClick = (id)=>{
        const filteredArr = pinNotes.filter(notes=>notes.id !== id);
        setPinNotes(filteredArr);
        setNote([...note, {id, title, inputNote}]);  // adding to note
    }

  

    const onArchiveClick = (id)=>{

        if(isNotePinned){
            const filteredArr = pinNotes.filter(note=>note.id !== id)
            setPinNotes(filteredArr);
        }else {
            const filteredArr = note.filter(note=>note.id !== id);
            setNote(filteredArr);
        }

        setArchiveNotes([...archiveNotes, {id, title, inputNote}]);    // adding to archive note 
        console.log(isNotePinned);
        console.log({note});
        console.log({archiveNotes});
        

    //     const filterredArr2 = pinNotes.filter(note=>note.id !== id);
    //     setPinNotes(filterredArr2);
     }

     const OnUnArchiveClick = (id)=>{
        const filteredArrArchive = archiveNotes.filter(note=>note.id !== id );
        setArchiveNotes(filteredArrArchive);
        setNote([...note, {id, title , inputNote}]);
     }


     const findPinnedNote =(pinnotes, id )=>{

        return  pinNotes.some(notes=> notes.id === id );

    };

    const isNotePinned = findPinnedNote(pinNotes, id );
    // console.log(isNotePinned);


     const findArchivedNotes = (archiveNotes, id)=>{
         return archiveNotes.some(note=>note.id === id );
     }


     const isNoteArchived = findArchivedNotes(archiveNotes, id);
     console.log({isNoteArchived});
    


    return (
        <div className="notes-container">
           <div className= " title d-flex space-between align-center"> 
           <p>{title}</p>
           { !isNoteArchived && <button onClick = {isNotePinned?()=>onUnpinClick(id) :()=>onPinClick(id)}>{isNotePinned? "Unpin":"Pin" }</button>}

           </div>
           <div className="notes">
            <p>{inputNote}</p>
            <div>
                <button onClick = {isNoteArchived?()=>OnUnArchiveClick(id):()=>onArchiveClick(id)} >{isNoteArchived?"UnArchive":"Archive"}</button>
                <button key = {id} onClick = {()=>onDeletebtn(id)}>Delete</button>
            </div>

           </div>   
        </div>
    )
}