import { Link } from '@remix-run/react';
import { Logo } from '../logo';
import { buttonVariants } from '../ui/button';
import { cn } from '#app/utils/misc.js';
import { ROUTE_PATH as LOGIN_PATH } from '#app/routes/auth+/login';
import { Star } from 'lucide-react';
import { User } from '@prisma/client';

const home_navigation = (user: User) => {
  return (
    <div className="sticky top-0 z-50 mx-auto flex w-full max-w-screen-lg items-center justify-between p-6 py-3">
      <Link to="/" prefetch="intent" className="flex h-10 items-center gap-1">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dev-xo/remix-saas/tree/main/docs#welcome-to-%EF%B8%8F-remix-saas-documentation"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline',
            )}>
            Docs
          </a>
          <a
            href="https://github.com/dev-xo/remix-saas"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline',
            )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary/80"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="hidden select-none items-center gap-1 rounded-full bg-green-500/5 px-2 py-1 pr-2.5 text-xs font-medium tracking-tight text-green-600 ring-1 ring-inset ring-green-600/20 backdrop-blur-sm dark:bg-yellow-800/40 dark:text-yellow-100 dark:ring-yellow-200/50 md:flex">
              <Star
                className="h-3 w-3 text-green-600 dark:text-yellow-100"
                fill="currentColor"
              />
              Star Us on GitHub
            </span>
          </a>
        </div>
        <a
          href="https://twitter.com/DanielKanem"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center">
          <svg
            className="h-[18px] w-[18px] text-primary"
            strokeLinejoin="round"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <Link to={LOGIN_PATH} className={buttonVariants({ size: 'sm' })}>
          {user ? 'Dashboard' : 'Get Started'}
        </Link>
      </div>
    </div>
  );
};
