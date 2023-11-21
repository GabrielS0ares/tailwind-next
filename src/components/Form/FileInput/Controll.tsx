import { ComponentProps } from 'react'

export type ControllProps = ComponentProps<'input'>

export function Controll(props: ControllProps) {
  return <input type="file" className="sr-only" id="foto" {...props} />
}
