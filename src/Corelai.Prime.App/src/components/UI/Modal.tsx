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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-1 flex items-center justify-center

            "
            onClick={onClose}
        >
            <div
                className="
                  relative
                  flex flex-col items-center"
                onClick={e => e.stopPropagation()}
            >
                <div
                    className="

                    cursor-pointer
                    text-center
                    border-b-2 golden-border
                    transition-colors duration-200
                    text-xl
                    z-2
                    font-oxanium
                    uppercase
                    w-[50%]
                    text-writing-200
                    dark:text-gold-300
                    "
                    onClick={onClose}
                >
                    Close
                </div>
                {children}
            </div>
        </div>
    )
}