const GitHubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.01c-3.2.69-3.88-1.36-3.88-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.32H6V17.34H8.34ZM7.17 9.36C7.92 9.36 8.39 8.86 8.39 8.23C8.38 7.58 7.92 7.1 7.18 7.1C6.44 7.1 5.96 7.58 5.96 8.23C5.96 8.86 6.42 9.36 7.15 9.36H7.17ZM18 17.34V13.42C18 11.32 16.88 10.34 15.38 10.34C14.17 10.34 13.63 11.01 13.33 11.48V10.32H11V17.34H13.34V13.42C13.34 13.21 13.35 13 13.42 12.85C13.59 12.43 13.98 11.99 14.63 11.99C15.49 11.99 15.83 12.64 15.83 13.6V17.34H18Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75V16.25C2 19.43 4.57 22 7.75 22H16.25C19.43 22 22 19.43 22 16.25V7.75C22 4.57 19.43 2 16.25 2H7.75ZM7.75 3.8H16.25C18.43 3.8 20.2 5.57 20.2 7.75V16.25C20.2 18.43 18.43 20.2 16.25 20.2H7.75C5.57 20.2 3.8 18.43 3.8 16.25V7.75C3.8 5.57 5.57 3.8 7.75 3.8ZM17.2 6.2C16.54 6.2 16 6.74 16 7.4C16 8.06 16.54 8.6 17.2 8.6C17.86 8.6 18.4 8.06 18.4 7.4C18.4 6.74 17.86 6.2 17.2 6.2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 8.8C13.77 8.8 15.2 10.23 15.2 12C15.2 13.77 13.77 15.2 12 15.2C10.23 15.2 8.8 13.77 8.8 12C8.8 10.23 10.23 8.8 12 8.8Z" />
  </svg>
);

const socialLinks = [
  {
    icon: GitHubIcon,
    href: "https://github.com/mayanksingh446",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/mayank-singh-8839b9320",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Mayank Singh. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:-translate-y-1"
              >
                <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};