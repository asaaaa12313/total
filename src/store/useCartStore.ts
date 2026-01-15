import { create } from 'zustand';

export interface Module {
    id: string;
    name: string;
    category: 'SIGNAL' | 'VISUAL' | 'BOOST';
    description: string;
    price: number;
}

interface CartState {
    selectedModules: Module[];
    addToCart: (module: Module) => void;
    removeFromCart: (moduleId: string) => void;
    clearCart: () => void;
    isInCart: (moduleId: string) => boolean;
    totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    selectedModules: [],
    addToCart: (module) => set((state) => {
        if (state.selectedModules.find((m) => m.id === module.id)) return state;
        return { selectedModules: [...state.selectedModules, module] };
    }),
    removeFromCart: (moduleId) => set((state) => ({
        selectedModules: state.selectedModules.filter((m) => m.id !== moduleId),
    })),
    clearCart: () => set({ selectedModules: [] }),
    isInCart: (moduleId) => !!get().selectedModules.find((m) => m.id === moduleId),
    totalPrice: () => get().selectedModules.reduce((acc, curr) => acc + curr.price, 0),
}));
