export default function Product({gObj}) {
    return (
        <div className="col-lg-3">
            <div className="card landing-card">
                <img className="card-img-top" src={gObj._image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{gObj._title}</h5>
                    <p className="card-text">{gObj._desc}</p>
                </div>
            </div> 
        </div>       
    )
}