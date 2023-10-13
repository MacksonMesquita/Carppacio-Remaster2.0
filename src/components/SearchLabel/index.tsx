export function SearchLabel() {
  return (
    <>
      <div className="relative pt-1 pr-16 justify-center">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border bg-whitemain px-4 py-2 pl-10 text-sm transition-all"
          placeholder="Pesquisar..."
        />
      </div>
    </>
  );
}
