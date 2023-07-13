import { useAuth } from "hooks";

function Content() {
  const {
    user: { name, email }
  } = useAuth();
    return <div>
      <div>Content component</div>
      <div>your name is {name}, email {email}</div>
    </div>
}

export default Content;