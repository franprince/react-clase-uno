import { BlogPost } from './components/Blogpost.js';

ReactDOM.render(
    <BlogPost
        titulo="Capitalismo Strikes Again"
        parrafos="Hoy me compré una campera, /n estaba en oferta por cierre del local. /n Creo que necesito una pecera."
        autor={{
            nombre: "Francisco Prince",
            titulo: "Developer Wannabe",
            imagen: "https://nic.ar/sites/default/files/logo-nic_0.png"
        }} />,
    document.getElementById('tarea-1'));
