import { h } from "preact"
import { Route, Router } from "preact-router"
import { createHashHistory } from "history"
import Header from "./header"
import { hashHistoryAdapter } from "./util"

// Code-splitting is automated for `routes` directory
import Home from "../routes/home"
import About from "../routes/about"

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router history={hashHistoryAdapter(createHashHistory())}>
        <Route path="/" component={Home} />
        <Route path="/about/" component={About} route="/about/" topic="About" />
        <Route path="/services/" component={About} route="/about/services" topic="Services" />
      </Router>
    </main>
  </div>
)

export default App
