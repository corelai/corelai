// src/context/ModalContext.tsx
import React, { createContext, useContext, useState } from 'react'
import {Modal} from "../components/UI/Modal.tsx";

type ModalContextType = {
    open: (content: React.ReactNode) => void
    close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const useModal = () => useContext(ModalContext)!

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState<React.ReactNode>(null)

    const open = (node: React.ReactNode) => {
        setContent(node)
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
        setContent(null)
    }

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            <Modal isOpen={isOpen} onClose={close}>
                {content}
            </Modal>
        </ModalContext.Provider>
    )
}