import { component$ } from "@builder.io/qwik";

import MainNav from "~/components/main-nav";

export default component$(() =>{
  return (
    <header class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div class="container flex h-14 items-center">
        <MainNav />
        <div>Header content</div>
      </div>
    </header>
  )
})