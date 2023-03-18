import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { FinalFormExample } from "../../components/demo/final_form"

interface Props {
  user: string
}

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: Props) => {
  const [time, setTime] = useState<number>(Date.now())

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <FinalFormExample onSubmit={console.log} />
    </div>
  )
}

export default Profile
