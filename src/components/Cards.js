import location from '../img/location.png'

const Cards = (props) => {
    return (
        
        <section className="card">
            <img src={`../img/${props.item.img}`} className="card-image"/>

          <div className="info">
            <div className="location">
                <img src={location}/>
                <p>{props.item.location}</p>
                <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
            <h2>{props.item.title}</h2>
            <div className="date">{props.item.startDate} - {props.item.endDate}</div>
            <div className="description">{props.item.description}</div>
          </div>  
        </section>
        
    )
}

export default Cards;

