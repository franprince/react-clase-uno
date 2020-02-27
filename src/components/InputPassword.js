export function InputPassword(props) {
    return (
        <input
            className="input"
            type="password"
            onChange={event => {
                if(event.target.value.length < props.minlenght){
                    event.target.classList.add("input-match");
                }else{
                    event.target.classList.remove("input-match");
                }
            }}
        />
    )
}
