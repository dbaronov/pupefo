"use client"

import React from 'react';
import './globals.css';
import { ProductProvider } from '../context/ProductContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>Our Products</title>
            </head>
            <body>
                <ProductProvider>
                    <main>{children}</main>
                    <footer>
                        <p>&copy; {new Date().getFullYear()} Our Products Inc.</p>
                    </footer>
                </ProductProvider>
            </body>
        </html>
    );
};

export default RootLayout;
