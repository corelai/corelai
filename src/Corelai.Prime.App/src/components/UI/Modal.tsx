import React, { useEffect } from 'react'

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 max-w-lg w-full relative shadow-lg"
                onClick={e => e.stopPropagation()} // blocca la chiusura se clicchi dentro
            >
                <button
                    className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={onClose}
                >
                    ✕
                </button>

                {children}
            </div>
        </div>
    )
}