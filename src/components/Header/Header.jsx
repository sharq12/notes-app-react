import './Header.css';
import { Link } from "react-router-dom";

 export const Header =()=>{
    return(
        <header className="d-flex align-center space-between pd-16">
           
           <div className="d-flex align-center gap sm header pd-8">

                <img className="logo-img" src="http://surl.li/leesf" alt="logo" />
                <h1 className="h1">GFG NOTES</h1>
           </div>
           <Link to ="/">Home</Link>
           <Link to = "/archive">Archive</Link>
           
        </header>
    );
}