export function InfoPopover() {
  return (
    <>
      <p className="flex items-center text-sm text-gray-500 pl-4 pt-3">
        Qual o objetivo desta página?{" "}
        <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
          <svg className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </p>
      <div
        data-popover
        id="popover-description"
        role="tooltip"
        className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg w-72 "
      >
        <div className="p-3 space-y-2">
          <h1 className="font-semibold text-darkmain">Avisos e explicações sobre a página</h1>
          <p>
            O principal objetivo deste site é otimizar e atualizar um processo de aprendizagem inicial. Tudo o que você verá aqui foi melhorado com boas práticas de conduta e programação.
            <br />
            Tudo o que está presente no mesmo, é de cunho fictício e não apresenta relações externas.
          </p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
}
