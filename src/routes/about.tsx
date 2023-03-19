import { h } from "preact"
import { FinalFormExample } from "../components/demo/final_form"
import { H1, H2 } from "../components/html/headings"
import { P } from "../components/html/content"

interface Props {
  route: string
  topic: string
}

// Note: `user` comes from the URL, courtesy of our router
const About = ({ topic }: Props) => {
  return (
    <section class="container mx-auto">
      <H1>{topic}</H1>
      <H2>Final Form Demo</H2>
      <P>Field level validation</P>
      <FinalFormExample onSubmit={console.log} />
    </section>
  )
}

export default About
