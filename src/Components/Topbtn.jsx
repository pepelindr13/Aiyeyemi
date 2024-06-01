import React from 'react'
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) { // Show button when scrolled down 200px
      scrollToTopBtn.classList.add('bounce');
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.classList.remove('bounce');
    }
  });
  
  function scroll(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
const Topbtn = () => {
  return (
    <div><button className="animate__animated animate__bounce" onClick={scroll} id="scrollToTopBtn">↑</button>
    </div>
  )
}

export default Topbtn