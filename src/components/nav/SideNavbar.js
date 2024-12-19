import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./SideNavbar.css";
import { StarIcon, DocumentIcon, Mystery, Superstar, Celebrities, SpeedFan, Human, Speed } from "./icons";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const externalLinks = [
    { href: "https://incrediblefamous.com", label: "Incredible Famous", icon: <StarIcon />  },
    { href: "https://fantasticnews.net", label: "Fantastic News", icon: <DocumentIcon />  },
    { href: "https://mysteryarea.com", label: "Mystery Area", icon: <Mystery />  },
    { href: "https://superstarfandom.com", label: "Superstar Fan Club", icon: <Superstar />  },
    { href: "https://celebritieshub.net", label: "Celebrities Hub", icon: <Celebrities />  },
    { href: "https://speedfan.club", label: "Speed Fan Club", icon: <SpeedFan />  },
    { href: "https://humatl.com", label: "Humatl", icon: <Human />  },
    { href: "https://speed.dhpplant.com", label: "Racing Nation", icon: <Speed />  },
  ];

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav>
      {/* Main navigation links */}
      <a
        href="#works"
        onClick={() => setActiveNav("#works")}
        className={activeNav === "#works" ? "active" : ""}
      >
        <Typography>Privacy</Typography>
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Typography>Contact</Typography>
      </a>

      {/* "Our Platform" link that toggles dropdown menu */}
      <a
        href="#our-platform"
        onClick={(e) => {
          e.preventDefault();  // Prevent default link behavior
          toggleDropdown();  // Toggle dropdown visibility
        }}
        className={activeNav === "#our-platform" ? "active" : ""}
      >
        <Typography>Our Platform</Typography>
      </a>

      {/* Dropdown Menu (Mega Menu) */}
      {dropdownOpen && (
        <div className="mega-menu">
          <div className="dropdown-menu">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveNav(link.href)}
                className={activeNav === link.href ? "active" : ""}
              >
                {link.icon}  {/* Display icon here */}
                <Typography>{link.label}</Typography>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
