
/*
 * Este componente debe renderizar un checkbox (<input type="checkbox" />).
 * Recibirá tres props: name, value y onChange.
 * name indica el nombre del checkbox, será un string que debe ser renderizado a su lado.
 * value es un booleano que indica el valor del checkbox (true o false según esté o no seleccionado).
 * onChange es una función que se debe disparar cuando el checkbox se selecciona.
 */


export function ControlledCheckbox(props) {
    return (
        <React.Fragment>
            <label>{props.name}</label>
            <input
                checked={props.value}
                className="input"
                type="checkbox"
                onChange= { props.onChange }
            />
        </React.Fragment>
    )
}
