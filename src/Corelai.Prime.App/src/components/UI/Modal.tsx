import React, { useEffect } from 'react'
import {IoCloseOutline} from "react-icons/io5";

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-1 flex items-center justify-center

            "
            onClick={onClose}
        >
            <div
                className=" rounded-xl p-6  relative"
                onClick={e => e.stopPropagation()}
            >
                <div
                    className="
                    cursor-pointer
                    absolute top-0 right-0
                    rounded-full
                    bg-gold-500
                    hover:bg-gold-300
                    transition-colors duration-200
                    p-2
                    z-1

                    "
                    onClick={onClose}
                >
                    <IoCloseOutline />
                </div>
                {children}
            </div>
        </div>
    )
}