import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal'

export default function Header() {
    const dialog = useRef()

    const handleOpen = () => {
        dialog.current.open()
    }

    return (
        <>
            <Modal ref={dialog} />

            <header className='main-header'>
                <div className='main-title'>
                    <img src={logo} className='main-img' />
                    <h1>Elegant Context</h1>
                </div>

                <button 
                    className='main-header-button'
                    onClick={handleOpen}
                >
                    Cart <span>(0)</span>
                </button>
            </header>
        </>
    )
}