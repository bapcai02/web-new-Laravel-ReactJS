import React from 'react';

function Contact(){

    return (
        <div>
            <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                <div className="col-md-6">
                    <div className="section-row">
                    <h3>Contact Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="list-style">
                        <li><p><strong>Email:</strong> bapyeu9x@email.com</p></li>
                        <li><p><strong>Phone:</strong> 0397368768</p></li>
                        <li><p><strong>Address:</strong> Le Trong Tan,Thanh Xuan,Ha Noi</p></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-5 col-md-offset-1">
                    <div className="section-row">
                    <h3>Send A Message</h3>
                    <form>
                        <div className="row">
                        <div className="col-md-7">
                            <div className="form-group">
                            <span>Email</span>
                            <input className="input" type="email" name="email" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="form-group">
                            <span>Subject</span>
                            <input className="input" type="text" name="subject" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <textarea className="input" name="message" placeholder="Message" defaultValue={""} />
                            </div>
                            <button className="primary-button">Submit</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                {/* /row */}
            </div>
            {/* /container */}
            </div>
        </div>
    );
}

export default Contact;