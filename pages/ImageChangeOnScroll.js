import React from  'react';
import ImageTogglerOnScroll from '../src/ImageTogglerOnScroll'

const ImageChangeOnScroll = () =>{
    return(
        <div>
            {[1124, 187, 823, 1269, 1530].map(speakerId => {
                return (<div key={speakerId}>
                    <ImageTogglerOnScroll
                    primaryImage={`/speakers/bw/Speaker-${speakerId}.jpg`}
                    secondaryImage={`/speakers/Speaker-${speakerId}`.jpg}
                    alt=''
                    /> 
                </div>);
            })}
        </div>
    );
};
export default ImageChangeOnScroll;