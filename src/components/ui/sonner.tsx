"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { X } from "lucide-react"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:relative",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton: 
            "group-[.toast]:opacity-70 group-[.toast]:hover:opacity-100",
        },
        style: {
          position: 'relative',
        }
      }}
      closeButton={true}
      icons={{
        success: <X className="h-4 w-4" />,
        error: <X className="h-4 w-4" />,
        warning: <X className="h-4 w-4" />,
        info: <X className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
