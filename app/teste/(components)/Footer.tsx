import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 p-4 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.243l-1.918.001c-1.503 0-1.794.714-1.794 1.761v2.31h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.324V1.325C24 .59 23.41 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557a9.77 9.77 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.863 9.863 0 01-3.127 1.194A4.916 4.916 0 0016.616 3c-2.717 0-4.916 2.198-4.916 4.917 0 .385.044.76.128 1.122-4.086-.205-7.713-2.16-10.14-5.132a4.844 4.844 0 00-.665 2.475c0 1.708.869 3.215 2.188 4.098a4.9 4.9 0 01-2.228-.616v.062c0 2.386 1.696 4.374 3.946 4.827a4.902 4.902 0 01-2.224.085c.63 1.953 2.445 3.376 4.6 3.416A9.873 9.873 0 010 19.54a13.937 13.937 0 007.548 2.213c9.142 0 14.144-7.724 14.144-14.435 0-.22-.005-.438-.014-.655A10.077 10.077 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.028-3.037-1.849-3.037-1.849 0-2.134 1.444-2.134 2.94v5.666h-3.553V9h3.415v1.561h.049c.477-.902 1.637-1.849 3.37-1.849 3.602 0 4.266 2.37 4.266 5.456v6.284zM5.337 7.433c-1.144 0-2.067-.924-2.067-2.067 0-1.143.923-2.066 2.067-2.066s2.067.923 2.067 2.066c0 1.143-.923 2.067-2.067 2.067zM6.794 20.452H3.881V9h2.913v11.452zM22.225 0H1.771C.791 0 0 .791 0 1.771v20.457C0 23.209.791 24 1.771 24h20.457C23.209 24 24 23.209 24 22.225V1.771C24 .791 23.209 0 22.225 0z" />
            </svg>
          </a>
        </div>
        <div className="text-gray-300 mb-4">
          &copy; {new Date().getFullYear()} NeuroNavigator. Todos os direitos reservados.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Política de Privacidade
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Termos de Serviço
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
