//import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {

  // return (
  //   <HeroUINavbar className="navbar">
  //     <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
  //       {/* <NavbarBrand className="gap-3 max-w-fit">
  //         <Link
  //           className="flex justify-start items-center gap-1"
  //           color="foreground"
  //           href="/"
  //         >
  //           <Logo />
  //           <p className="font-bold text-inherit">ACME</p>
  //         </Link>
  //       </NavbarBrand> */}
  //       <div className="hidden lg:flex gap-4 justify-start ml-2">
  //         {siteConfig.navItems.map((item) => (
  //           <NavbarItem key={item.href}>
  //             <Link
  //               className={clsx(
  //                 linkStyles({ color: "foreground", size:"lg"}),
  //                 "data-[active=true]:text-primary data-[active=true]:font-bold data-[active=true]:underline"
  //               )}
  //               color="foreground"
  //               href={item.href}
                
  //             >
  //               {item.label}
  //             </Link>
  //           </NavbarItem>
  //         ))}
  //       </div>
        

  //     </NavbarContent>

  //     <NavbarContent
  //       className="hidden sm:flex basis-1/5 sm:basis-full"
  //       justify="end"
  //     >
  //       <NavbarItem className="hidden sm:flex gap-2">
  //         <Link isExternal href={siteConfig.links.github} title="GitHub">
  //           <GithubIcon className="text-default-500" />
  //         </Link>
          
  //       </NavbarItem>
  //     </NavbarContent>

  //     <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
  //       <Link isExternal href={siteConfig.links.github}>
  //         <GithubIcon className="text-default-500" />
  //       </Link>
        
  //       <NavbarMenuToggle />
  //     </NavbarContent>

      
  //   </HeroUINavbar>
  // );

  return(
  <div className="z-20">
    <nav className="flex-none w-screen h-auto z-20 bg-white shadow-xl shadow-orange-300/40 rounded-xl">
      <div className="flex-1 flex justify-center items-center mr-auto align-middle">
        <ul className="list-style-none sm: text-base md:text-xl lg:text-2xl font-medium sm:mb-2 md:mb-3 lg:mb-4">
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="/" data-twe-nav-link-ref>About</a></li>
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="/projects" data-twe-nav-link-ref>Projects</a></li>
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="/skills" data-twe-nav-link-ref>Skills</a></li>
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="/contact" data-twe-nav-link-ref>Contact</a></li>
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="/photos" data-twe-nav-link-ref>Photos</a></li>
          <li className="flex-1 m-4 lg:mb-0 lg:pe-2 inline-block text-center hover:bg-orange-500/10" data-twe-nav-item-ref> <a href="https://github.com/" target="_blank" data-twe-nav-link-ref>Github</a></li>
        </ul>
      </div>   
    </nav>
    </div>
  );
};
