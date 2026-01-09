import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Github, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto max-w-6xl py-8">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/nextjs-logo.png" alt="Next.js Logo" />
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Next.js Boilerplate</h1>
                <p className="text-muted-foreground">
                  Production Ready Template
                </p>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Star on GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Welcome Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl h-full">
              <CardHeader className="text-center space-y-2">
                <Badge variant="secondary" className="mx-auto w-fit">
                  Next.js Boilerplate
                </Badge>
                <CardTitle className="text-3xl font-bold mt-4">
                  Welcome
                </CardTitle>
                <CardDescription className="text-lg">
                  A production-ready boilerplate with TypeScript, ESLint,
                  Prettier, Husky, and shadcn/ui
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This starter template includes everything you need to build
                  scalable Next.js application.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <Label>Project Name</Label>
                    <Input placeholder="Enter project name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Framework</Label>
                    <Input placeholder="Next.js 16" readOnly />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Describe your project..." rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="https://nextjs.org/docs" target="_blank">
                    Get Started
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="https://github.com" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>TypeScript Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-purple-100 p-1 dark:bg-purple-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>shadcn/ui Components</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-yellow-100 p-1 dark:bg-yellow-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Husky Git Hooks</span>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Build Status</span>
                    <Badge variant="default">Passing</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tests</span>
                    <Badge variant="secondary">12/12 Passed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Commit</span>
                    <Badge variant="outline">Just now</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using Next.js, TypeScript, and shadcn/ui</p>
        </footer>
      </div>
    </div>
  );
}
