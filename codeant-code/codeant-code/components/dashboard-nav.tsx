'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FolderGit2, Code2, ShieldCheck, BookOpen, Settings, PhoneCall, LogOut } from 'lucide-react'

const navItems = [
  {
    title: "Repositories",
    icon: FolderGit2,
    href: "/dashboard",
  },
  {
    title: "AI Code Review",
    icon: Code2,
    href: "/dashboard/code-review",
  },
  {
    title: "Cloud Security",
    icon: ShieldCheck,
    href: "/dashboard/security",
  },
  {
    title: "How to Use",
    icon: BookOpen,
    href: "/dashboard/guide",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 py-2 overflow-y-auto">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            asChild
            className={cn(
              "w-full justify-start gap-3 h-11 font-normal hover:bg-gray-100/80",
              pathname === item.href && "bg-gray-100 text-blue-600 hover:bg-gray-100"
            )}
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              <span className="hidden lg:inline">{item.title}</span>
            </Link>
          </Button>
        ))}
      </div>
      <div className="p-2 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 font-normal text-gray-600 hover:text-gray-900"
        >
          <PhoneCall className="h-4 w-4" />
          <span className="hidden lg:inline">Support</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 font-normal text-gray-600 hover:text-gray-900"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden lg:inline">Logout</span>
        </Button>
      </div>
    </div>
  )
}

