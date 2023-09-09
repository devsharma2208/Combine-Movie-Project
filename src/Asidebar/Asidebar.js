import React from 'react'
import Styles from './Asidebar.module.css'

export default function Asidebar() {
    return (
        <div>
            <div className={Styles.container}>
                <div className='as-1'>
                    <h1 className='as-1-hd '>
                        Categories
                    </h1>
                    <h4>Action</h4>
                    <h4>Drama</h4>
                    <h4>Comedy</h4>
                    <h4>Animation</h4>
                </div>
            </div>
        </div>
    )
}
