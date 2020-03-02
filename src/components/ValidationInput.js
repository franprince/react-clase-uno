export function ValidationInput(props) {
    const [esValido, setEsValido] =  React.useState(true);
    return (
        <input
            className= {esValido ? "input" : "input-match"}
            type={props.isPassword === true ? 'password' : ''}
            onChange={event => {
                props.validation(event.target.value) ?
                setEsValido(true) : 
                setEsValido(false)
            }}
        />
    )
}
