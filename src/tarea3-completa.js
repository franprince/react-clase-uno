import { CheckboxList } from './components/CheckboxList.js';

//ReactDOM.render(<InputNombre nombre="Francisco" />, document.getElementById('react-app'));
ReactDOM.render(
<CheckboxList items={{
    Carlos: true, 
    Armenio: false,
    Amelia: true
}}/>
, document.getElementById('react-app'));
