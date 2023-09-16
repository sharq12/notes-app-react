import "./InputNotes.css";
export const InputNotes =()=>{
    return (
        <div className="d-flex flex-column InputNotes ">
            <input placeholder="Enter the title" />
            <textarea placeholder="Enter the Note" />
        </div>
    );
}