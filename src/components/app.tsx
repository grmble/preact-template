import { h } from "preact"
import { Route, Router } from "preact-router"

import Header from "./header"

// Code-splitting is automated for `routes` directory
import Home from "../routes/home"
import Profile from "../routes/profile"

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about/" component={Profile} user="me" />
        <Route path="/services/" component={Profile} user="services" />
      </Router>
    </main>
  </div>
)

export default App
