import { useState } from "preact/hooks";

export default function PortfolioHeader() {
  // State for handling the mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div class="font-bold">
      <nav class="w-full min-h-32 max-tablet:min-h-16 top-0 left-0 z-10">
        <div class="mx-auto px-4">
          <div class="flex justify-end items-center pt-8 max-tablet:py-4">
            {/* Desktop Menu */}
            <div class="flex max-tablet:hidden space-x-16 mt-12 pb-7 px-16">
              <a href="/" class="hover:text-just-red">Home</a>
              <a
                href="/portfolio"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                Portfolio
              </a>
              <a
                href="/articles"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                Articles
              </a>
              <a
                href="/about"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                About
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div class="hidden max-tablet:flex">
              <button
                onClick={toggleMenu}
                class="focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="undefined"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div
            class={`${
              isMenuOpen ? "" : "hidden"
            } md:hidden flex flex-col items-center`}
          >
            <a
              href="/"
              class="block py-2 px-4 hover:text-just-red"
            >
              Home
            </a>
            <a
              href="/portfolio"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              Portfolio
            </a>
            <a
              href="/articles"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              Articles
            </a>
            <a
              href="/about"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
