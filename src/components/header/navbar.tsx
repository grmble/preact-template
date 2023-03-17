import { h, Fragment } from "preact"
import { StateUpdater, useState } from "preact/hooks"
import { Link } from "preact-router/match"

const burgerMenu = "\u2261" // Unicode: identical to

type NavLinkProps = {
  label: string
  href: string
  isExpanded: boolean
  setExpanded: StateUpdater<boolean>
}

type NavMenuProps = {
  isExpanded: boolean
  setExpanded: StateUpdater<boolean>
}

const NavLink = (props: NavLinkProps) => {
  const cn = props.isExpanded
    ? "p-2 hover:bg-gray-400"
    : "p-4 px-2 hover:bg-blue-400"
  return (
    <Link
      href={props.href}
      activeClassName={props.isExpanded ? "bg-gray-300" : "bg-blue-300"}
      class={cn}
      onClick={(e: Event) => {
        e.preventDefault()
        props.setExpanded(false)
      }}
    >
      {props.label}
    </Link>
  )
}

const NavMenu = (props: NavMenuProps) => (
  <div
    class={`flex ${
      props.isExpanded ? "flex-col bg-gray-200" : "max-sm:hidden"
    }`}
    id="nav-menu"
  >
    <NavLink {...{ ...props, label: "Home", href: "/" }} />
    <NavLink {...{ ...props, label: "Me", href: "/profile" }} />
    <NavLink {...{ ...props, label: "John", href: "/profile/john" }} />
  </div>
)

const NavBurger = ({ isExpanded, setExpanded }: NavMenuProps) => (
  <>
    <div class="grow sm:hidden" />
    <a
      class="select-none px-4 pb-4 pt-2.5 text-2xl hover:bg-blue-400 sm:hidden"
      role="button"
      aria-label="menu"
      aria-expanded={isExpanded}
      data-target="nav-menu"
      onClick={(e: Event) => {
        e.preventDefault()
        setExpanded(!isExpanded)
      }}
    >
      {burgerMenu}
    </a>
  </>
)

export const NavBar = () => {
  // isExpanded means the menu is shown in expanded form,
  // i.e. when inline menu is hidden via media query
  // (and the burger is visible)
  const [isExpanded, setExpanded] = useState(false)

  return (
    <>
      <nav
        class="flex h-14 bg-blue-200"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="flex w-32">
          <a href="/" class="p-4 pr-2 hover:bg-blue-400">
            <h1>Preact CLI</h1>
          </a>
        </div>
        {!isExpanded && (
          <NavMenu isExpanded={isExpanded} setExpanded={setExpanded} />
        )}
        <NavBurger isExpanded={isExpanded} setExpanded={setExpanded} />
      </nav>
      {isExpanded && (
        <NavMenu isExpanded={isExpanded} setExpanded={setExpanded} />
      )}
    </>
  )
}
