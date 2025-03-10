"use client";
import React, { useState } from 'react';


const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-500">
      {/* Cabeçalho */}
      <header className="absolute inset-x-0 top-0 z-50 mx-4">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className='font-serif font-bold h-8 w-auto text-white hover:text-gray-500'>Degree</p>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-white  hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Product</a>
            <a href="#" className="text-sm font-semibold text-white  hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Features</a>
            <a href="#" className="text-sm font-semibold text-white  hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Marketplace</a>
            <a href="#" className="text-sm font-semibold text-white  hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white"><span aria-hidden="true">&rarr;</span></a>
          </div>

          {/* Botão do Menu para Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 shadow-lg z-50">
          <div className="flex flex-col p-4 bg-black bg-opacity-50">
            <a href="#" className="py-2 text-white hover:text-gray-300">Product</a>
            <a href="#" className="py-2 text-white hover:text-gray-300">Features</a>
            <a href="#" className="py-2 text-white hover:text-gray-300">Marketplace</a>
            <a href="#" className="py-2 text-white hover:text-gray-300">Company</a>
          </div>
        </div>
      )}

            {/* Seção Hero */}
      <section className="relative h-screen bg-cover bg-center " style={{ backgroundImage: 'url(/images/foto12.jpg)' }}>
        <div className="flex items-center justify-start h-full bg-opacity-50 p-10"> {/* Alinhamento à esquerda com margem */}
          <div className="text-left text-white">
            <h1 className="text-5xl font-serif font-semibold tracking-tight sm:text-7xl">BUSCAMOS ENTENDER O</h1>
            <h1 className="text-5xl font-serif font-semibold tracking-tight sm:text-7xl">GOSTO DO CLIENTE</h1>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#portfolio" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Seção de Serviços */}
      <section id="services" className="py-20 justify-items-center mx-4 bg-gray-100">
        <div className="container mx-auto text-gray-800">
          <h3 className="mb-4 text-3xl font-serif font-bold text-left">O QUE FAZEMOS?</h3>
          <p className='font-serif text-left'>
          Na Degree, trabalhamos com um <strong>estilo contemporâneo e atemporal</strong>, sempre buscando entender as preferências e o gosto de cada cliente. Nossa abordagem é personalizada, incorporando um toque de decoração afetiva que transforma espaços em verdadeiros lares. Acreditamos que cada ambiente deve ser uma extensão da personalidade de seus moradores, refletindo suas histórias e vivências.
          Cada projeto que desenvolvemos é único, com características distintas que o diferenciam dos demais. Valorizamos a individualidade e a autenticidade, criando ambientes que não apenas atendem às necessidades funcionais, mas que também proporcionam conforto e bem-estar. Para nós, um lar é mais do que um espaço físico; é um lugar onde memórias são construídas e sentimentos são vividos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-serif font-semibold mb-4">Análise de Espaços</h4>
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
      <section className="py-20 bg-gray-100 mx-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Imagem à esquerda */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/foto10.jpg" alt="Transformação de Apartamento" className="w-auto h-auto rounded-lg shadow-lg" />
          </div>
          
          {/* Texto à direita */}
          <div className="md:w-1/2 md:pl-8 text-center ">
            <p className="text-2xl font serif text-gray-700 mb-10">
              Transforme seu apartamento em um espaço único e especial com a ajuda dos nossos arquitetos e designers experientes. Solicite um orçamento hoje mesmo e garanta um resultado perfeito!
            </p>
            <a href="#" className="inline-block bg-gray-500 text-white px-6 py-3 rounded-md shadow hover:bg-gray-400 font-semibold">
              Solicite um orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="py-20 bg-white mx-4">
        <div className="container mx-auto text-center text-black">
          <h3 className="text-3xl font-bold font-serif">Nosso Portfólio</h3>
          <p className="mt-4">Confira alguns dos nossos projetos mais recentes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/foto1.jpg" alt="Projeto 1" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 1</h4>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/foto2.jpg" alt="Projeto 2" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 2</h4>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/foto3.jpg" alt="Projeto 3" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 3</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-20 mx-4 bg-gray-100">
        <div className="container mx-auto text-center text-black">
          <h3 className="text-3xl font-bold">Entre em Contato</h3>
          <p className="mt-4">Estamos prontos para ajudar você a realizar seu projeto.</p>
          <form className="mt-6">
            <input type="text" placeholder="Seu Nome" className="border p-2 rounded w-1/2 mx-auto" required />
            <input type="email" placeholder="Seu Email" className="border p-2 rounded w-1/2 mx-auto mt-4" required />
            <textarea placeholder="Sua Mensagem" className="border p-2 rounded w-1/2 mx-auto mt-4" rows={4} required></textarea>
            <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-5 rounded">Enviar</button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Page;