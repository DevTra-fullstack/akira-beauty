import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { Product } from '@/types';

interface CartStore {
  items: (Product & { quantity: number })[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        
        if (existingItem) {
          set({
            items: currentItems.map((item) => 
              item.id === data.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
          toast.success(`${data.name} quantity increased!`);
        } else {
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success(`${data.name} added to cart!`);
        }
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from cart");
      },
      updateQuantity: (id: string, quantity: number) => {
        set({
          items: get().items.map((item) => 
            item.id === id ? { ...item, quantity } : item
          )
        });
        toast.success("Cart updated");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'akira-cart',
    }
  )
);