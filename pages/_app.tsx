import Layout from '@/layout/Layout';
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Code to include Bootstrap's JavaScript
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
