import { Checkbox } from "./Checkbox.js";

export function CheckboxList(props) {
    return (
        <ul>
            {Object.entries(props.items).map((element, index) => 
               <li key={ "li"+index }>
                   <Checkbox key={ "check"+index } name={ element[0] } initialValue={ element[1] }/>
             </li>
        )}
        </ul>
    )
}
