import { ControlledCheckbox } from "./ControlledCheckbox.js";

export function CheckboxListWithState(props) {
    const [itemsState, setItemsState] = React.useState(props.items);
    return (
        <ul>
            {Object.entries(props.items).map((element, index) =>
                <li key={"li" + index}>
                    <ControlledCheckbox key={"check" + index} name={element[0]} value={element[1]} />
                </li>
            )}
        </ul>
    )
}
