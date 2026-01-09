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

export default function Home() {
  // Intentional unused variable to trigger ESLint error
  // const unusedVariable = "this variable is not used";

  // Intentional formatting issue to trigger Prettier
  const someValue = 42;
  console.log(someValue); // Extra spaces to trigger Prettier

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-lg mx-auto shadow-xl">
        <CardHeader className="text-center space-y-2">
          <Badge variant="secondary" className="mx-auto w-fit">
            Next.js Boilerplate
          </Badge>
          <CardTitle className="text-3xl font-bold mt-4">Welcome</CardTitle>
          <CardDescription className="text-lg">
            A production-ready boilerplate with TypeScript, ESLint, Prettier,
            Husky, and shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            This starter template includes everything you need to build scalable
            Next.js applications.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="https://nextjs.org/docs" target="_blank">
              Get Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com" target="_blank">
              GitHub dsdfdsfsd
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Another intentional unused variable
// const anotherUnusedVar = "also not used";
