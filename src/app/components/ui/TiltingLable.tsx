import React from 'react';

const TiltingLable = ({name} : {name: string}) => {
    return (
        <div
            className=' tilting-button mt-5 md:mt-0 py-px px-5 font-satoshi font-normal text-lg md:text-xl border border-black rounded-3xl'
            style={{
                boxShadow: '2px 2px 0px #000'
            }}
        >
            {name}
        </div>
    );
};

export default TiltingLable;