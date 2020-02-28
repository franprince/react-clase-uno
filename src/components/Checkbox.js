export function Checkbox(props) {
    const [isChecked, setIsChecked] = React.useState(props.initialValue);
    return (
        <React.Fragment>
            <label>{props.name}</label>
            <input
                checked={isChecked}
                className="input"
                type="checkbox"
                onChange={event => {
                    event.target.checked = !event.target.checked;
                    setIsChecked(!isChecked);
                }}
            />
            <span><strong>Checked:</strong>{isChecked? "Si" : "No"}</span>
        </React.Fragment>
    )
}
