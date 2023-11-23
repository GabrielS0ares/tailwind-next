import { LifeBuoy, Cog } from 'lucide-react'
import { NavItem } from './NavItem'

export function UsedSpaceWidget() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
        <div className="space-y-1 text-sm/5">
          <span className="font-medium text-violet-700 dark:text-zinc-100">
            Estaço Utilizado
          </span>
          <p className="text-violet-500 dark:text-zinc-400">
            Seu time utilizou 80% do espaço disponível, precisa de mais espaço?
          </p>
          <div className="h-2 rounded-full bg-violet-200 dark:bg-zinc-600">
            <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"></div>
          </div>
          <div className="space-x-3 space-y-3">
            <button
              type="button"
              className="text-sm font-medium text-violet-500 duration-200 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-100"
            >
              Liberar
            </button>
            <button
              type="button"
              className="text-sm font-medium text-violet-700 duration-200 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Upgrade Plano
            </button>
          </div>
        </div>
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Suporte" icon={LifeBuoy} />
        <NavItem title="Configurações" icon={Cog} />
      </nav>
    </div>
  )
}
