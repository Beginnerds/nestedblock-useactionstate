import { useActionState } from "react";
import { login } from "../actions";

const LoginForm = () => {
  const [message, formAction, isPending] = useActionState(login, "");
  return (
    <form
      action={formAction}
      className="bg-sky-100 max-w-md mx-auto rounded-sm p-4"
    >
      <h2>NestedBlock: Login</h2>
      <input
        type="email"
        name="email"
        placeholder="email"
        className="mt-4 w-3/4 text-gray-100 bg-slate-600 p-2"
      />
      <div className="mt-4">
        <button className="bg-green-600 w-1/2 text-white px-3 py-1 rounded-sm">
          Login
        </button>
      </div>
      {isPending && <p className="mt-2">Loading...</p>}
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default LoginForm;
