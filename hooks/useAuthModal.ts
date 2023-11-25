import { create } from "zustand";

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ true }),
    onClose: () => set({ false }),
}));

export default useAuthModal;