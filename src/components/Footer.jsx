// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Company Info */}
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Your Farm</h2>
                        <p className="text-gray-400">Helping you grow your own organic produce at home.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li className="mb-1">
                                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li className="mb-1">
                                <a href="/about" className="text-gray-400 hover:text-white">About</a>
                            </li>
                            <li className="mb-1">
                                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                            </li>
                            <li className="mb-1">
                                <a href="/cart" className="text-gray-400 hover:text-white">Cart</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708H9.692v-3.674h3.127V8.412c0-3.097 1.892-4.787 4.659-4.787 1.325 0 2.463.099 2.794.144v3.24l-1.918.001c-1.503 0-1.793.715-1.793 1.762v2.31h3.587l-.467 3.674h-3.12V24h6.118c.731 0 1.324-.594 1.324-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.724-.951.566-2.005.974-3.127 1.195-.897-.954-2.178-1.549-3.594-1.549-2.717 0-4.923 2.207-4.923 4.923 0 .386.044.761.127 1.124C7.728 8.087 4.1 6.128 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.697 4.374 3.946 4.827-.414.111-.849.171-1.296.171-.317 0-.626-.03-.927-.087.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.213-.005-.425-.014-.637.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.976.976 1.258 2.242 1.32 3.608.059 1.267.07 1.647.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.344 2.633-1.32 3.608-.976.976-2.242 1.258-3.608 1.32-1.267.059-1.647.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.344-3.608-1.32-.976-.976-1.258-2.242-1.32-3.608-.059-1.267-.07-1.647-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.344-2.633 1.32-3.608.976-.976 2.242-1.258 3.608-1.32 1.267-.059 1.647-.07 4.85-.07m0-2.163c-3.258 0-3.667.012-4.947.072-1.412.065-2.64.343-3.687 1.39C2.343 2.963 2.065 4.19 2 5.603c-.06 1.28-.072 1.689-.072 4.947 0 3.258.012 3.667.072 4.947.065 1.412.343 2.64 1.39 3.687 1.047 1.047 2.275 1.325 3.687 1.39 1.28.06 1.689.072 4.947.072 3.258 0 3.667-.012 4.947-.072 1.412-.065 2.64-.343 3.687-1.39 1.047-1.047 1.325-2.275 1.39-3.687.06-1.28.072-1.689.072-4.947 0-3.258-.012-3.667-.072-4.947-.065-1.412-.343-2.64-1.39-3.687-1.047-1.047-2.275-1.325-3.687-1.39-1.28-.06-1.689-.072-4.947-.072z" />
                                    <path d="M12 5.838c-3.405 0-6.162 2.756-6.162 6.162 0 3.405 2.756 6.162 6.162 6.162 3.405 0 6.162-2.756 6.162-6.162 0-3.405-2.756-6.162-6.162-6.162zm0 10.15c-2.194 0-3.988-1.794-3.988-3.988 0-2.194 1.794-3.988 3.988-3.988 2.194 0 3.988 1.794 3.988 3.988 0 2.194-1.794 3.988-3.988 3.988z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
