import React from 'react';

function About(){

    return (

        <div>
           <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                    <div className="col-md-8">
                        <div className="section-row">
                        <p>Lorem ipsum dolor sit amet, ea eos tibique expetendis, tollit viderer ne nam. No ponderum accommodare eam, purto nominavi cum ea, sit no dolores tractatos. Scripta principes quaerendum ex has, ea mei omnes eruditi. Nec ex nulla mandamus, quot omnesque mel et. Amet habemus ancillae id eum, justo dignissim mei ea, vix ei tantas aliquid. Cu laudem impetus conclusionemque nec, velit erant persius te mel. Ut eum verterem perpetua scribentur.</p>
                        <figure className="figure-img">
                            <img className="img-responsive" src="./img/about-1.jpg" alt />
                        </figure>
                        <p>Vix mollis admodum ei, vis legimus voluptatum ut, vis reprimique efficiendi sadipscing ut. Eam ex animal assueverit consectetuer, et nominati maluisset repudiare nec. Rebum aperiam vis ne, ex summo aliquando dissentiunt vim. Quo ut cibo docendi. Suscipit indoctum ne quo, ne solet offendit hendrerit nec. Case malorum evertitur ei vel.</p>
                        </div>
                        <div className="row section-row">
                        <div className="col-md-6">
                            <figure className="figure-img">
                            <img className="img-responsive" src="./img/about-2.jpg" alt />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <h3>Our Mission</h3>
                            <p>Id usu mutat debet tempor, fugit omnesque posidonium nec ei. An assum labitur ocurreret qui, eam aliquid ornatus tibique ut.</p>
                            <ul className="list-style">
                            <li><p>Vix mollis admodum ei, vis legimus voluptatum ut.</p></li>
                            <li><p>Cu cum alia vide malis. Vel aliquid facilis adolescens.</p></li>
                            <li><p>Laudem rationibus vim id. Te per illum ornatus.</p></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* aside */}
                    <div className="col-md-4">
                        {/* ad */}
                        <div className="aside-widget text-center">
                        <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                            <img className="img-responsive" src="./img/ad-1.jpg" alt />
                        </a>
                        </div>
                        {/* /ad */}
                        {/* post widget */}
                        <div className="aside-widget">
                        <div className="section-title">
                            <h2>Most Read</h2>
                        </div>
                        <div className="post post-widget">
                            <a className="post-img" href="blog-post.html"><img src="./img/widget-1.jpg" alt /></a>
                            <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
                            </div>
                        </div>
                        <div className="post post-widget">
                            <a className="post-img" href="blog-post.html"><img src="./img/widget-2.jpg" alt /></a>
                            <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
                            </div>
                        </div>
                        <div className="post post-widget">
                            <a className="post-img" href="blog-post.html"><img src="./img/widget-3.jpg" alt /></a>
                            <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
                            </div>
                        </div>
                        <div className="post post-widget">
                            <a className="post-img" href="blog-post.html"><img src="./img/widget-4.jpg" alt /></a>
                            <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
                            </div>
                        </div>
                        </div>
                        {/* /post widget */}
                    </div>
                    {/* /aside */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
                </div>

        </div>

    );
}

export default About;