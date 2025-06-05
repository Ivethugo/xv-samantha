import { useState, useEffect, useRef } from "react";
import { menu } from "../../services/menu/menu";
import gsap from "gsap";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    if (navRef.current) {
      const menuItems = Array.from(navRef.current.children);
      gsap.fromTo(
        menuItems,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (open && navRef.current) {
      gsap.fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      const menuItems = Array.from(navRef.current.children);
      gsap.fromTo(
        menuItems,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [open]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function hamburguerIcon() {
    return (
      <svg
        className="w-6 h-6 text-base-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );
  }

  function closeIcon() {
    return (
      <svg
        className="w-6 h-6 text-base-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }

  return (
    <section
      id="navbar-section"
      className="fixed top-0 left-0 z-50 w-full h-19 py-2 px-4 sm:px-18 flex flex-row justify-between items-center bg-white shadow-md"
    >
      <h1 ref={titleRef} className="firstName-style">
        {import.meta.env.VITE_FIRST_NAME}
      </h1>
      <button
        ref={buttonRef}
        className="xl:hidden flex flex-col justify-center items-center cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? closeIcon() : hamburguerIcon()}
      </button>
      <nav
        ref={navRef}
        className={`${
          open
            ? "absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 shadow-md z-50 xl:static xl:flex xl:flex-row xl:gap-6"
            : "hidden xl:flex xl:flex-row xl:gap-6"
        }`}
      >
        {menu.map((item, idx) => (
          <span
            key={idx}
            className="text-base-100 font-medium font-cinzel py-2 xl:py-0 hover:text-gold hover:underline hover:underline-offset-8 active:text-gold transition-colors cursor-pointer"
            onClick={() => {
              setOpen(false);
              document.getElementById(item.section)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </section>
  );
}
