
import { ValidationInput } from './components/ValidationInput.js';

//ReactDOM.render(<InputNombre nombre="Francisco" />, document.getElementById('react-app'));
ReactDOM.render(
<React.Fragment>
   <ul>
        <li>
            <label>Nombre</label>
            <ValidationInput validation={(value) => value !== "Francisco"} isPassword={false} />
             - El nombre debe ser Francisco
        </li>
        <li>
            <label>Password</label>
            <ValidationInput validation={(value) => value.length >= 8} isPassword={true} />
             - La contraseña debe tener al menos 8 caracteres
        </li>
        <li>
        <label>Email</label>
        <ValidationInput validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)} isPassword={false} />
         - Debés ingresar un email válido</li>
    </ul>
</React.Fragment>, document.getElementById('tarea-2'));
