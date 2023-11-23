'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const [parent] = useAutoAnimate()

  const { files } = useFileInput()

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <FileItem
            name={file.name}
            size={file.size}
            key={file.name}
            state="error"
          />
        )
      })}
    </div>
  )
}
