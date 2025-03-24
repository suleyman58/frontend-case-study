import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Product nesnesinin yapısını bilmiyorsanız, any veya Record<string, any> kullanabilirsiniz
type Product = Record<string, any>;

interface BasketState {
  products: Product[];
}

const initialState: BasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        // Eğer ürün zaten varsa, quantity'yi artır
        existingProduct.quantity += 1;
      } else {
        // Yeni bir ürünse, quantity'yi 1 olarak ayarla ve ekle
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<string | number>) => {
      const existingProduct = state.products.find(product => product.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Eğer quantity 1'den büyükse, sadece quantity'yi azalt
          existingProduct.quantity -= 1;
        } else {
          // Eğer quantity 1 ise, ürünü tamamen kaldır
          state.products = state.products.filter(product => product.id !== action.payload);
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;