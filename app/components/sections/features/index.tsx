import { Badge } from '#app/components/ui/badge';
import { Check, User } from 'lucide-react';

export const Feature1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="container grid grid-cols-1 items-center gap-8 rounded-lg border py-8 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">Platform</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                Something new!
              </h2>
              <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-square rounded-md bg-muted"></div>
      </div>
    </div>
  </div>
);

export const Feature2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-start gap-4 py-20 lg:py-40">
        <div>
          <Badge>Platform</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl">
            Something new!
          </h2>
          <p className="max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-xl">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="flex w-full flex-col gap-10 pt-12">
          <div className="grid grid-cols-2 items-start gap-10 lg:grid-cols-3">
            <div className="flex w-full flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Feature3 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
        <div className="aspect-video h-full w-full flex-1 rounded-md bg-muted"></div>
        <div className="flex flex-1 flex-col gap-4 pl-0 lg:pl-20">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl">
              This is the start of something new
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal is to
              streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Feature4 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl">
              This is the start of something new
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal is to
              streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
        <div className="aspect-video h-full w-full flex-1 rounded-md bg-muted"></div>
      </div>
    </div>
  </div>
);

export const Feature5 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
              Something new!
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mb-2 aspect-video rounded-md bg-muted"></div>
            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
            <p className="text-base text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Feature6 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
              Something new!
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>
          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Feature7 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
              Something new!
            </h2>
            <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex aspect-square h-full w-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:row-span-2">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2">
            <User className="h-8 w-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="max-w-xs text-base text-muted-foreground">
                Our goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
