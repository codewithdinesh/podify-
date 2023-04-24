import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Header />
            <div className="flex max-w-7xl mx-auto px-4 py-8 items-center">
                {children}
            </div>
        </div>
    )
}

export default Layout