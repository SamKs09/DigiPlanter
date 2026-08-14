import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 backdrop-blur-sm bg-background/90 sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center">
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary-600 text-white"
          >
            <a href="#download">Download App</a>
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
            <Button className="w-full bg-primary hover:bg-primary-600 text-white">
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Logo: React.FC = () => (
  <a href="/" className="flex items-center">
    <div className="mr-2">
      <img
        src="/Icon.png"
        alt="DigiPlanter Logo"
        className="w-12 h-12 rounded-full"
      />
    </div>
    <span className="font-bold text-xl">DigiPlanter</span>
  </a>
);
const NavLinks: React.FC = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }, // Contact added
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks: React.FC<{
  setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ setIsMenuOpen }) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    // Contact added
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
