import { CheckboxListWithState } from './components/CheckboxListWithState.js';

//ReactDOM.render(<InputNombre nombre="Francisco" />, document.getElementById('react-app'));
ReactDOM.render(
<CheckboxListWithState items={{
    Carlos: true, 
    Armenio: false,
    Amelia: true
}}/>
, document.getElementById('tarea-3'));
