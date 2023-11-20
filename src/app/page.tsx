import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/input'
import { Mail, UploadCloud, User } from 'lucide-react'

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
        <form
          id="configuracoes"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* NOME SOBRENOME */}
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="fisrt-name" defaultValue="Gabriel" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl id="last-name" defaultValue="Soares" />
              </Input.InputRoot>
            </div>
          </div>
          {/* EMAIL */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Endereço de E-mail
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                defaultValue="soaresgabriel33@gmail.com"
                type="email"
              />
            </Input.InputRoot>
          </div>
          {/* FOTO */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="foto"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Sua foto</p>
              <span className="block text-sm font-normal text-zinc-500">
                Essa foto será usada em seu perfil
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <User className="h-8 w-8 text-violet-500" />
              </div>
              <label
                htmlFor="foto"
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-300"
              >
                <div className="border-6 rounded-full border-zinc-100 bg-zinc-200 p-2 duration-200 group-hover:border-violet-200 group-hover:bg-violet-500">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm font-semibold text-violet-700">
                    Clique para fazer upload{' '}
                    <span className="font-normal text-zinc-500">
                      ou arraste e solte
                    </span>
                  </p>
                  <p className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </label>
              <input type="file" className="sr-only" id="foto" />
            </div>
          </div>
          {/* REGRAS */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="regras"
              className="text-sm font-medium text-zinc-700"
            >
              Regras
            </label>
            <Input.InputRoot>
              <Input.InputControl id="regras" defaultValue="Juninho" />
            </Input.InputRoot>
          </div>
          {/* PAÍS */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="pais" className="text-sm font-medium text-zinc-700">
              País
            </label>
            <div></div>
          </div>
          {/* TIME ZONE */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="time-zone"
              className="text-sm font-medium text-zinc-700"
            >
              Time Zone
            </label>
            <div></div>
          </div>
          {/* BIO */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="bio"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Biografia</p>
              <span className="block text-sm font-normal text-zinc-500">
                Escreva uma pequena introdução
              </span>
            </label>
            <div></div>
          </div>
          {/* PORTIFÓLIO */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="projects"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Portifólio de Projetos</p>
              <span className="block text-sm font-normal text-zinc-500">
                Compartilhe alguns trechos do seu trabalho
              </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
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
        </form>
      </div>
    </>
  )
}
