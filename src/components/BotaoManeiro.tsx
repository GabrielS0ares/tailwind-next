'use client'

import { RotateCw } from 'lucide-react'
import { useState } from 'react'

export function BotaoManeiro() {
  const [loading, setLoading] = useState(false)

  async function ExecutaAlgo() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setLoading(false)
  }

  return (
    <section className="flex h-screen items-center justify-center bg-neutral-900">
      {/* Alterar disabled do botão muda o estilo dele com o enable e o disabled */}
      <button
        disabled={!!loading}
        className="mt-4 w-36 rounded-md bg-sky-600/80 px-4 py-2 font-medium text-white duration-200 enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-sky-800"
        onClick={() => ExecutaAlgo()}
      >
        {!loading ? (
          'Botão Maneiro'
        ) : (
          <div className="flex items-center gap-2">
            <p>Carregando</p>
            <div>
              <RotateCw size={20} className="animate-spin text-sky-300" />
            </div>
          </div>
        )}
      </button>
    </section>
  )
}
