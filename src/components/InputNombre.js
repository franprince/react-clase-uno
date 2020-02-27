export function InputNombre(props) {
    return (
        <input
            className="input"
            onChange={event => {
                if(event.target.value === props.nombre){
                    event.target.classList.add("input-match");
                }else{
                    event.target.classList.remove("input-match");
                }
            }}
        />
    )
}
