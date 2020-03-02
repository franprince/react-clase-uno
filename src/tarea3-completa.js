import { CheckboxList } from './components/CheckboxList.js';

//ReactDOM.render(<InputNombre nombre="Francisco" />, document.getElementById('react-app'));
ReactDOM.render(
<CheckboxList items={{
    'Juan Carlos': true, 
    Rogelio: false,
    Amelia: true
}}/>
, document.getElementById('tarea-3'));
