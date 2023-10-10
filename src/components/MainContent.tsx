import Image from "next/image";
import Link from "next/link";
import React from "react";

const membros: {
  nome: string;
  imagem: string;
  cargo: string;
}[] = [
  {
    nome: "Rodrigo Siqueira",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Valério Gutemberg",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Jurandy Martins",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Karina Oliveira",
    imagem: "/funcionaria.png",
    cargo: "Bolsista",
  },
  {
    nome: "Abner Filipe",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Thiago Campos",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Maria Rita",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
  {
    nome: "Amanda Gabrielle",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
  {
    nome: "José Augusto",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Marcos Aurélio",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Antenor Mario",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Vitor Daniel",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Bruna Medina",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
];

const MainContent = () => {
  return (
    <div className="flex flex-col w-screen">
      {/* ==========================================================
                               HOME
       ==========================================================*/}
      <section
        className="flex flex-row justify-between items-center w-full gap-3 pl-20"
        id="home"
      >
        <div className="flex flex-col justify-end items-center ml-10">
          <h1 className="text-7xl text-main-color font-press-start">GEEKS</h1>
          <h2 className="text-3xl font-extrabold text-white">
            Levando a tecnologia além!
          </h2>
          <Link
            href="#sobre"
            className="mt-5 px-4 py-2 bg-black text-white rounded-md hover:scale-125 transform transition duration-400"
          >
            Saber Mais!
          </Link>
        </div>
        <div className="w-1/2 h-70vh mt-7">
          <Image
            src="/fundo-home.png"
            alt="imagem home"
            width={550}
            height={550}
          />
        </div>
        <div
          className="bg-white h-64 p-5 rounded-2xl flex flex-col
        justify-start items-center shadow-xl gap-1"
        >
          <h1>Edições</h1>
          <Link
            href="/2017"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2017
          </Link>
          <Link
            href="/2018"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2018
          </Link>
          <Link
            href="/2019"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2019
          </Link>
          <Link
            href="/2020"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2020
          </Link>
          <Link
            href="/2021"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2021
          </Link>
          <Link
            href="/2022"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2022
          </Link>
          <Link
            href="/2023"
            className="rounded-xl hover:text-white hover:bg-minhaCor px-5"
          >
            2023
          </Link>
        </div>
      </section>
      {/* ==========================================================
                               SOBRE
       ==========================================================*/}
      <section
        className="flex flex-row justify-center items-center w-screen gap-10 p-10"
        id="sobre"
      >
        <div className="w-1/3">
          <Image
            src="/img-sobre.png"
            alt="imagem sobre"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-start items-center w-1/3 gap-5">
          <h2 className="text-3xl text-main-color font-press-start">
            Sobre Nosso Projeto!
          </h2>
          <p className="text-xl font-bold text-white">
            Temos por objetivo promover a inclusão digital, permitindo que
            crianças e adolescentes possam ter conhecimentos tecnológicos que
            contribuirão para sua formação e mudança de perspectiva de vida.
          </p>
          <Link
            href="#colecao"
            className="px-4 py-2 bg-black text-white rounded-md hover:scale-125 transform transition duration-400"
          >
            Ver Mais!
          </Link>
        </div>
      </section>
      {/* ==========================================================
                               FOTOS
       ==========================================================*/}
      <h2 className="text-3xl text-main-color font-press-start my-14 m-auto">
        Registros
      </h2>
      <section
        className="flex flex-row justify-center items-center w-screen gap-5 mb-10"
        id="sobre"
      >
        <div className="w-1/5 h-1/3 relative">
          <Image
            src="/1.jpg"
            className="border border-white rounded-md shadow-2xl"
            alt="crianças brincando com robôs"
            width={400}
            height={350}
          />
        </div>
        <div className="w-1/5 h-1/3 relative">
          <Image
            src="/2.jpg"
            className="border border-white rounded-md shadow-2xl"
            alt="crianças brincando com robôs"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/5 h-1/3 relative">
          <Image
            src="/3.jpg"
            className="border border-white rounded-md shadow-2xl"
            alt="crianças brincando com robôs"
            width={400}
            height={400}
          />
        </div>
      </section>
      {/* ==========================================================
                                EQUIPE
       ==========================================================*/}
      <section
        className="mx-auto my-20 w-screen flex flex-col justify-center "
        id="equipe"
      >
        <h1 className="text-3xl text-main-color font-press-start my-12 m-auto">
          Equipe do Projeto
        </h1>
        <div className="flex flex-row gap 3 flex-wrap  w-5/6 justify-center items-center mx-auto">
          {membros.map((membro) => (
            <div
              key={membro.nome}
              className="m-5 w-40 h-60 flex flex-col justify-center items-center bg-white"
            >
              <div>
                <Image src={membro.imagem} width={80} height={80} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-bold p-4">{membro.nome}</h3>
                <h2>{membro.cargo}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ==========================================================
                                RODAPÉ
       ==========================================================*/}
      <section id="contato" className="py-20 w-screen flex flex-col justify-center border-t border-primary">
        <div className="flex flex-row justify-around">
          <div className="flex justify-around w-4/5 mx-auto">
            <div className="w-1/5">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Menu Links
                <div className="absolute h-2 w-16 bg-primary left-0 bottom-[-8px]" />
              </h4>
              <ul>
                <Link
                  href="#home"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-home-alt-2 mr-2" /> Home
                </Link>
                <Link
                  href="#sobre"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-paste mr-2" /> Sobre
                </Link>
                <Link
                  href="#colecao"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-image mr-2" /> Coleção
                </Link>
                <Link
                  href="#equipe"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-group mr-2" /> Equipe
                </Link>
                <Link
                  href="#contato"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-contact mr-2" /> Contatos
                </Link>
              </ul>
            </div>
            <div className="w-1/5 mr-7">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Processos Seletivos
                <div className="absolute h-2 w-16 bg-primary left-0 bottom-[-8px]" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AEstude+no+IFRN"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-book mr-2" /> Estude no IFRN
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3ABolsas+para+estudantes"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-money mr-2" /> Bolsas para estudantes
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AServidores"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-briefcase mr-2" /> Servidores
                </Link>
              </ul>
            </div>
            <div className="w-1/5 pl-5">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Cursos
                <div className="absolute h-2 w-16 bg-primary left-0 bottom-[-8px]" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+T%C3%A9cnicos"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-chip mr-2" /> Técnicos
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+Superiores"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-desktop mr-2" /> Superiores
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3AOutros+Cursos"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-mouse-alt mr-2" /> Outros
                </Link>
              </ul>
            </div>
            <div className="w-1/5">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Contatos
                <div className="absolute h-2 w-16 bg-primary left-0 bottom-[-8px]" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/campus/parnamirim/"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-world mr-2" /> Campus Parnamirim
                </Link>
                <Link href="#" className="flex items-center hover:text-primary">
                  <i className="bx bxl-instagram-alt mr-2" /> geeks_ifrn
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 mt-8 border-t border-primary text-lg">
          <span>Copyright © IFRN CAMPUS PARANAMIRIM - 2023</span>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
