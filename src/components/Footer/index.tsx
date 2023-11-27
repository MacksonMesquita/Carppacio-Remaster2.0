/* eslint-disable @next/next/no-img-element */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-3 gap-8 pl-36 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Empresa</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Sobre
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Carreiras
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Central
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Ajuda central</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Server Discord
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contate-nos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legalidade</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Política de privacidade
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Liscensa
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Termos e condições
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Carpaccio™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
