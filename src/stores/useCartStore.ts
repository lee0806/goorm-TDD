import { create } from "zustand";

interface CartStore {
  // 장바구니: 음식 ID와 수량을 저장
  cart: Record<number, number>;

  // 음식 ID를 통해 장바구니에 음식 추가
  addItem: (id: number) => void;

  minusItem: (id: number) => void;

  // 음식 ID를 통해 장바구니속 갯수 가져오기
  getCount: (id: number) => number;

  // 총 갯수
  getTotalCount: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: {},

  addItem: (id) => {
    set((state: CartStore) => {
      const newCart = { ...state.cart };
      const currentCount = newCart[id] || 0;
      newCart[id] = currentCount + 1;
      return { cart: newCart };
    });
  },

  minusItem: (id) => {
    set((state: CartStore) => {
      const newCart = {...state.cart };
      const currentCount = newCart[id] || 0;
      if (currentCount > 0) {
        newCart[id] = currentCount - 1;
      }
      
      return { cart: newCart };
    })
  },

  getCount: (id) => {
    const state = get();
    return state.cart[id] || 0;
  },

  getTotalCount: () => {
    const cart = get().cart;
    let total = 0;

    for (const count of Object.values(cart)) {
      total += count;
    }
    return total;
  },
}));
