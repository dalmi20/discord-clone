import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({children}:{children :React.ReactNode}) => {
    return ( 
       <div className="h-full flex flex-row">
        <div className="hidden md:flex  h-full w-[72px] flex-col z-30  inset-y-0 ">
          <NavigationSidebar/>  
        </div>
        <main className="h-full w-full">
        {children}
        </main>
       </div>
     );
}
 
export default MainLayout;