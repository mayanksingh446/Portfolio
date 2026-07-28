import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact"},

];

// This array stores all the navigation links.
// Each object has two properties:
// href → where the link goes.
// label → the text displayed to the user.

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
      const handleScroll = ()=>{
        if(window.scrollY > 50){
          setIsScrolled(true)
        }else{
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll",handleScroll)

      return () => window.removeEventListener("scroll",handleScroll);
//       Without removing it:

// the browser would still try to call handleScroll
// memory could be wasted
// duplicate listeners could accumulate if the component mounts again

// So this line prevents memory leaks.
  },[]);

  return (
   <header
  className={`fixed top-0 left-0 right-0 px-6 md:px-10 z-50 transition-all duration-500 ${
    isScrolled ? "py-3 glass" : "py-5 glass"
  }`}
>
      {/* HTML <nav> tells the browser this section contains navigation links. */}
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PM<span>.</span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 flex items-center gap-1">
            {/* map() goes through every object inside the array and creates one <a> tag. */}
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" href="#contact">
            Contact Me
          </Button>
        </div>
        {/* Mobile Menu Button */}
        {/* prev = false
                !prev = true

                Next click:
                prev = true
                !prev = false

                Next click:
                prev = false
                !prev = true

                It keeps alternating automatically. */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
