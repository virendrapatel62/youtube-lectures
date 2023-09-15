import { DynamicForm } from "./components/form/DynamicForm";

import {
  contactForm,
  loginForm,
  userFormConfig,
} from "./config/form/userFormConfig";

function App() {
  return <DynamicForm config={userFormConfig} onSubmit={console.log} />;
  // return <DynamicForm config={loginForm} onSubmit={console.log} />;
  // return <DynamicForm config={contactForm} onSubmit={console.log} />;
}

export default App;
