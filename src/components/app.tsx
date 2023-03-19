import { h } from "preact"
import { Route, Router } from "preact-router"

import Header from "./header"

// Code-splitting is automated for `routes` directory
import Home from "../routes/home"
import About from "../routes/about"

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about/" component={About} route="/about/" topic="About" />
        <Route path="/services/" component={About} route="/about/services" topic="Services" />
      </Router>
    </main>
  </div>
)

export default App
