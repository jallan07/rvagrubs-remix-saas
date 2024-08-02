import { Check, MoveRight, PhoneCall, Minus } from 'lucide-react';
import { Badge } from '#app/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#app/components/ui/card';
import { Button } from '#app/components/ui/button';

export const Pricing1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Badge>Pricing</Badge>
        <div className="flex flex-col gap-2">
          <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter md:text-5xl">
            Prices that make sense!
          </h2>
          <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 pt-20 text-left lg:grid-cols-3">
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Startup
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster than ever
                for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Sign up today <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md shadow-2xl">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Growth
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster than ever
                for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  Sign up today <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row items-center gap-4 font-normal">
                  Enterprise
                </span>
              </CardTitle>
              <CardDescription>
                Our goal is to streamline SMB trade, making it easier and faster than ever
                for everyone and everywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-start gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground"> / month</span>
                </p>
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="mt-2 h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <p>Fast and reliable</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ve made it fast and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Book a meeting <PhoneCall className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export const Pricing2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Badge>Pricing</Badge>
        <div className="flex flex-col gap-2">
          <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter md:text-5xl">
            Prices that make sense!
          </h2>
          <p className="max-w-xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Startup</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever
              for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Try it <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Growth</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever
              for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button className="mt-8 gap-4">
              Try it <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Enterprise</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster than ever
              for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Contact us <PhoneCall className="h-4 w-4" />
            </Button>
          </div>
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">SSO</div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">AI Assistant</div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Version Control
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">Members</div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">5 members</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">25 members</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-sm text-muted-foreground">100+ members</p>
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Multiplayer Mode
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">Orchestration</div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
