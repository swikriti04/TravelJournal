import { FaGlobeAmericas } from 'react-icons/fa';
import styles from "./styles.css"

export default function Navbar() {
    return(
        <div className="header">
            <FaGlobeAmericas style={{width: 30, height: 30, marginLeft: 680, marginTop: 20, color: 'white'}}/>
            <h3 className='heading'>  My Travel Journal </h3>
        </div>
    )
}