export const login = async (_:string,queryData:FormData) => {
    const email = queryData.get('email')
    if(email === 'me@nestedblock.com'){
        return "Successfully Logged In"
    }
    else {
        await new Promise(resolve => {
            setTimeout(resolve,2000)
        })

        return "Couldn't Login Incorrect Email"
    }
}

export const addToCart = (prevState:{
    success:boolean,
    message:string
},queryData:FormData) => {
    const itemName = queryData.get('itemName');
    if (itemName === "shoes") {
      return {
        success: true,
        message:`Item :${itemName} added to cart.`,
        cartSize: 12,
      };
    } else {
      return {
        success: false,
        message: "The item is not in stock.",
      };
    }
}