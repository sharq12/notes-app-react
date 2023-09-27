
import { Header, NoteCard } from "../../components";
import { useNotes } from "../../context/notes-context";

export const Archive = ()=>{

    const  state  = useNotes();
    const { archiveNotes } = state;
    console.log({archiveNotes});
    return (
        <>
         <Header />
         <h3>Archived Notes</h3>

         <div className=" d-flex gap-m wrap"> 
          {
           
          archiveNotes.map(note => <NoteCard key={note.id} notes={note} /> )
       
           }
          </div>
        
          </> 
       


    );
}