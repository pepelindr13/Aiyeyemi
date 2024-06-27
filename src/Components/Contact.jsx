import React from "react";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from './Navbar'
const Contact = () => {
  let navigate = useNavigate();
  function nav() {
    navigate("/booking");
  }
  return (
    <div>
              <div
          style={{
            position: "absolute",
            top: "10px",
            zIndex: "20000",
            width: "100%",
          }}
        >
          <Navbar />
        </div>
      <div id="contactDiv" className="background-containerr shadow-sm px-5">
        <div className="text-center">
          <p className="fw-bold">CHAT WITH US</p>
          <h1 className="fw-bolder">GET IN TOUCH!</h1>
          <button onClick={nav} className="bookBtn mt-2">
            BOOK ROOM
          </button>
        </div>
      </div>
      <div className="d-flex flex-lg-row flex-column contactFlex">
        <div>
          <ContactForm />
        </div>
        <div>
          <h3 className="fw-bolder mb-4 pb-2 border-bottom border-black">
            Contact Info
          </h3>
          <div>
            <h5 className="addh5 fw-bold">Address</h5>
            <p>
              <a
                id="add"
                href="https://www.google.com/maps?q=11+Paulson+Odu+Avenue%2C+Omoologede+Estate%2C+Ogolonto%2C+Ikorodu%2C+Lagos"
                target="_blank"
              >
                Find us on Google Maps
                <p>
                  11 Paulson Odu Avenue, Omoologede Estate, Ogolonto, Ikorodu,
                  Lagos
                </p>
              </a>
            </p>
            <a id="add" href="https://maps.app.goo.gl/qTXRC4aiEgKah3ss8?g_st=com.google.maps.preview.copy" className="nav-link fw-bold my-2 p-0">
              Find us on Google Maps<p>Ajasse Ipo 251102, Kwara</p>
              </a>
            <p>
              <a
                id="add"
                href="https://www.google.com/maps/place/10+Shobowale+Alayo+St,+Ikorodu,+104101,+Lagos/@6.6319875,3.5018699,15z/data=!3m1!4b1!4m9!1m2!2m1!1sNo+10+shobowale+alayo+akasolori+estate+itokin+road+ikorodu!3m5!1s0x103beebf8907b9f3:0x3528fff4437638ea!8m2!3d6.6319665!4d3.520324!15sCjpObyAxMCBzaG9ib3dhbGUgYWxheW8gYWthc29sb3JpIGVzdGF0ZSBpdG9raW4gcm9hZCBpa29yb2R1kgEQZ2VvY29kZWRfYWRkcmVzc-ABAA?entry=ttu"
                target="_blank"
              >
                Find us on Google Maps
                <p>
                  No 10 shobowale alayo akasolori estate itokin road ikorodu
                </p>
              </a>
            </p>
          </div>
          <div className="my-5">
            <h5 className="fw-bold addh5">Phone</h5>
            <div style={{ lineHeight: "10px" }}>
              <p>
                <span className="fw-bold">Phone 1:</span> 08033744276
              </p>
              <p>
                <span className="fw-bold">Phone 2:</span> 08033058076
              </p>
            </div>
          </div>
          <div>
            <h5 className="fw-bold addh5">Email</h5>
            <p className="fw-bold">hotelaiyeyemipalace@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
