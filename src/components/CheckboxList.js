import { Checkbox } from "./Checkbox.js";

export function CheckboxList(props) {
    console.log(props.items)
    return (
        props.items.map(element => {
            <Checkbox name={element.key} initialValue={ element.value } />
        })
    )
}
