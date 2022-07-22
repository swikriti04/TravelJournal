import styles from "./styles.css"
import { FaMapMarker} from 'react-icons/fa';

export default function Body(props) {
    return (
        <div>
            <div className="content">
                <div>
                    <img src={props.item.imageUrl} className="image"/>
                </div>
                <div className="texts">
                    <a><FaMapMarker style={{color: 'red'}}/> {props.item.location} <a className="greyText"> View on Google Maps</a></a>
                    <h1 >{props.item.title}</h1>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p className="decription">{props.item.description}</p>
                </div>
            </div>
            
        </div>
    )
}