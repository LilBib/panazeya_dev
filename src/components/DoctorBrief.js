function DoctorBrief (props) {
    return (
        <div className="doc-brief">
            <img className="doc-brief__image" src={props.image} alt="фотография доктора" />
            <div className="doc-brief__info">
                <h3 className="doc-brief__name">{props.name}</h3>
                <p className="doc-brief__profession">{props.profession}</p>
                <p className="doc-brief__main-text">{props.text}</p>
            </div>
        </div>
    )
}
export default DoctorBrief;