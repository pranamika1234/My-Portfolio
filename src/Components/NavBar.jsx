import {navlinks} from "../constants";
const NavBar = () => {
    return(
   <header>
       <nav>
           <img src="/portfolioicon1.svg" alt="Portfolio logo" className="w-6 h-6" />
           <ul>
               {navlinks.map(({label})=>(
                   <li key={label}>
                       <a href={label}>{label}</a>
                   </li>
               ))}
           </ul>
       </nav>
   </header>
    )
}

export default NavBar;