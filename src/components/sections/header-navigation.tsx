"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';


const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/career", label: "Career" },
];

const serviceLinks = [
  {
    href: "/services/digital-marketing",
    label: "Digital Marketing",
    description: "Boost your online presence with our Digital Marketing services.",
  },
  {
    href: "/services/website-design-development",
    label: "Website Design & Development",
    description: "Get stylish and functional websites through Website Designing & Development.",
  },
  {
    href: "/services/graphic-design",
    label: "Graphic Design",
    description: "Transform concepts into eye-catching images with our proficiency in graphic design.",
  },
  {
    href: "/services/logo-design",
    label: "Logo Design",
    description: "Make a lasting impression with a unique and memorable Logo Design.",
  },
  {
    href: "/services/mobile-app-development",
    label: "Mobile App Development",
    description: "Innovative solutions for Mobile App Development tailored to your needs.",
  },
  {
    href: "/services/e-commerce",
    label: "E-Commerce",
    description: "With our all-inclusive E-Commerce solutions, you may improve your online business.",
  },
  {
    href: "/services/logo-design",
    label: "Support",
    description: "Make a lasting impression with a unique and memorable Logo Design.",
  },

];

const navItems = [

  { href: "#", label: "Company", children: companyLinks },
  { href: "#", label: "Services", children: serviceLinks, isMega: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },

  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function HeaderNavigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isSticky ? "bg-[#000000] bg-opacity-90 backdrop-blur-md shadow-lg h-20" : "bg-transparent h-[100px]"
    )}>
      <div className="container flex items-center justify-between h-full">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="w-[150px] lg:w-[150px] xl:w-[200px] h-auto"
            style={{ color: 'transparent' }}
            srcSet="/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Flogo.png&w=1080&q=75 2x"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
          <NavigationMenu
            viewport={false}
            className="group/navigation-menu relative flex max-w-max flex-none items-center justify-center"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent text-white font-urbanist font-medium text-base hover:!bg-transparent hover:text-white hover:underline underline-offset-4 focus:!bg-transparent focus:text-white data-[state=open]:!bg-transparent data-[state=open]:text-white data-[state=open]:hover:!bg-transparent">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2 !p-0 !bg-[rgba(255,255,255,0.2)] !backdrop-blur-xl backdrop-saturate-150 !border !border-border !rounded-3xl shadow-lg md:left-0 md:top-full">
                  <ul className="grid w-[150px] gap-6 p-4 md:w-[170px]">
                    {companyLinks.map((child) => (
                      <ListItem key={child.label} href={child.href} title={child.label} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu
            viewport={true}
            viewportClassName={cn(
              "!bg-[rgba(255,255,255,0.2)] !backdrop-blur-xl backdrop-saturate-150 !border !border-border !rounded-3xl shadow-lg transition-all duration-300",
              isSticky ? "mt-[80px]" : "mt-[100px]"
            )}
            className="group/navigation-menu relative flex max-w-max flex-none items-center justify-center"
          >
            <NavigationMenuList>
              {navItems
                .filter((item) => item.label !== 'Company')
                .map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="!bg-transparent text-white font-urbanist font-medium text-base hover:!bg-transparent hover:text-white hover:underline underline-offset-4 focus:!bg-transparent focus:text-white data-[state=open]:!bg-transparent data-[state=open]:text-white data-[state=open]:hover:!bg-transparent">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!bg-transparent !border-none !shadow-none !backdrop-blur-none">
                          {item.isMega ? (
                            <ul className="p-4 w-[40rem] grid grid-cols-2 gap-8">
                              {item.children.map((child: any) => (
                                <ListItemWithImage
                                  key={child.label}
                                  href={child.href}
                                  title={child.label}
                                  icon={child.icon}
                                >
                                  {child.description}
                                </ListItemWithImage>
                              ))}
                            </ul>
                          ) : (
                            <ul className="grid w-[150px] gap-6 p-4 md:w-[170px]">
                              {item.children.map((child: any) => (
                                <ListItem key={child.label} href={child.href} title={child.label} />
                              ))}
                            </ul>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white font-urbanist font-medium text-base hover:bg-transparent hover:text-white/80 focus:bg-transparent focus:text-white/80")}>
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button variant="outline" className="hidden lg:inline-flex bg-transparent text-white border-white hover:bg-white hover:text-black rounded-lg px-6 py-2 transition-colors font-urbanist font-semibold">
              BOOK A CALL
            </Button>
          </Link>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1A1A] border-l border-border p-0 w-full sm:w-[350px]">
                <SheetHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
                  <SheetTitle>
                    <Image
                      src="/images/logo.png"
                      alt="OrbitDynamix Logo"
                      width={150}
                      height={100}
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) => item.children ? (
                      <AccordionItem value={item.label} key={item.label} className="border-b border-white/10">
                        <AccordionTrigger className="py-4 text-white hover:no-underline font-urbanist text-lg">{item.label}</AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {item.children.map((child: any) => (
                            <Link key={child.label} href={child.href} className="block py-2 text-muted-foreground hover:text-white font-urbanist text-base">
                              {child.label}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link key={item.label} href={item.href} className="block py-4 text-white border-b border-white/10 font-urbanist text-lg">
                        {item.label}
                      </Link>
                    ))}
                  </Accordion>
                </div>
                <div className='p-4 border-t border-border'>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-black rounded-lg px-6 py-2 transition-colors font-urbanist font-semibold">
                      BOOK A CALL
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            'flex select-none items-center justify-between rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10 text-white font-urbanist',
            className,
          )}
          {...props}
        >
          <div className="text-base font-urbanist font-medium leading-none">
            {title}
          </div>

          <ArrowRight className="h-4 w-4 text-white/70" />
        </a>

      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const ListItemWithImage = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: string, children: React.ReactNode }
>(({ className, title, href, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            'flex select-none items-start space-x-4 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10 text-white font-urbanist',
            className,
          )}
          {...props}
        >
          {icon && (
            <div className="flex-shrink-0">
              <Image src={icon} alt={title || ""} width={50} height={50} className="w-12 h-12" />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex flex-col justify-between items-left mb-1 gap-2">
              <div className="text-base font-urbanist font-semibold leading-none">{title}</div>
              <p className="line-clamp-2 text-sm font-urbanist leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-white/70" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItemWithImage.displayName = 'ListItemWithImage';