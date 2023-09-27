// import { Header } from '../../components/Header/Header';
// import { InputNotes } from '../../components/InputNotes/InputNotes';

import { Header, InputNotes , NoteCard} from "../../components"; 
import {useNotes} from "../../context/notes-context"

export const Home =()=>{

   const state = useNotes();
   const {title , setTitle, inputNote, setInputNote, note, setNote, pinNotes, setPinNotes, archiveNotes, setArchiveNotes} = state;

   // console.log({title});
   // console.log({inputNote});
   // console.log(note);
  //  console.log(pinNotes);
   return ( 
   <>
        <Header />
        <InputNotes />


         <div>
         {
          pinNotes.length > 0 &&<h3>Pinned Notes</h3>
         }
        <div className="d-flex gap wrap">
         
        {
      //   pinNotes.map((pinNote)=> <NoteCard key={pinNote.id} title={pinNote.title} inputNote ={pinNote.inputNote} id={pinNote.id} />)
         pinNotes.map((pinNote)=> <NoteCard key={pinNote.id} notes = {pinNote} />)
        }
        </div>
        </div>
      
        <div>
        {
           note.length > 0 && <h3>Other Notes </h3>
         }

        <div className="d-flex gap wrap">
        
        {
      //   note.map((note)=> <NoteCard key={note.id} title={note.title} inputNote ={note.inputNote} id={note.id} />)
          note.map((note)=> <NoteCard key={note.id} notes={note} />)
      
        }
        </div>
        </div>


        {/* <div>
         {
          archiveNotes.length > 0 &&<h3>Archive Notes</h3>
         }
        <div className="d-flex gap wrap">
         
        {
      //   pinNotes.map((pinNote)=> <NoteCard key={pinNote.id} title={pinNote.title} inputNote ={pinNote.inputNote} id={pinNote.id} />)
         archiveNotes.map((note)=> <NoteCard key={note.id} notes = {note} />)
        }
        </div>
        </div> */}
        
        
   </>
   )

}