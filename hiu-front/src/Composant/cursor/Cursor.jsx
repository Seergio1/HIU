import React, { useEffect } from 'react';
import './Cursor.css'
const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const moveCursor = (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.pageX + 'px';
                cursor.style.top = e.pageY + 'px';
            });
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return <div className='cursor'></div>;
};

export default Cursor;