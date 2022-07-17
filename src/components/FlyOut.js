function FlyOut (props) {
    return (
        <div className={props.isActive? "flyout_active" : "flyout"}>
            <h2 className="flyout__button">войти в аккаунт</h2>
            <h2 className="flyout__button">зарегестрироваться</h2>
        </div>
    )
}

export default FlyOut;