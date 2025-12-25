"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
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
  { href: "/fun-at-work", label: "Fun At Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/certification", label: "Certification" },
  { href: "/mission-vision", label: "Mission & Vision" },
  { href: "/career", label: "Career" },
];

const serviceLinks = [
  {
    href: "/services/digital-marketing",
    label: "Digital Marketing",
    description: "Boost your online presence with our Digital Marketing services.",
    icon: ""
  },
  {
    href: "/services/website-design-development",
    label: "Website Design & Development",
    description: "Get stylish and functional websites through Website Designing & Development.",
    icon: ""
  },
  {
    href: "/services/graphic-design",
    label: "Graphic Design",
    description: "Transform concepts into eye-catching images with our proficiency in graphic design.",
    icon: ""
  },
  {
    href: "/services/logo-design",
    label: "Logo Design",
    description: "Make a lasting impression with a unique and memorable Logo Design.",
    icon: ""
  },
  {
    href: "/services/mobile-app-development",
    label: "Mobile App Development",
    description: "Innovative solutions for Mobile App Development tailored to your needs.",
    icon: ""
  },
  {
    href: "/services/e-commerce",
    label: "E-Commerce",
    description: "With our all-inclusive E-Commerce solutions, you may improve your online business.",
    icon: ""
  },
  {
    href: "/services/support",
    label: "Support",
    description: "Reliable and responsive Support to ensure your business runs smoothly.",
    icon: ""
  }
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
      isSticky ? "bg-[#1A1A1A] bg-opacity-90 backdrop-blur-sm shadow-lg h-20" : "bg-transparent h-[100px]"
    )}>
      <div className="container flex items-center justify-between h-full">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="OrbitDynamix Logo"
            width={500}
            height={500}
            priority
            className="w-[100px] lg:w-[120px] xl:w-[150px] xl:pt-[10px] h-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white font-urbanist font-medium text-base hover:bg-transparent hover:text-white/80 focus:bg-transparent focus:text-white/80 data-[state=open]:bg-transparent data-[state=open]:text-white/80">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="border-border bg-background">
                        {item.isMega ? (
                          <div className="p-4 w-[60rem] grid grid-cols-2 gap-4">
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
                          </div>
                        ) : (
                          <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] bg-background">
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
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1A1A] border-l border-border p-0 w-full sm:w-[350px]">
                <SheetHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
                  <SheetTitle>
                    <Image
                      src="/images/logo.png"
                      alt="OrbitDynamix Logo"
                      width={100}
                      height={100}
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) => item.children ? (
                      <AccordionItem value={item.label} key={item.label} className="border-b border-white/10">
                        <AccordionTrigger className="py-4 text-white hover:no-underline font-urbanist">{item.label}</AccordionTrigger>
                        <AccordionContent className="pl-4">
                          {item.children.map((child: any) => (
                            <Link key={child.label} href={child.href} className="block py-2 text-muted-foreground hover:text-white font-urbanist">
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
            'flex select-none items-center justify-between space-x-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10 text-white font-urbanist',
            className,
          )}
          {...props}
        >
          <div className="text-base font-urbanist font-medium leading-none">{title}</div>
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
            'flex select-none items-start space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10 text-white font-urbanist',
            className,
          )}
          {...props}
        >
          <div className="flex-shrink-0">
            <Image src={icon} alt={title || ""} width={50} height={50} className="w-12 h-12" />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <div className="text-base font-urbanist font-semibold leading-none">{title}</div>
              <ArrowRight className="h-4 w-4 text-white/70" />
            </div>
            <p className="line-clamp-2 text-sm font-urbanist leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItemWithImage.displayName = 'ListItemWithImage';