import AddToCartForm from "./components/add-to-cart-form";
import LoginForm from "./components/login-form";

function App() {
  

  return (
    <>
      <div className="min-h-screen w-full bg-slate-800 py-32 text-center ">
          <LoginForm/>
          <div className="my-28"></div>
          <AddToCartForm/>
      </div>
    </>
  );
}

export default App;
