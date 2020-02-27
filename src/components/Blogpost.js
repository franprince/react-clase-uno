import { Tarjeta } from './Tarjeta.js';

export function BlogPost(props) {
    return (
        <article className="post">
        <header className="post-header">
          <h2 className="post-title">{ props.titulo }</h2>
          <Tarjeta {...props.autor}/>
          </header>
          { props.parrafos.split('/n').map((parrafo,index)=>(
              <p key={index} className="post-paragraph">{ parrafo }</p>
          ))}
      </article>
    );
  }
