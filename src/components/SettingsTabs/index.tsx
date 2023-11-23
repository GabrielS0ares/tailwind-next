'use client'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="tab1"
              title="Meus Detalhes"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Perfil"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Senha"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Time"
              isSelected={currentTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Planos"
              isSelected={currentTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Cobrança"
              isSelected={currentTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="E-mail"
              isSelected={currentTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notificações"
              isSelected={currentTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrações"
              isSelected={currentTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currentTab === 'tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
