'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControllProps = ComponentProps<'input'>

export function Controll({ multiple = false, ...props }: ControllProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelect(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      multiple={multiple}
      onChange={handleFilesSelect}
    />
  )
}
