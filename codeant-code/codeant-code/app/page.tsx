'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Key } from 'lucide-react'

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<'saas' | 'self-hosted'>('saas')
  const router = useRouter()

  const handleAuth = () => {
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      {/* Background Logo */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none select-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoFaded-5IBBgYeNvIU2ZVtAGfdGMXQVMk70Uj.png"
          alt="CodeAnt AI Logo"
          width={800}
          height={800}
          className="max-w-none"
          priority
        />
      </div>

      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Side - Stats */}
        <div className="hidden lg:flex flex-col gap-6 flex-1 w-full lg:w-auto">
          <Card className="p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ulIazpi840u8jReEZnNtS6c6jO6SRg.svg"
                alt="CodeAnt AI"
                width={24}
                height={24}
                className="h-5 w-5"
              />
              <span className="text-[15px] font-medium">AI to Detect & Autofix Bad Code</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-semibold mb-1">30+</div>
                <div className="text-sm text-gray-600">Language Support</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-1">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-1">100K+</div>
                <div className="text-sm text-gray-600">Hours Saved</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-[#9D90FA]/20 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-[#9D90FA] opacity-75" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-600" />
                  14% This week
                </div>
                <div className="text-sm text-gray-600 mt-0.5">Issues Fixed</div>
                <div className="text-2xl font-semibold mt-0.5">500K+</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side - Auth */}
        <Card className="w-full max-w-md p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ulIazpi840u8jReEZnNtS6c6jO6SRg.svg"
              alt="CodeAnt AI"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-[15px] font-medium">CodeAnt AI</span>
          </div>
          
          <h1 className="text-xl sm:text-[22px] font-semibold mb-6 sm:mb-8">Welcome to CodeAnt AI</h1>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-50 rounded-lg">
              <Button 
                variant={authMode === 'saas' ? 'default' : 'ghost'}
                className={`w-full text-[13px] font-medium h-10 sm:h-9 rounded-md ${
                  authMode === 'saas' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setAuthMode('saas')}
              >
                SAAS
              </Button>
              <Button 
                variant={authMode === 'self-hosted' ? 'default' : 'ghost'}
                className={`w-full text-[13px] font-medium h-10 sm:h-9 rounded-md ${
                  authMode === 'self-hosted' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setAuthMode('self-hosted')}
              >
                Self Hosted
              </Button>
            </div>

            <div className="grid gap-2.5 mt-1">
              {authMode === 'saas' ? (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/github-mvNJfBuUYTvZELzAkmgkFApo14EHBe.svg" 
                      alt="GitHub" 
                      width={16} 
                      height={16} 
                    />
                    Sign in with Github
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bitbucket-PCCxFEcDruffUb6isge7yWfoptC8rs.svg" 
                      alt="Bitbucket" 
                      width={16} 
                      height={16} 
                    />
                    Sign in with Bitbucket
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure-devops-PGzXOI7UrEatBjC3MxoJWtFbsuOyTO.svg" 
                      alt="Azure DevOps" 
                      width={16} 
                      height={16} 
                    />
                    Sign in with Azure Devops
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gitlab-rAXq8HgSrkm9ahkXleZXHGBoquHBNq.svg" 
                      alt="GitLab" 
                      width={16} 
                      height={16} 
                    />
                    Sign in with GitLab
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gitlab-rAXq8HgSrkm9ahkXleZXHGBoquHBNq.svg" 
                      alt="GitLab" 
                      width={16} 
                      height={16} 
                    />
                    Sign in with GitLab
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-11 sm:h-10 font-normal text-[14px] border-gray-200"
                    onClick={handleAuth}
                  >
                    <Key className="w-4 h-4" />
                    Sign in with SSO
                  </Button>
                </>
              )}
            </div>

            <p className="text-[13px] text-center text-gray-600 mt-2">
              By signing up you agree to the{' '}
              <Link href="/privacy" className="text-gray-900 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Card>
      </div>
    </main>
  )
}

