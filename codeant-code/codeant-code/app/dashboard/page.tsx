import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { RepositoryList } from "@/components/repository-list"
import { DashboardNav } from "@/components/dashboard-nav"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Dashboard - CodeAnt AI",
  description: "Manage your repositories and code review settings.",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 border-b lg:border-r bg-white">
        <Link href="/" className="flex items-center gap-2 p-4 border-b hover:bg-gray-50 transition-colors">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ulIazpi840u8jReEZnNtS6c6jO6SRg.svg"
            alt="CodeAnt AI"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg">CodeAnt AI</span>
        </Link>
        <DashboardNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white overflow-x-hidden">
        <div className="border-b">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
            <div>
              <h1 className="text-xl font-semibold">Repositories</h1>
              <p className="text-sm text-gray-500">33 total repositories</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="ghost" size="sm" className="text-blue-600 w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
                Refresh All
              </Button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                Add Repository
              </Button>
            </div>
          </div>
          <div className="px-4 pb-4 w-full">
            <Input
              placeholder="Search Repositories"
              className="w-full sm:max-w-sm"
            />
          </div>
        </div>
        <div className="p-4">
          <RepositoryList />
        </div>
      </div>
    </div>
  )
}

