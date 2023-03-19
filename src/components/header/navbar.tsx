// demo navbar copied from flowbite
//
// to adjust the background color:
//
// replace bg-gray-50 and bg-gray-800 with the color of your choice
// everything blue replace with your primary
//

import { h } from "preact"
import { StateUpdater, useState } from "preact/hooks"
import { Match } from "preact-router/match"
import { route } from "preact-router"

type NavProps = {
  isExpanded: boolean
  setExpanded: StateUpdater<boolean>
}

const NavBurger = ({ isExpanded, setExpanded }: NavProps) => (
  <button
    onClick={(_: Event) => setExpanded(!isExpanded)}
    data-collapse-toggle="navbar-default"
    type="button"
    class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none 
        focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
    aria-controls="navbar-default"
    aria-expanded={isExpanded}
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="h-6 w-6"
      aria-hidden={!isExpanded}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 
            011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
)

type NavLinkProps = NavProps & {
  label: string
  href: string
}

const NavLink = ({ label, href, setExpanded }: NavLinkProps) => (
  <li>
    <Match path={href}>
      {({ matches }: { matches: boolean }) => {
        const classes = "block rounded py-2 pl-3 pr-4 md:border-0 md:p-0"
        const active = "text-white bg-blue-700 dark:text-white md:text-blue-700 md:bg-transparent"
        const inactive =
          "text-gray-700 hover:bg-gray-100 " + // light mobile
          "dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " + // dark mobile
          "md:hover:bg-transparent md:hover:text-blue-700 " + // light screen
          "md:dark:hover:bg-transparent md:dark:hover:text-white" // dark screen
        return (
          <a
            onClick={(e: Event) => {
              e.preventDefault()
              route(href)
              setExpanded(false)
            }}
            href={href}
            class={`${classes} ${matches ? active : inactive}`}
          >
            {label}
          </a>
        )
      }}
    </Match>
  </li>
)

const NavMenu = (props: NavProps) => {
  return (
    <div class={`${props.isExpanded ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul
        class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4
       dark:border-gray-700 dark:bg-gray-800 
         md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-50 md:text-sm md:font-medium
        md:dark:bg-gray-800"
      >
        <NavLink {...{ ...props, href: "/", label: "Home" }} />
        <NavLink {...{ ...props, href: "/about", label: "About" }} />
        <NavLink {...{ ...props, href: "/services", label: "Services" }} />
        <NavLink {...{ ...props, href: "/pricing", label: "Pricing" }} />
        <NavLink {...{ ...props, href: "/contact", label: "Contact" }} />
      </ul>
    </div>
  )
}

const FlowbiteNavbar = () => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <nav class="rounded border-gray-200 bg-gray-50 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </a>
        <NavBurger isExpanded={isExpanded} setExpanded={setExpanded} />
        <NavMenu isExpanded={isExpanded} setExpanded={setExpanded} />
      </div>
    </nav>
  )
}

export const NavBar = () => <FlowbiteNavbar />
