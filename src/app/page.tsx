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
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-gray-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Product</a>
            <a href="#" className="text-sm font-semibold text-gray-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Features</a>
            <a href="#" className="text-sm font-semibold text-gray-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Marketplace</a>
            <a href="#" className="text-sm font-semibold text-gray-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Company</a>
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
        <div className="container mx-auto text-gray-800">
          <h3 className="text-3xl font-serif font-bold text-left">O QUE FAZEMOS?</h3>
          <p className='font-serif text-left'>A Degree Arquitetura se destaca na área de arquitetura de interiores, oferecendo soluções criativas e personalizadas que refletem a identidade dos clientes. Com uma equipe especializada, a empresa projeta ambientes funcionais e estéticos, desde residências até espaços comerciais, sempre priorizando a harmonia e a sustentabilidade. Além disso, a Degree Arquitetura realiza:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
            <div className="bg-white p-6 rounded shadow ">
              <h4 className="font-semibold">Análise de Espaços</h4>
              <p>Avaliamos cada ambiente para entender suas características e potencialidades, garantindo que cada projeto maximize o uso do espaço disponível.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Desenvolvimento de Conceitos</h4>
              <p>Criamos conceitos de design que capturam a essência do cliente, utilizando elementos que vão desde a escolha de móveis até a paleta de cores.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Execução de Projetos</h4>
              <p>Acompanhamos a execução dos projetos de perto, assegurando que cada detalhe seja fiel ao planejamento inicial e que a qualidade seja mantida em todas as etapas.</p>
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