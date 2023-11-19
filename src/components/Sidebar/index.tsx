import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  LifeBuoy,
  Search,
  SquareStack,
  User,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import Home from '@/app/page'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projetos" icon={SquareStack} />
        <NavItem title="Tarefas" icon={CheckSquare} />
        <NavItem title="Relatórios" icon={Flag} />
        <NavItem title="Usuários" icon={User} />
      </nav>
      <UsedSpaceWidget />
    </aside>
  )
}
