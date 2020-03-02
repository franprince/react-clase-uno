import { ControlledCheckbox } from "./ControlledCheckbox.js";

export function CheckboxListWithState(props) {
    const [itemsState, setItemsState] = React.useState(props.items);
    return (
        <ul>
            {Object.entries(itemsState).map((element, index) =>

                <li key={"li" + index}>
                    <ControlledCheckbox
                        key={"check" + index}
                        name={element[0]}
                        value={element[1]}
                        onChange={()=>setItemsState({...itemsState, [element[0]]:!itemsState[element[0]] })} />
                </li>
            )}
        </ul>
    )
}
