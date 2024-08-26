import React from 'react';

function HelpingCart(props) {
    let backgroundStyle;

    // Check if the background is an image path or a color
    if (props.background && props.background.startsWith('http') || props.background.startsWith('.') || props.background.startsWith('/')) {
        // If it's an image path
        backgroundStyle = {
            background: `url(${props.background})`,
            backgroundSize: 'cover',
        };
    } else if (props.background) {
        // If it's a color
        backgroundStyle = {
            background: props.background,
        };
    } else {
        // Default background color if no background is provided
        backgroundStyle = {
            background: '#FFFFFF',
        };
    }

    return (
        <div className='helping_cart' style={backgroundStyle}>
            <div className="helping_cart_title">
                <span></span> <p>{props.title}</p>
            </div>
        </div>
    );
}

export default HelpingCart;
