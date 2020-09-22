import React from "react";
import ComputerSVG from '../SVG/ComputerSVG';
import HandsSvg from '../SVG/HandsSVG';

const cssHeaderText = {
    fontFamily: 'Josefin Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '65px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000'
}

const cssBodyText = {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '31px',
    display: 'flex',
    alignItems: 'center',
    color: '#404040'
}

const cssHeaderText2 = {
    fontFamily: 'Josefin Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '57px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000'
}

const cssBodyText2 = {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '31px',
    display: 'flex',
    alignItems: 'center',
    color: '#404040'
}

export default function WhyTechSection() {
    return (
    <div>
        <svg width="855" height="536" viewBox="0 0 855 536" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M450.564 405.405C381.558 422.894 298.189 412.411 232.261 411.744C157.11 410.983 96.4665 497.286 69.5054 460.341C42.5626 423.421 131.331 353.691 142.188 307.763C153.815 258.57 80.3195 211.444 143.554 168.352C207.502 124.772 308.836 144.702 393.853 136.258C451.753 130.508 505.041 127.439 561.017 126.892C633.932 126.181 722.543 107.853 770.199 132.586C820.284 158.581 827.018 208.271 808.287 255.226C790.096 300.826 734.332 344.902 670.909 381.481C613.813 414.411 519.967 387.816 450.564 405.405Z" fill="#A6FFFF" fill-opacity="0.3"/>

            <foreignObject x="160" y="150" width="855" height="536" style={cssHeaderText}>
                Why tech?
            </foreignObject>

            <foreignObject x="160" y="210" width="590" height="536" style={cssBodyText}>
                Our world is increasingly driven by technology -- it’s all around us, and it changes how we interact with the world and each other. Technical literacy is widely considered one of the most important 21st century skills, and it is a passport into participation in the modern economy. Tech skills are consistently one of the most in-demand skill sets.
            </foreignObject>
        </svg>

        <ComputerSVG />

        <HandsSvg />

         <svg width="841" height="444" viewBox="0 0 841 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M410.525 346.229C481.326 358.236 563.701 344.438 629.605 340.352C704.73 335.694 774.052 409.759 797.332 375.253C820.597 340.769 724.79 283.031 709.33 242.482C692.771 199.052 761.598 152.967 694.009 117.729C625.656 82.0925 526.251 105.299 440.333 102.238C381.819 100.154 328.189 100.225 272.122 102.698C199.088 105.92 108.584 94.1977 63.3727 118.866C15.8564 144.791 14.0918 189.639 37.5359 230.691C60.3031 270.558 120.515 307.072 187.641 336.468C248.07 362.931 339.316 334.152 410.525 346.229Z" fill="#E8D1FF" fill-opacity="0.4"/>

            <foreignObject x="120" y="110" width="855" height="536" style={cssHeaderText2}>
                We are a values-driven organization
            </foreignObject>

            <foreignObject x="120" y="160" width="600" height="536" style={cssBodyText2}>
                By enabling access to tech education, we strive to democratize the benefits of technology for all, including society’s most marginalized and vulnerable communities. We are an evidence-based organization and are committed to continuous improvement through ongoing evaluation processes.
            </foreignObject>
        </svg>

    </div>
    )
};