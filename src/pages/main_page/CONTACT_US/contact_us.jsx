import React from 'react';

function ContactAs(props) {
    return (
        <div className='contact_us'>
            <div className="container">
                <div className="contact_us_flex">
                    <div className="contact_us_text">
                        <div className="contact_us_text_title">
                            CONTACT US
                        </div>
                        <div className="contact_us_text_decryption_title">
                            Ready. Set. Smile
                        </div>

                        <div className="contact_us_text_decryption">
                            Take the free online assessment to see if you are a candidate and get started on your
                            journey.
                        </div>


                        <div className="contact_us_text_button">
                            GET HELP NOW
                        </div>
                    </div>

                    <div className="contact_us_img">
                        <img src={require('../../images/charles-etoroma-390119.png')} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactAs;