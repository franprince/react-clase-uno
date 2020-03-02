export function InputNombre(props) {
    const [esValido, setEsValido] = React.useState(true);
    return (
        <input
            className={esValido ? "input" : "input-match"}
            onChange={event => { event.target.value === props.nombre ? setEsValido(true) : setEsValido(false) }
            }
        />
    )
}
