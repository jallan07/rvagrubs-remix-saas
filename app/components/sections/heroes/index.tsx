import { MoveRight, PhoneCall } from 'lucide-react';
import { Button } from '#app/components/ui/button';
import { Badge } from '#app/components/ui/badge';

export const Hero1 = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Read our launch article <MoveRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="max-w-2xl text-center text-6xl font-bold tracking-tighter text-primary md:text-7xl">
            This is the start of something new
          </h1>
          <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
            Managing a small business today is already tough. Avoid further complications
            by ditching outdated, tedious trade methods. Our goal is to streamline SMB
            trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="h-4 w-4" />
          </Button>
          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const Hero2 = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
        <div>
          <Badge variant="outline">We&apos;re live!</Badge>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-primary max-w-2xl text-center text-6xl font-bold tracking-tighter text-primary md:text-7xl">
            This is the start of something new
          </h1>
          <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
            Managing a small business today is already tough. Avoid further complications
            by ditching outdated, tedious trade methods. Our goal is to streamline SMB
            trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="h-4 w-4" />
          </Button>
          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const Hero3 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold leading-tight text-primary md:text-7xl lg:leading-tight">
              This is the start of something!
            </h1>
            <p className="max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal is to
              streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="aspect-square rounded-md bg-muted"></div>
      </div>
    </div>
  </div>
);

export const Hero4 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold leading-tight text-primary md:text-7xl lg:leading-tight">
              This is the start of something!
            </h1>
            <p className="max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal is to
              streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-square rounded-md bg-muted"></div>
          <div className="row-span-2 rounded-md bg-muted"></div>
          <div className="aspect-square rounded-md bg-muted"></div>
        </div>
      </div>
    </div>
  </div>
);
