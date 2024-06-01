import React from 'react'
import ContactForm from './ContactForm'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Contact = () => {
    let navigate = useNavigate()
    function nav(){
        navigate('/booking')
    }
  return (
    <div>
<div id='contactDiv' className="background-container shadow-sm px-5">
        <div className='text-center'>
        <p>CHAT WITH US</p>
        <h1>GET IN TOUCH</h1>
          <button onClick={nav} className="bookBtn mt-2">BOOK ROOM</button>
        </div>
      </div>
      <div className='d-flex contactFlex'>
            <div>
            <ContactForm />
            </div>
            <div>
                <h3 className='fw-bolder mb-4 pb-2 border-bottom border-black'>Contact Info</h3>
                <div>
                    <h5 className='addh5 fw-bold'>Address</h5>
                    <p><a id='add' href="https://www.google.com/maps?q=11+Paulson+Odu+Avenue%2C+Omoologede+Estate%2C+Ogolonto%2C+Ikorodu%2C+Lagos" target="_blank">Find us on Google Maps<p>11 Paulson Odu Avenue, Omoologede Estate, Ogolonto, Ikorodu, Lagos</p></a>
                    </p>
                    <p><a id='add' href="https://www.google.com/maps?q=11+Paulson+Odu+Avenue%2C+Omoologede+Estate%2C+Ogolonto%2C+Ikorodu%2C+Lagos" target="_blank">Find us on Google Maps<p>No 10 shobowale alayo akasolori estate itokin road ikorodu</p></a>
                    </p>
                </div>
                <div className='my-5'>
                <h5 className='fw-bold addh5'>Phone</h5>
                <div style={{lineHeight:"10px"}}>
                <p>Phone 1: 08033744276</p>
                <p>Phone 2: 08033058076</p>
                </div>
                </div>
                <div>
                    <h5 className='fw-bold addh5'>Email</h5>
                    <p>hotelaiyeyemipalace@gmail.com</p>
                </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact