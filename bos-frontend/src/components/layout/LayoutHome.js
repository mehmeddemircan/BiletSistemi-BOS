import React from 'react'
import { Fragment } from 'react'
import FooterComponent from '../footer'
import Header from '../header/Header'

const LayoutHome = (props) => {
    return (
        <Fragment>
                    <Header />
                   
                    {props.children}

                    <FooterComponent />

        </Fragment>
    )
}

export default LayoutHome
