import { component$, Slot } from '@builder.io/qwik';

import TailwindIndicator from '~/components/tailwind.indicator';
import { cn } from "~/lib/utils"
import SiteHeader from '~/components/site-header';

//<SiteFooter />
export default component$(() => {
  return (
    <>
      <div class={cn(
            "min-h-screen bg-background font-sans antialiased",
            
          )}>
        <SiteHeader />            
        <div class="flex-1">
          <Slot />
        </div>
      </div>
      <TailwindIndicator />
    </>
  );
});
