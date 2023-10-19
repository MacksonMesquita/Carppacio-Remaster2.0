import { ArrowCircleRight } from "@phosphor-icons/react";

export function Timeline() {
  return (
    <>
      <div>
        <h1 className="text-textMain font-bold uppercase text-lg tracking-widest flex">
          Carpaccio Timeline
        </h1>
        <h2 className="text-textMain font-medium uppercase text-sm tracking-wider pb-10 flex items-center gap-2">
          <ArrowCircleRight size={30} /> Mural de memórias
        </h2>
      </div>
      <ol className="relative border-l border-gray-300 ml-4">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-textMain">
            Fevereiro de 2016
          </time>
          <h3 className="text-lg font-semibold text-textMain">
            Em meória de Carlos Alvelida Carpaccio e Anne Alvelida de Souza
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400 max-w-[1200px]">
            Carlos Alvelida Carpaccio, o sublime fundador do restaurante
            Carpaccio, faleceu na manhã de 4 fevereiro de 2016 aos 77 anos de
            idade, deixando um legado histórico e mostrando ao mundo o
            verdadeiro valor da comida, a paz e a união! Três meses depois, sua
            esposa, Anne Alvelida de Souza, também finda o seu legado. Deixando
            um histórico de lutas, compamnherismo e fidelidade. Ambos receberam
            estátuas, que podem ser encontradas nos jardins principais do
            restaurante central, em São Paulo.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-400 focus:text-blue-600 select-none"
          >
            Saiba mais{" "}
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-textMain">
            Março de 2019
          </time>
          <h3 className="text-lg font-semibold text-textMain">
            Estrelas e união
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400 max-w-[1200px]">
            Carpaccio ganha sua 4 estrela de condecoração culínaria, se tornando
            o 5 restaurante mais bem avaliado do Brasil. Entrando também para o
            ranking dos 100 restaurantes mais bem sucedidos do mundo e ganhando
            a estrela rede comercial como restaurante franquia!
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-textMain">
            Abril de 2020
          </time>
          <h3 className="text-lg font-semibold text-textMain">
            Em memória de Luana Vieira Pacheco
          </h3>
          <p className="mb-10 text-base font-normal text-gray-400 max-w-[1200px]">
            No dia 22 de Abril de 2022, deixamos expresso, nossas mais sinceras
            homenagens a Luana Vieira Pacheco, CEO regente do Carpaccio desde
            2011. Luana Vieira Pacheco deixou um legado de prosperidade e
            sublime regência, resgatando as origens do restaurante desde a morte
            de seus fundadores. Luana Vieira Pacheco faleceu devido infecção por
            covid-19. Em memória, sua estátua, que pode ser encontrada nos
            jardins principais do restaurante central, em São Paulo.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-pink-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-textMain">
            Junho de 2023
          </time>
          <h3 className="text-lg font-semibold text-textMain">
            Receitas secretas e aniversário de 100 anos
          </h3>
          <p className="mb-4 text-base font-normal text-gray-400 max-w-[1200px]">
            No dia 12 de Junho de 2023 Carpaccio disponibiliza receitas secretas
            passadas de geração para geração, as quais a muito tempo eram vistas
            com olhos de curiosidade e intriga. A revista Saveur, relata todos
            os acontecimentos e guarda a 7 chaves em uma edição especial sobre
            os 100 anos do Carppacio!
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-400 focus:text-blue-600 select-none"
          >
            Saiba mais{" "}
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      </ol>
    </>
  );
}
