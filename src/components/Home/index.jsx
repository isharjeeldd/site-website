import React from 'react';
import { container } from '../../styles/globals';

const Home = () => {
    return (
        <>
            <div className='bg-home-bg h-[1200px] bg-fixed bg-no-repeat bg-cover flex items-center justify-center'>
                <div className={`${container}`}>
                    <div>
                        <h1 className='text-white uppercase mt-[-180px] leading-[100px] text-center flex flex-col gap-2 text-[100px]'>
                            <div className='ml-[-200px]'>
                                Bridging the
                            </div>
                            <div className='ml-14'>
                                gap between AI
                            </div>
                            <div>
                                potential and human
                            </div>
                            <div className='ml-[-150px]'>
                                values
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;