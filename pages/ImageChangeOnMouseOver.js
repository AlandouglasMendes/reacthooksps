import React from  'react';
import ImageTogglerOnMouseOver from '../src/ImageTogglerOnMouseOver'

const ImageChangeOnMouseOver = () =>{
    return(
        <div>
            <ImageTogglerOnMouseOver primaryImg="/speakers/bw/Speaker-187.jpg" secondaryImg="/speakers/Speaker-187.jpg" alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="/speakers/bw/Speaker-823.jpg" secondaryImg="/speakers/Speaker-823.jpg" alt="" />
        </div>
    );
};
export default ImageChangeOnMouseOver;