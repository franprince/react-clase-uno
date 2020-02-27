export function ValidationInput(props) {
    return (
        <input
            className="input"
            type={props.isPassword === true ? 'password' : ''}
            onChange={event => {
                props.validation(event.target.value) ?
                event.target.classList.remove("input-match") : 
                event.target.classList.add("input-match")
            }}
        />
    )
}
