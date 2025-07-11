// import { AppSidebar } from "@/components/app-sidebar";
// import PatienForms from "@/components/forms/PatienForms";
// import { Sidebar } from "@/components/ui/sidebar";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex h-screen max-h-screen">
//       <section className="remove-scrollbar container my-auto">
//         <div className="sub-container max-w-[496px]">
//           <Image
//           src="/assets/icons/logo-full.svg"
//           height={1000}
//           width={1000}
//           alt="patient"
//           className="mb-12 h-10 w-fit"
//           />

//           {/* <PatienForms /> */}

//           <div className="text-14-regular mt-20 flex justify-between">
//             <p className="justify-items-end text-dark-600 xl:text-left ">
//               © 2025 CarePulse
//             </p>
//             <Link href="/?admin=true" className="text-green-500">
//               Admin
//             </Link>

//           </div>

//         </div>
//       </section>
//       <Image
//           src="/assets/images/onboarding-img.png"
//           height={1000}
//           width={1000}
//           alt="patient"
//           className="side-img max-w-[50%]"
//           />
         
//     </div>
//   );
// }
import React from 'react'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
export default page