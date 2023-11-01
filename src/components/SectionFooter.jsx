import React from 'react'

const SectionFooter = () => {
  return (
    <div>
      <div className="footerSection">

       
        <div>
        <a href="#" className='logo logoColor'>Logo</a>
        <h3>Power in every bite</h3>
        </div>

        <div>
        <p><span>Open</span> ⋅ Ferme à 00:00</p>
        <p>0123456789</p>
        <p>Liesikuja 5, 01600 Vantaa</p>
        </div>
        
        <ul className='navLink'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </div>
  )
}

export default SectionFooter
