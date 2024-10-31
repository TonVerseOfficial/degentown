import React from 'react'
// import airdrop from '../../assets/images/airdrop.svg';
import airdrop from '../../assets/images/airdropBg.png'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function AirDrop() {
  return (
    <div className='airdropSec' id='airDrop'>
      <img src={airdrop} alt="" className='w-90' />
      <Link to="https://t.me/degentown_bot" style={{ display : "contents" }}>
        <Button variant='contained' className='claimBtn airBtn'>CLAIM AIRDROP </Button>
      </Link>
    </div>
  )
}
