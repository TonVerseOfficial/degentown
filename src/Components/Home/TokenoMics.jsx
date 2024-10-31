import React from 'react'
import Tokenomics from '../../assets/images/Tokenomics.svg'
import Tokenomics2 from '../../assets/images/tokenomic.png'
export default function TokenoMics() {
  return (
    <div className='tokenoMicsSection'>
        <img src={Tokenomics} alt="" className='TokenomicsImg'/>
        <img src={Tokenomics2} alt="" className='Tokenomics2Img'/>
    </div>
  )
}
