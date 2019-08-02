import React from 'react';
import './Testimonial.css';
import handshake from '../../assets/handshake.jpg';

const testimonial = (props) => {
  return (
    <div>
      <h2>Testimonial</h2>
      <div className="Testimonial">
        <img src={handshake} alt="testinmonialPic" />
        <div className="TestimonialContent">
          <p>
            I've worked with Harry at City Print and Mail for a few years now, 
            they make the whole process easy. I just email them what I need and 
            how many, they take my mailing list and get it all done in short order. 
            I don't have to leave my office or anything to get the job done. I'll 
            continue to use them, it's great to be able to work with local businesses.
            <br/>
            <br/>
            - Richard M.
          </p>
          <p>
            Harry and Calvin have been taking care of all of our printing needs for 
            several years.  It is a pleasure to work with both of them.  They are 
            always on time, even if we aren't.  They work hard for us and we thoroughly 
            appreciate it.  The print and binding quality is terrific.  They go the 
            extra mile for us each and every job we give them.  We would not go 
            anywhere else for our print/binding/drop shipment services.
            <br/>
            <br/>
            - Patricia G.
          </p>
          <p>
            Great service and great prices. Harry & Calvin are always very responsive 
            and get everything done in a very timely manner. They're pretty flexible 
            with your timelines. We've never had issues with them and we've been 
            working with them for our printing and mailing needs for years.
            <br/>
            <br/>
            - E C.
          </p>
          <p>
            Top Class customer service. Calvin is easy to work with and communicates 
            very clearly. He has patience and knowledge, with A-1 customer service. 
            I was researching a project for my boss and he provided a quote in less 
            than 24 hours. He is the go to guy !!!
            <br/>
            <br/>
            - Virigina L.
          </p>
        </div>
      </div>
    </div>
  )
};

export default testimonial;
