import { useActionState } from "react";
import { addToCart } from "../actions";

const initialState = {
    success:true,
    message:'',
    cartSize:0
}

const AddToCartForm = () => {

    const [formState, formAction] = useActionState(addToCart, initialState);
  return (
    <form
    action={formAction}
    className="bg-sky-100 max-w-md mx-auto rounded-sm p-4"
  >
    <h2>NestedBlock: Add To Cart</h2>
    <div className="mt-4">
    <input
        type="text"
        name="itemName"
        placeholder="Item Name"
        className="mt-4 w-3/4 text-gray-100 bg-slate-600 p-2"
      />
      <button className="mt-4 bg-green-600 w-1/2 text-white px-3 py-1 rounded-sm">
        Add To Cart
      </button>
    </div>
    {formState.success  && <p className="mt-2">Item added to cart.</p>}
    {!formState.success && formState.message && <p className="mt-2">{formState.message}</p>}
  </form>
  )
}

export default AddToCartForm