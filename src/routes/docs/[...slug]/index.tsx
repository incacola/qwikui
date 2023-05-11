import { component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils"
import Separator from "~/components/seperator"

export default component$(() =>{
  const doc = {}

  return (
    <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div class="mx-auto w-full min-w-0">
        <div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div class="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>

          <div class="font-medium text-foreground">Doc Title</div>
        </div>
        <div class="space-y-2">
          <h1 class={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            Document Title
          </h1>
            <p class="text-lg text-muted-foreground">
              Doc description
            </p>
        </div>
        <div class="my-4 md:my-6">
          <Separator  />
        </div>
        
        Docs content
      </div>
    </main>
  )
})