import { component$, Slot } from '@builder.io/qwik';
import TailwindIndicator from '~/components/tailwind.indicator';
import { cn } from "~/lib/utils"

//      <SiteHeader /> <SiteFooter />
export default component$(() => {
  return (
    <>
      <div class={cn(
            "min-h-screen bg-background font-sans antialiased",
            //fontSans.variable
          )}>
        <div class="flex-1">
          <Slot />
        </div>
      </div>
      <TailwindIndicator />
    </>
  );
});
