export function InputPassword(props) {
    const [esValido, setEsValido] = React.useState(true);
    return (
        <input
            className={ esValido ? "input" : "input-match" }
            type="password"
            onChange={event => {
                event.target.value.length < props.minlenght ?
                setEsValido(false) :
                setEsValido(true)
            }
            }
        />
    )
}
