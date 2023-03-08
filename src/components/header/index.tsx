import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match'
import classnames from 'classnames'

const Header = () => {
	const [isExpanded, setExpanded] = useState(false)
	const toggleExpanded = (_: Event) => setExpanded(!isExpanded)

	return <nav class="navbar is-info" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a href="/" class="navbar-item">
				<h1>Preact CLI</h1>
			</a>
			<a class={classnames("navbar-burger", { 'is-active': isExpanded })}
				role="button" aria-label="menu" aria-expanded={isExpanded}
				data-target="nav-menu"
				onClick={toggleExpanded}>
				<span aria-hidden="true"> </span>
				<span aria-hidden="true"> </span>
				<span aria-hidden="true"> </span>
			</a>
		</div>
		<div class={classnames("navbar-menu", { 'is-active': isExpanded })} id="nav-menu">
			<div class="navbar-start">
				<Link href="/" activeClassName='is-active' class='navbar-item'>Home</Link>
				<Link href="/profile" activeClassName='is-active' class='navbar-item'>Me</Link>
				<Link href="/profile/john" activeClassName='is-active' class='navbar-item'>John</Link>
			</div>
		</div>
	</nav>
}

export default Header
