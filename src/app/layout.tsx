// src/app/layout.tsx

import '../app/styles/globals.css'; // Importa o CSS global

export const metadata = {
  title: 'Degree Architecture',
  description: 'Transformando espaços em arte',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;