export function Accordion() {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-[18px] text-left text-darkmain border border-b-0 border-colorBorderAccordion bg-textMain font-sans"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-1"
        >
          <span>Sobre nossos chefes!</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-b-0 border-backgroundSub bg-whitemain font-sans font-medium text-[15px]">
          <p className="mb-2 text-darkmain">
            Carpaccio possui uma vasta gama de chefes. Alguns deles premiados com as mais avançadas e desejadas consagrações gastronômicas, sendo representados em revistas internacionais e resenhas
            criticas. Nosso restaurante sempre zelou pelo reconhecimento e a dedicação na cozinha, pois afinal, cozinhar não é só cozinhar, é levar ao mundo através dos alimentos, amor e carinho.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-[18px] text-left text-darkmain border border-b-0 border-colorBorderAccordion bg-textMain font-sans"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Cardápio completo</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div className="p-5 border border-b-0 border-backgroundSub bg-whitemain font-sans font-medium text-[15px]">
          <p className="mb-2 text-darkmain">
            Nosso cardápio possui variações gigantescas de alimentos e pratos, preparados por mãos talentosas e especializadas no assunto. Temos: pratos tradicionalmente brasileiros, Pratos tematicos
            de cada estado do Brasil, partos veganos, pratos fitness, cardápios especializados em frutos-do-mar, animais selvagens, iguarias, manjares, pratos internacionais, cachaças, sucos naturais,
            batidas e muito mais!
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-[18px] text-left text-darkmain border border-b-0 border-colorBorderAccordion rounded-b-xl bg-textMain font-sans"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span>Oque nos diferencia?</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div className="p-5 border border-b-0 border-backgroundSub bg-whitemain font-sans font-medium text-[15px]">
          <p className="mb-2 text-darkmain">
            Diferentemente de muitos outros restaurantes, prezamos pela experiência do cliente, fazendo com amor e dedicação os alimentos que serão consumidos, através de pessoas que amam o seu
            trabalho, desde do maior responsável, até o menor na cadeia empresarial, todos os clientes são sempre bem-vindos!
          </p>
        </div>
      </div>
    </div>
  );
}
