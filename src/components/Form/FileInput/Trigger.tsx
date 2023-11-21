import { UploadCloud } from 'lucide-react'

export function Trigger() {
  return (
    <label
      htmlFor="foto"
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-300 hover:bg-violet-25"
    >
      <div className="rounded-full border-6 border-zinc-100 bg-zinc-200 p-2 duration-200 group-hover:border-violet-200 group-hover:bg-violet-500">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-white" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-violet-700">
          Clique para fazer upload{' '}
          <span className="font-normal text-zinc-500">ou arraste e solte</span>
        </p>
        <p className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
    </label>
  )
}
