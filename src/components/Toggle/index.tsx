export function Toglle() {
  return (
    <label className="relative flex cursor-pointer items-center pr-12">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative flex w-11 h-6 bg-white peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-indigo-900 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-200"></div>
    </label>
  );
}
