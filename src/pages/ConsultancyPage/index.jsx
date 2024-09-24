import React from 'react'
import ConsultancyHome from './components/ConsultancyHome'
import AiConsultancy from './components/AiConsultancy'
import PredictAiFuture from './components/PredictAiFuture'
import OnGoingProjects from './components/OnGoingProjects'
import AboutUsCTA from '../AboutUsPage/components/AboutUsCTA'

const ConsultancyPage = () => {
    return (
        <>
            <ConsultancyHome />
            <AiConsultancy />
            <PredictAiFuture />
            <OnGoingProjects />
            <AboutUsCTA />
        </>
    )
}

export default ConsultancyPage