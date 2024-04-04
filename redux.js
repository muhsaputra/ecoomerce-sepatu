const { legacy_createStore } = require("redux");

// Reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer);
console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});
// Discpatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 20,
  },
};

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 10,
    qty: 5,
  },
};

store.dispatch(action2);
