import Image from "next/image"
import Link from "next/link"
import logo from "./img/logo.png"
import fundoHome from "./img/fundo-home.png"
import imgSobre from "./img/img-sobre.png"
import foto1 from "./img/1.jpg"
import foto2 from "./img/2.jpg"
import foto3 from "./img/3.jpg"
import funcionario from "./img/funcionario.png"
import funcionaria from "./img/funcionaria.png"

const membros: {
  nome: string
  genero: "M" | "F"
  cargo: string
}[] = [
  {
    nome: "Rodrigo Siqueira",
    genero: "M",
    cargo: "Professor"
  },
  {
    nome: "Valério Gutemberg",
    genero: "M",
    cargo: "Professor"
  },
  {
    nome: "Jurandy Martins",
    genero: "M",
    cargo: "Professor"
  },
  {
    nome: "Karina Oliveira",
    genero: "F",
    cargo: "Bolsista"
  },
  {
    nome: "Abner Filipe",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Thiago Campos",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Maria Rita",
    genero: "F",
    cargo: "Voluntária"
  },
  {
    nome: "Amanda Gabrielle",
    genero: "F",
    cargo: "Voluntária"
  },
  {
    nome: "José Augusto",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Marcos Aurélio",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Antenor Mario",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Vitor Daniel",
    genero: "M",
    cargo: "Voluntário"
  },
  {
    nome: "Bruna Medina",
    genero: "F",
    cargo: "Voluntária"
  }
]

export default function Home() {
  return (
    <>
      <header>
        <a href="#index.html" className="logo">
          <Image src={logo} alt="" height={60} />
        </a>
        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#colecao">Imagens</a>
          </li>
          <li>
            <a href="#equipe">Equipe</a>
          </li>
          <li>
            <a href="#contato">Contatos</a>
          </li>
        </ul>
      </header>
      {/*-----------Home-----------*/}
      <div className="div-lateral">
        <ul>
          <h4>Edições:</h4>
          <br />
          <li>
            <Link href="/edicoes/2017">2017</Link>
          </li>
          <li>
            <Link href="/edicoes/2018">2018</Link>
          </li>
          <li>
            <Link href="/edicoes/2019">2019</Link>
          </li>
          <li>
            <Link href="/edicoes/2020">2020</Link>
          </li>
          <li>
            <Link href="/edicoes/2021">2021</Link>
          </li>
          <li>
            <Link href="/edicoes/2022">2022</Link>
          </li>
          <li>
            <Link href="/edicoes/2023">2023</Link>
          </li>
        </ul>
      </div>
      <section className="home" id="home">
        <div className="home-text">
          <h1>GEEKS</h1>
          <h2>Levando a tecnologia além!</h2>
          <a href="#sobre" className="btn">
            Saber Mais!
          </a>
        </div>
        <div className="home-img">
          <Image src={fundoHome} alt="imagem home" />
        </div>
      </section>
      {/*-----------Sobre-----------*/}
      <section className="sobre" id="sobre">
        <div className="sobre-img">
          <Image src={imgSobre} alt="imagem sobre" />
        </div>
        <div className="sobre-text">
          <h2>Sobre Nosso Projeto!</h2>
          <p>
            Temos por objetivo promover a inclusão digital, permitindo que crianças
            e adolescentes possam ter conhecimentos tecnológicos que contribuirão
            para sua formação e mudança de perspectiva de vida.
          </p>
          <a href="#colecao" className="btn">
            Ver Mais!
          </a>
        </div>
      </section>
      {/*-----------Fotos-----------*/}
      <h1 className="heading-title" id="colecao">
        {" "}
        Coleção de Imagens{" "}
      </h1>
      <br />
      <div className="fotos">
        <div className="card">
          <Image src={foto1} alt="" height={250} className="foto1" />
        </div>
        <div className="card">
          <Image src={foto2} alt="" height={250} className="foto1" />
        </div>
        <div className="card">
          <Image src={foto3} alt="" height={250} className="foto1" />
        </div>
      </div>
      {/*-----------Equipe-----------*/}
      <section className="features" id="equipe">
        <h1 className="heading-title"> Equipe do Projeto </h1>
        <div className="box-container">
          {membros.map(membro => (
            <div className="box-funcionario">
              <div className="image">
                <Image src={membro.genero === "M" ? funcionario : funcionaria} width={80} alt="" />
              </div>
              <div className="content">
                <h3>{membro.nome}</h3>
                <h2>{membro.cargo}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*-----------Contatos-----------*/}
      <section id="contato">
        <div className="footer">
          <div className="main">
            <div className="col">
              <h4 className="link">Menu Links</h4>
              <ul>
                <li>
                  <a href="#home">
                    <i className="bx bxs-home-alt-2" /> Home
                  </a>
                </li>
                <li>
                  <a href="#sobre">
                    <i className="bx bxs-paste" /> Sobre
                  </a>
                </li>
                <li>
                  <a href="#colecao">
                    <i className="bx bxs-image" /> Coleção
                  </a>
                </li>
                <li>
                  <a href="#equipe">
                    <i className="bx bxs-group" /> Equipe
                  </a>
                </li>
                <li>
                  <a href="#contato">
                    <i className="bx bxs-contact" /> Contatos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="link">Processos Seletivos</h4>
              <ul>
                <li>
                  <a href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AEstude+no+IFRN">
                    <i className="bx bxs-book" /> Estude no IFRN
                  </a>
                </li>
                <li>
                  <a href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3ABolsas+para+estudantes">
                    <i className="bx bx-money" /> Bolsas para estudantes
                  </a>
                </li>
                <li>
                  <a href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AServidores">
                    <i className="bx bxs-briefcase" /> Servidores
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="link">Cursos</h4>
              <ul>
                <li>
                  <a href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+T%C3%A9cnicos">
                    <i className="bx bxs-chip" /> Técnicos
                  </a>
                </li>
                <li>
                  <a href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+Superiores">
                    <i className="bx bx-desktop" /> Superiores
                  </a>
                </li>
                <li>
                  <a href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3AOutros+Cursos">
                    <i className="bx bxs-mouse-alt" /> Outros
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4 className="link">Contatos</h4>
              <ul>
                <li>
                  <a href="https://portal.ifrn.edu.br/campus/parnamirim/">
                    <i className="bx bx-world" /> Campus Parnamirim
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram-alt" /> geeks_ifrn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credit">
          {" "}
          <span>Copyright © IFRN CAMPUS PARANAMIRIM - 2023</span>{" "}
        </div>
      </section>
    </>
  )
}
