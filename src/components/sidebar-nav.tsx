import { component$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";
import { SidebarNavItem } from "~/types/nav"
import DocsSidebarNavItems from "~/components/docs-sidebar-nav-item"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export default component$(({items}: DocsSidebarNavProps) =>{
  const pathname = "/docs/";

  return items.length ? (
    <div class="w-full">
      {items.map((item, index) => (
        <div key={index} class={cn("pb-4")}>
          <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items}  pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
});