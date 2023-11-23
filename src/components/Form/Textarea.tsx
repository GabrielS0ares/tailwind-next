import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function Textarea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
      {...props}
    />
  )
}
