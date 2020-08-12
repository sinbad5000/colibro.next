import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => (
    <div className="bg-white antialiased">
        <div>
            <div>
                <div className="max-w-xl mx-auto px-8">
                    <nav>
                        <div className="py-4 flex-shrink-0 flex items-center">
                            <img className="h-8 w-8" src="/logo.svg" alt="" />

                            <a className="ml-8 font-medium text-gray-900">Home</a>


                            <a className="ml-8 font-medium text-gray-900">
                                Account Settings
                </a>

                        </div>
                        <div className="mt-2">
                            <input
                                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                                placeholder="Search..."
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
    </div>
);

export default Layout;