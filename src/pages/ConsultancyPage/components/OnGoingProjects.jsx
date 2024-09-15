import React from 'react'
import { onGoingProjectPKLI, onGoingProjectWai } from '../../../constants'
import GenericPage from './GenericPage'

const OnGoingProjects = () => {
    return (
        <div className='mb-[150px]'>
            <GenericPage data={onGoingProjectWai} isTag={true} isBackground={false} isFlexReverse={true} isChildHeading={true} />
            <GenericPage data={onGoingProjectPKLI} isTag={false} isBackground={false} isFlexReverse={false} isChildHeading={true} />
        </div>
    )
}

export default OnGoingProjects
