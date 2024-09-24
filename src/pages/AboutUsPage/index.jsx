import React from 'react'
import AboutUsHome from './components/AboutUsHome'
import AboutUsMissionStatement from './components/AboutUsMissionStatement'
import AboutSite from './components/AboutSite'
import { CTA } from '../../components'

const AboutUsPage = () => {
    return (
        <>
            <AboutUsHome />
            <AboutUsMissionStatement />
            <AboutSite />
            <CTA />
        </>
    )
}

export default AboutUsPage
