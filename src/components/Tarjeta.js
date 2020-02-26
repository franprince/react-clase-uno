function Tarjeta(props) {
    return (
        <div class="tarjeta">
            <img
                src={props.imagen}
                alt="Foto de perfil"
                class="tarjeta-img"
            />
            <div class="tarjeta-data">
                <header class="tarjeta-data-header">{props.nombre}</header>
                <span>{props.titulo}</span>
            </div>
        </div>
    );
}

export default Tarjeta;
