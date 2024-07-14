import React from "react";

export default function Header() {
    return (
        <header>
            <div className='navbar'>
            <div className='logo'></div>
            <ul className= 'nav'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Купить пиво</li>
            </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}