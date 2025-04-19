import React, { createContext, useContext, useState } from 'react'
import {Modal} from "../components/UI/Modal.tsx";

type ModalContextType = {
    open: (content: React.ReactNode) => void
    close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const useModal = () => {
    const ctx = useContext(ModalContext)
    if (!ctx) throw new Error('useModal must be used within a ModalProvider')
    return ctx
}

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