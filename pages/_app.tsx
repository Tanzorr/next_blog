import React from "react";
import {Provider} from 'react-redux';
import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar';
import store from '../libs/store'


export default function MyApp({Component, pageProps}) {
    return(
        <>
            <NextNprogress
                color="yellow"
                startPosition="0.3"
                stopDelayMs="200"
                height="3"
            />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>

            </>
    )
}