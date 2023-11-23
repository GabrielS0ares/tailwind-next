import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

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
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button variant="primary" type="submit" form="configuracoes">
              Salvar
            </Button>
          </div>
        </div>
        <form
          id="configuracoes"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* NOME SOBRENOME */}
          <div className="grid grid-cols-form gap-3">
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
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="foto"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Sua foto</p>
              <span className="block text-sm font-normal text-zinc-500">
                Essa foto será usada em seu perfil
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Controll />
            </FileInput.Root>
          </div>
          {/* REGRAS */}
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="pais" className="text-sm font-medium text-zinc-700">
              País
            </label>
            <Select placeholder="Selecione o seu Páis...">
              <SelectItem value="br" text="Brasil" />
            </Select>
          </div>
          {/* TIME ZONE */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="time-zone"
              className="text-sm font-medium text-zinc-700"
            >
              Time Zone
            </label>
            <Select placeholder="Selecione o seu TimeZone...">
              <SelectItem
                value="pacific"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem
                value="sao-paulo"
                text="America São Paulo (UTC-03:00)"
              />
            </Select>
          </div>
          {/* BIO */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Biografia</p>
              <span className="block text-sm font-normal text-zinc-500">
                Escreva uma pequena introdução
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="italic" text="Italic Text" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List />
                  </Button>
                </div>
              </div>
              <Textarea id="bio" defaultValue="Descreva sua história" />
            </div>
          </div>
          {/* PORTIFÓLIO */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="space-y-0.5 text-sm font-medium text-zinc-700"
            >
              <p>Portifólio de Projetos</p>
              <span className="block text-sm font-normal text-zinc-500">
                Compartilhe alguns trechos do seu trabalho
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Controll multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button variant="primary" type="submit" form="configuracoes">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
