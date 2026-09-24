// stores/useModeStore.js
import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useModeStore = create(
    subscribeWithSelector((set) => ({
        mode: 'play', // Default mode is play
        toggleMode: () =>
            set((state) => ({
                mode: state.mode === 'play' ? 'view' : 'play',
            })),
    }))
);

export default useModeStore;
