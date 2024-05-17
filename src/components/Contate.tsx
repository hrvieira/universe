import './../paginas/home/Home.css'

function Contate() {
  return (
     <>
          <section id="box-contate">
          <article id="main-contate">
                    <h3 id="titulo-secundario">Me Contate</h3>
                    <p id="texto-contate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique esse fuga necessitatibus, iusto alias eius perferendis qui iste minima blanditiis repellendus distinctio dolor obcaecati aliquid quod quidem incidunt quibusdam!</p>
                    <div id="box-icone-contate">
                         <div>
                              <a href="https://www.linkedin.com/in/luizhrvieira/"><img src="src\assets\img\svg\linkedin.svg" alt="ícone linkedin" id="contate-icone" /></a>
                              <a href="https://github.com/hrvieira"><img src="src\assets\img\svg\github.svg" alt="ícone github" id="contate-icone" /></a>
                              <img src="src\assets\img\svg\instagram.svg" alt="ícone instagram" id="contate-icone" />
                         </div>
                    </div>
               </article>
               <form id="form-contate">
                    <label>Nome:<input type="text" name="nome" id="nome" placeholder="Digite seu nome" /></label>
                    <label>Email:<input type="email" name="email" id="email" placeholder="exemplo@exemplo.com" /></label>
                    <label>Assunto:<input type="text" name="assunto" placeholder="Projeto" /></label>
                    <label>Mensagem:
                         <textarea id="mensagem" rows="3" name="mensagem" required="" placeholder="Descreva o assunto"></textarea></label>
                    <input id="enviar" type="submit" value="Enviar"></input>
               </form>
          </section>
     </>

  )
  
}

export default Contate