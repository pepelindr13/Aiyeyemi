import React from 'react'
import Room1 from '../assets/Images/room1.jpg'
import Room2 from '../assets/Images/room2.jpg'
import Room3 from '../assets/Images/room3.jpg'
import Star from '../assets/Images/rightarrow.png'
import Navbar from './Navbar'
const Booking = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "80vh" }}>
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
        <div
          style={{ position: "absolute", width: "100%"}}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="firstCaro carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                id="cap2"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Your home of Comfort & Pleasure.
                </h1>
                <p>HOTEL & RESORT!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Room2} className="d-block w-100" alt="..." />
              <div
                id="cap"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Comfy & Luxurious Rooms
                </h1>
                <p>YOUR ROOM YOUR STAY!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Room3} className="d-block w-100" alt="..." />
              <div
                id="cap3"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Enjoy every second.
                </h1>
                <p>ENJOY WITH US!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="RBooking">
          <form action="">
          <div className="w-100">
          <label htmlFor="">Check In Date</label> <br />
          <input type="date" />
          </div>
          <div className="w-100">
          <label htmlFor="">Check Out Date</label>
          <input type="date" />
          </div>
          <div className="w-100">
            <label htmlFor="">Adults</label>
          <select name="" id="">
            <option value="">Adult 1</option>
            <option value="">Adult 2</option>
            <option value="">Adult 3</option>
          </select>
          </div>
          <div className="w-100">
          <label htmlFor="">Children</label>
          <select name="" id="">
            <option value="">Children 1</option>
            <option value="">Children 2</option>
            <option value="">Children 3</option>
          </select>
          </div>
          <button className="bootBtn">Book Now</button>
          </form>
      </div>
      <div className="roomContainer text-center">
        <h6 style={{lineHeight:"15px"}}>
        <div className="fs-1 fw-bolder ro">Rooms</div>
        OUR ROOMS
        </h6>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦30,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Royal Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦30,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Royal Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦30,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Royal Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦30,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Royal Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Booking