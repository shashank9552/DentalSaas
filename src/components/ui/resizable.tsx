"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup(
  props: React.ComponentProps<typeof PanelGroup> & {
    className?: string
  }
) {
  const { className, ...rest } = props

  return (
    <PanelGroup
      className={cn(
        "flex h-full w-full data-[direction=vertical]:flex-col",
        className
      )}
      {...rest}
    />
  )
}

function ResizablePanel(
  props: React.ComponentProps<typeof Panel>
) {
  return <Panel {...props} />
}

function ResizableHandle(
  props: React.ComponentProps<typeof PanelResizeHandle> & {
    withHandle?: boolean
    className?: string
  }
) {
  const { withHandle, className, ...rest } = props

  return (
    <PanelResizeHandle
      className={cn("relative flex items-center justify-center", className)}
      {...rest}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }