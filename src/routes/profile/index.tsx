import { h } from "preact"
import { FinalFormExample } from "../../components/demo/final_form"
import { H1, H2 } from "../../components/html/headings"

interface Props {
  user: string
}

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: Props) => {
  return (
    <section class="container mx-auto">
      <H1>Final Form Demo</H1>
      <H2>Field Level Validation</H2>
      <FinalFormExample onSubmit={console.log} />
    </section>
  )
}

export default Profile
