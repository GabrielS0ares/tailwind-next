import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-700">Configurações</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Informações Pessoais
            </h2>
            <span className="text-sm text-zinc-500">
              Atualize sua foto e informações pessoais
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border-zinc-500 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm duration-200 hover:bg-zinc-100"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="configuracoes"
            >
              Salvar
            </button>
          </div>
        </div>
        <form id="configuracoes" className="mt-6 flex w-full flex-col "></form>
      </div>
    </>
  )
}
