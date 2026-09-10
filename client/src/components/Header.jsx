import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ArrowUpRight,
  Home,
  Building2,
  Map,
  Sparkles,
  KeyRound,
  BriefcaseBusiness,
  User,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

const THEME_STORAGE_KEY = "theme";

const getPreferredDark = () => {
  if (typeof document === "undefined") return false;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;

  return (
    document.documentElement.classList.contains("dark") ||
    document.documentElement.classList.contains("dark-mode") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const applyDocumentTheme = (isDark) => {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("dark-mode", isDark);
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
};

export default function Header() {
  const [isDark, setIsDark] = useState(getPreferredDark);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Change this to true when your authentication is connected
  const isLoggedIn = false;

  useEffect(() => {
    applyDocumentTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const menus = {
    Buy: [
      {
        title: "Residential",
        description: "Apartments, flats & independent homes",
        icon: Home,
        href: "/buy/residential",
      },
      {
        title: "Commercial",
        description: "Offices, shops & commercial spaces",
        icon: BriefcaseBusiness,
        href: "/buy/commercial",
      },
      {
        title: "Plots",
        description: "Residential & commercial plots",
        icon: Map,
        href: "/buy/plots",
      },
      {
        title: "New Projects",
        description: "Explore newly launched projects",
        icon: Sparkles,
        href: "/buy/new-projects",
      },
      {
        title: "Luxury Homes",
        description: "Premium properties & villas",
        icon: Building2,
        href: "/buy/luxury",
      },
      {
        title: "More",
        description: "Explore all properties",
        icon: ArrowUpRight,
        href: "/buy",
      },
    ],

    Rent: [
      {
        title: "Residential",
        description: "Flats, apartments & homes for rent",
        icon: Home,
        href: "/rent/residential",
      },
      {
        title: "Commercial",
        description: "Office & retail spaces for rent",
        icon: BriefcaseBusiness,
        href: "/rent/commercial",
      },
      {
        title: "PG & Co-living",
        description: "Affordable living spaces",
        icon: KeyRound,
        href: "/rent/pg",
      },
      {
        title: "Luxury Rentals",
        description: "Premium homes for rent",
        icon: Sparkles,
        href: "/rent/luxury",
      },
    ],

    Sell: [
      {
        title: "Post Property",
        description: "List your property on DealHotaAisi",
        icon: Home,
        href: "/sell/post-property",
      },
      {
        title: "Sell Residential",
        description: "Sell your home or apartment",
        icon: Building2,
        href: "/sell/residential",
      },
      {
        title: "Sell Commercial",
        description: "Sell your commercial property",
        icon: BriefcaseBusiness,
        href: "/sell/commercial",
      },
      {
        title: "Sell Plot",
        description: "List your residential or commercial plot",
        icon: Map,
        href: "/sell/plot",
      },
    ],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90">

      {/* ================= HEADER ================= */}

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}

        <a
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white transition duration-300 group-hover:scale-105 group-hover:rotate-2 dark:bg-white dark:text-black">
            <Building2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            DealHotaAisi
          </span>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <nav className="hidden items-center gap-1 md:flex">

          {Object.keys(menus).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >

              <button
                className={`group flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeMenu === menu
                    ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                {menu}

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeMenu === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ================= MEGA MENU ================= */}

              {activeMenu === menu && (
                <div
                  className="absolute left-1/2 top-full w-162.5 -translate-x-1/2 pt-3"
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu(null)}
                >

                  <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl duration-200 dark:border-gray-800 dark:bg-gray-900">

                    <div className="mb-3 px-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Explore {menu}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">

                      {menus[menu].map((item) => {
                        const Icon = item.icon;

                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group/card flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >

                            {/* Icon */}

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all duration-300 group-hover/card:scale-105 group-hover/card:bg-black group-hover/card:text-white dark:bg-gray-800 dark:text-gray-300 dark:group-hover/card:bg-white dark:group-hover/card:text-black">

                              <Icon className="h-5 w-5 transition-transform duration-300 group-hover/card:scale-110" />

                            </div>

                            {/* Text */}

                            <div className="min-w-0 flex-1">

                              <div className="flex items-center gap-1">

                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                  {item.title}
                                </h3>

                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:opacity-100" />

                              </div>

                              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>

                            </div>

                          </a>
                        );
                      })}

                    </div>

                    {/* Bottom CTA */}

                    <div className="mt-3 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-800/70">

                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Can't find what you're looking for?
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Explore all {menu.toLowerCase()} options
                        </p>
                      </div>

                      <a
                        href={`/${menu.toLowerCase()}`}
                        className="flex items-center gap-1 text-sm font-semibold text-black dark:text-white"
                      >
                        View all
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                    </div>

                  </div>

                </div>
              )}

            </div>
          ))}

          {/* Projects */}

          <a
            href="/projects"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Projects
          </a>

        </nav>

        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden items-center gap-2 md:flex">

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          {/* ================= AUTH ================= */}

          {!isLoggedIn ? (
            <>
              <a
                href="/login"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Login
              </a>

              <a
                href="/signup"
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Sign Up
              </a>
            </>
          ) : (

            /* ================= PROFILE ================= */

            <div className="relative">

              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 dark:bg-gray-700 dark:text-white">
                  KS
                </div>

                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Karan
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">

                  <a
                    href="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </a>

                  <a
                    href="/my-properties"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Building2 className="h-4 w-4" />
                    My Properties
                  </a>

                  <a
                    href="/favorites"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Heart className="h-4 w-4" />
                    Favorites
                  </a>

                  <a
                    href="/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>

                  <div className="my-2 border-t border-gray-200 dark:border-gray-700" />

                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

        {/* ================= MOBILE ================= */}

        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="space-y-1">

            {Object.keys(menus).map((menu) => (
              <div key={menu}>

                <button
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === menu ? null : menu
                    )
                  }
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  {menu}

                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeMenu === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === menu && (
                  <div className="ml-3 space-y-1 border-l border-gray-200 pl-3 dark:border-gray-700">

                    {menus[menu].map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >

                          <Icon className="h-4 w-4 text-gray-500" />

                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              {item.title}
                            </p>

                            <p className="text-xs text-gray-500">
                              {item.description}
                            </p>
                          </div>

                        </a>
                      );
                    })}

                  </div>
                )}

              </div>
            ))}

            <a
              href="/projects"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Projects
            </a>

          </div>

          {/* Mobile Auth */}

          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">

            {!isLoggedIn ? (
              <div className="flex gap-2">

                <a
                  href="/login"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-semibold dark:border-gray-700 dark:text-white"
                >
                  Login
                </a>

                <a
                  href="/signup"
                  className="flex-1 rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-black"
                >
                  Sign Up
                </a>

              </div>
            ) : (
              <div className="flex items-center gap-3 px-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold dark:bg-gray-700">
                  KS
                </div>

                <div>
                  <p className="text-sm font-semibold dark:text-white">
                    Karan
                  </p>

                  <a
                    href="/profile"
                    className="text-xs text-gray-500"
                  >
                    View Profile
                  </a>
                </div>

              </div>
            )}

          </div>

        </div>
      )}

    </header>
  );
}