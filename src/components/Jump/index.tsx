export function Jumptron() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-[1600px] text-center pt-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 mb-4">Conheça a Carpaccio Hunter</h1>
        <h3 className="text-textMain font-bold text-2xl mb-6 tracking-wide">Nós investimos no seu potencial!</h3>
        <p className="mb-8 text-lg font-normal text-textMain lg:text-xl sm:px-16 lg:px-48">
          Aqui no Carpaccio Hunter nos concentramos em mercados onde tecnologia e culinária, juntamente com a inovação e o capital podem desbloquear valor a longo prazo e impulsionar o crescimento de
          novas promessas da cozinha!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Vamos nessa!
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-textMain rounded-lg border border-gray-300 hover:bg-gray-600">
            Aprender mais
          </a>
        </div>
      </div>
    </section>
  );
}
