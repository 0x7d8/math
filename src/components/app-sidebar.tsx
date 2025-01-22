import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HomeIcon, TriangleIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function AppSidebar() {
  const location = useLocation()

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Link to={'/'} className={'flex flex-row h-full w-fit items-center'}>
            <img src={'https://cdn.rjns.dev/profile/circle.png'} alt={'0x7d8'} className={'h-12 w-12'} />

            <div className={'flex flex-col ml-2'}>
              <h1 className={'text-xl font-semibold'}>RJNS Math</h1>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <Collapsible defaultOpen className={'group/collapsible-information'}>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Information
                  <ChevronDown className={'ml-auto transition-transform group-data-[state=open]/collapsible-information:rotate-180'} />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={'space-y-1'}>
                      <SidebarMenuButton asChild isActive={location.pathname === '/'}>
                        <Link to={'/'}>
                          <HomeIcon className={'mr-2'} />
                          Home
                        </Link>
                      </SidebarMenuButton>
                      <SidebarMenuButton asChild isActive={location.pathname === '/triangle'}>
                        <Link to={'/triangle'}>
                          <TriangleIcon className={'mr-2'} />
                          Triangle
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
