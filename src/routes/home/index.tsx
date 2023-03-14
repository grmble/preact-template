import { h } from "preact"
import HookFormDemo from "../../components/demo/hook_form"

const Home = () => {
  return (
    <section>
      <h1 class="title">Home</h1>
      <h2 class="subtitle">Hook Form Demo</h2>
      <HookFormDemo onSubmit={(x:unknown,e:unknown) => console.log('demo', x, e)} />
    </section>
  )
}

export default Home
