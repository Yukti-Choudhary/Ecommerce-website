import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.totalPrice;
          state.totalAmount++;
          state.totalPrice += productId.totalPrice;
        } else {
          state.cart.push({
            id: productId.id,
            name: productId.name,
            img: productId.img,
            size: productId.size,
            color: productId.color,
            amount: 1,
            price: productId.price,
            totalPrice: productId.price,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    deleteItem: (state, action) => {
      const productId = action.payload;
      try {
        const itemIndex = state.cart.findIndex(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (itemIndex !== -1) {
          const deletedItem = state.cart[itemIndex];
          state.totalAmount -= deletedItem.amount;
          state.totalPrice -= deletedItem.totalPrice;
          state.cart.splice(itemIndex, 1);
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
