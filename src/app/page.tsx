"use client";
import "./styles/globals.css";
import React, { useState } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const phoneNumber = '92984757646'; // Substitua pelo seu número de celular
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      {/* Cabeçalho */}
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8 mx-auto" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className='font-serif font-bold h-8 w-auto text-white hover:text-gray-500'>Degree</p>
              </a>
            </div>
            <div className="hidden lg:flex text-center mr-150 lg:gap-x-12">
              <a href="#services" className="text-sm font-semibold text-white hover:text-gray-500">Sobre</a>
              <a href="#portfolio" className="text-sm font-semibold text-white hover:text-gray-500">Projetos</a>
              <a href="#localizacao" className="text-sm font-semibold text-white hover:text-gray-500">Localização</a>
              <a href="#contato" className="text-sm font-semibold text-white hover:text-gray-500">Contato</a>
            </div>

            {/* Botão do Menu para Mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 shadow-lg z-50">
          <div className="flex flex-col p-4 bg-black bg-opacity-50">
            <a href="#services" className="py-2 text-white hover:text-gray-300">Sobre</a>
            <a href="#portfolio" className="py-2 text-white hover:text-gray-300">Projetos</a>
            <a href="#localizacao" className="py-2 text-white hover:text-gray-300">Localização</a>
            <a href="#contato" className="py-2 text-white hover:text-gray-300">Contato</a>
          </div>
        </div>
      )}

      {/* Seção Hero */}
      <section className="relative h-screen bg-cover bg-center mx-auto" style={{ backgroundImage: 'url(/images/foto12.jpg)' }}>
        <div className="flex items-center justify-start h-full bg-opacity-50 p-10">
          <div className="text-left text-white">
            <h1 className="text-5xl ml-16 font-serif font-semibold tracking-tight sm:text-7xl">BUSCAMOS ENTENDER O</h1>
            <h1 className="text-5xl ml-16 font-serif font-semibold tracking-tight sm:text-7xl">GOSTO DO CLIENTE</h1>
            <div className="mt-10 flex items-center gap-x-6">
              < a href="#portfolio" className="rounded-md ml-16 bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className="py-20 justify-items-center bg-gray-100">
        <div className="container mx-auto text-gray-800">
          <h3 className="mb-4 ml-1 text-3xl font-serif font-bold text-left mx-auto">O QUE FAZEMOS?</h3>
          <p className='text-left ml-1 text-content-justify text-2xl mx-auto'>
            Na Degree, trabalhamos com um <strong>estilo contemporâneo e atemporal</strong>, buscando entender as preferências de cada cliente. Nossa abordagem personalizada transforma espaços em lares que refletem a personalidade de seus moradores. Cada projeto é único, valorizando a individualidade e criando ambientes que atendem às necessidades funcionais, proporcionando conforto e bem-estar. Para nós, um lar é mais do que um espaço físico; é onde memórias são construídas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-center text-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow mx-auto">
              <h4 className="font-serif font-semibold mb-4 mx-auto">Análise de Espaços</h4>
              <p>Avaliamos cada ambiente para entender suas características e potencialidades, garantindo que cada projeto maximize o uso do espaço disponível.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-serif font-semibold mb-4">Desenvolvimento de Conceitos</h4>
              <p>Criamos conceitos de design que capturam a essência do cliente, utilizando elementos que vão desde a escolha de móveis até a paleta de cores.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-serif font-semibold mb-4">Execução de Projetos</h4>
              <p>Acompanhamos a execução dos projetos de perto, assegurando que cada detalhe seja fiel ao planejamento inicial e que a qualidade seja mantida em todas as etapas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-serif font-semibold mb-4">Design de Interiores</h4>
              <p>Oferecemos soluções de design de interiores que transformam espaços, criando ambientes que são tanto funcionais quanto esteticamente agradáveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Transformação de Apartamento */}
      <section className="py-20 bg-white">
        <div className="container bg-gray-100 mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Imagem à esquerda */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/foto10.jpg" alt="Transformação de Apartamento" className="w-auto h-auto rounded-lg shadow-lg" />
          </div>
          
          {/* Texto à direita */}
          <div className="md:w-1/2 md:pl-8 text-center ">
            <p className="text-2xl font-serif text-gray-700 mb-10">
              Transforme seu apartamento em um espaço único e especial com a ajuda dos nossos arquitetos e designers experientes. Solicite um orçamento hoje mesmo e garanta um resultado perfeito!
            </p>
            <a href="#" className="mb-4 inline-block bg-gray-500 text-white px-6 py-3 rounded-md shadow hover:bg-gray-400 font-semibold">
              Solicite um orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="py-20 bg-white mx-auto">
        <div className="container mx-auto text-center text-black">
          <h3 className="text-3xl font-bold font-serif text-center">Projetos Realizados </h3>
          <p className="mt-4 text-center">Confira alguns dos nossos projetos mais recentes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-4 rounded shadow mx auto">
              <img src="/images/foto1.jpg" alt="Projeto 1" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 1</h4>
            </div>
            <div className="bg-white p-4 rounded shadow mx-auto">
              <img src="/images/foto5.jpg" alt="Projeto 2" className="w-full h-48 object-cover rounded " />
              <h4 className="font-semibold mt-2">Projeto 2</h4>
            </div>
            <div className="bg-white p-4 rounded shadow mx-auto">
              <img src="/images/foto3.jpg" alt="Projeto 3" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 3</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Localização */}
      <section id="localizacao" className="py-20 bg-gray-100">
        <div className="container bg-white mx-auto flex flex-col md:flex-row items-start justify-between px-4">
          {/* Endereço à esquerda */}
          <div className="md:w-1/2 mb-8 md:mb-0 mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-4 mt-35 text-center text-black">Nossa Localização</h3>
            <p className="text-lg text-gray-700 text-center">
              Rua Exemplo, 123<br />
              Bairro Exemplo<br />
              Cidade, Estado, 12345-678<br />
              Telefone: (11) 1234-5678
            </p>
          </div>
          
          {/* Mapa à direita */}
          <div className="md:w-1/2 mr-auto mx-auto">
            <iframe
              title="Localização no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-47.123456789012!3d-23.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sNome%20da%20Empresa!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Botão do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18v18H3V3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18v18H3V3z"
          />
        </svg>
      </a>

      {/* Rodapé */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Page;