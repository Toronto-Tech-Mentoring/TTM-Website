import React from "react"

// TODO ITEMS
// - Josephin sans font and other fonts need to be packaged in build
// - Alignment of text as per Figma needed (how to transform?)
// - wrapping of body text

export default function LeftAnchoredBubbleText(props) {
    return (
        <svg width="855" height="536" viewBox="0 0 855 536" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M450.564 405.405C381.558 422.894 298.189 412.411 232.261 411.744C157.11 410.983 96.4665 497.286 69.5054 460.341C42.5626 423.421 131.331 353.691 142.188 307.763C153.815 258.57 80.3195 211.444 143.554 168.352C207.502 124.772 308.836 144.702 393.853 136.258C451.753 130.508 505.041 127.439 561.017 126.892C633.932 126.181 722.543 107.853 770.199 132.586C820.284 158.581 827.018 208.271 808.287 255.226C790.096 300.826 734.332 344.902 670.909 381.481C613.813 414.411 519.967 387.816 450.564 405.405Z" fill="#A6FFFF" fill-opacity="0.3"/>

            {/* header text */}
            <text x="160" y="185"
                font-family="Josefin Sans"
                font-style="normal"
                font-weight="600"
                font-size="36px"
                line-height="57px"
                fill="#000000">
            {props.headerText}
            </text>

            {/* body text */}
            <text x="150" y="310"
                font-family="Poppins"
                font-style="normal"
                font-weight="normal"
                font-size="18px"
                line-height="31px"
                fill="#404040">
            {props.bodyText}
            </text>
        </svg>
    )
};