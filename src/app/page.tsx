import { url } from 'inspector';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-white">
      {/* Cabeçalho */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className='h-8 w-auto text-white'>degree</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-white">Product</a>
            <a href="#" className="text-sm font-semibold text-white">Features</a>
            <a href="#" className="text-sm font-semibold text-white">Marketplace</a>
            <a href="#" className="text-sm font-semibold text-white">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white"><span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>

            {/* Seção Hero */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/foto12.jpg)' }}>
        <div className="flex items-center justify-start h-full bg-opacity-50 p-10"> {/* Alinhamento à esquerda com margem */}
          <div className="text-left text-white">
            <h1 className="text-5xl font-serif font-semibold tracking-tight sm:text-7xl">BUSCAMOS ENTENDER O</h1>
            <h1 className="text-5xl font-serif font-semibold tracking-tight sm:text-7xl">GOSTO DO CLIENTE</h1>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Seção de Serviços */}
      <section id="services" className="py-20">
        <div className="container mx-auto text-center text-black">
          <h3 className="text-3xl font-bold">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Desenvolvimento Web</h4>
              <p>Construímos sites responsivos e funcionais.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Design Gráfico</h4>
              <p>Criação de identidades visuais impactantes.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Consultoria Digital</h4>
              <p>Orientação para otimizar sua presença online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center text-black">
          <h3 className="text-3xl font-bold">Nosso Portfólio</h3>
          <p className="mt-4">Confira alguns dos nossos projetos mais recentes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/project1.jpg" alt="Projeto 1" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 1</h4>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/project2.jpg" alt="Projeto 2" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 2</h4>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img src="/images/project3.jpg" alt="Projeto 3" className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">Projeto 3</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-20">
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