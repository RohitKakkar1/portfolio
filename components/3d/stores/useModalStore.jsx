import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import * as THREE from 'three';

export const useModalStore = create(
    subscribeWithSelector((set) => {
        return {
            isModalOpen: false,
            modalTitle: "",
            modalContent: null,
            modalType: '',

            openModal: (title, content, type) => set({
                isModalOpen: true,
                modalTitle: title,
                modalContent: content,
                modalType: 'type',
            }),

            closeModal: () => set({
                isModalOpen: false,
                modalTitle: "",
                modalContent: null,
                modalType: '',
            }),

        };
    })
);
