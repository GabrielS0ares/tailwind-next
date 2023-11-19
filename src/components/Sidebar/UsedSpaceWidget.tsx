import { LifeBuoy, Cog } from 'lucide-react'
import { NavItem } from './NavItem'

export function UsedSpaceWidget() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1 text-sm/5">
          <span className="font-medium text-violet-700">Estaço Utilizado</span>
          <p className="text-violet-500">
            Seu time utilizou 80% do espaço disponível, precisa de mais espaço?
          </p>
          <div className="h-2 rounded-full bg-violet-200">
            <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
          </div>
          <div className="space-x-3 space-y-3">
            <button
              type="button"
              className="text-sm font-medium text-violet-500 duration-200 hover:text-violet-700"
            >
              Liberar
            </button>
            <button
              type="button"
              className="text-sm font-medium text-violet-700 duration-200 hover:text-violet-900"
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
