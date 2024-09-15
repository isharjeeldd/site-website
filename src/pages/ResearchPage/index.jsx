import React from 'react'
import ResearchHome from './components/ResearchHome'
import ResearchAbout from './components/ResearchAbout'
import GenericPage from '../ConsultancyPage/components/GenericPage'
import { researchData, researchOngoingProjectData } from '../../constants'

const ResearchPage = () => {
    return (
        <>
            <ResearchHome />
            <ResearchAbout />
            <div className='mb-[150px]'>
                <GenericPage data={researchData} isBackground={false} isFlexReverse={false} isTag={true} isChildHeading={true} />
            </div>
            <div className='bg-tertiary py-[200px]'>
                <h1 className='text-white mx-auto text-center w-full sm:w-[60%] font-[500] text-[32px] leading-[60px]'>Pushing the boundaries of AI ethics research. Our insights today shape the policies of tomorrow</h1>
            </div>
            <div className='mb-[150px]'>
                <GenericPage data={researchOngoingProjectData} isBackground={false} isFlexReverse={false} isTag={true} isChildHeading={false} />
            </div>
        </>
    )
}

export default ResearchPage
