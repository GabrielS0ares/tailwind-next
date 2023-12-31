import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/gabrielS0ares.png"
        width={50}
        height={50}
        alt="Imagem de perfil do usuário"
        className="rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gabriel Soares
        </span>
        <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
          soaresgabriel33@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut />
      </Button>
    </div>
  )
}
