import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="
                cursor-pointer
                text-center
                border-b-2 golden-border
                transition-colors duration-200
                text-xl
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}