import React from 'react'
import ConsultancyHome from './components/ConsultancyHome'
import AiConsultancy from './components/AiConsultancy'
import PredictAiFuture from './components/PredictAiFuture'
import OnGoingProjects from './components/OnGoingProjects'
import { CTA } from '../../components'

const ConsultancyPage = () => {
    return (
        <>
            <ConsultancyHome />
            <AiConsultancy />
            <PredictAiFuture />
            <OnGoingProjects />
            <CTA />
        </>
    )
}

export default ConsultancyPage