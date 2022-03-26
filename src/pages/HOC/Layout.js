import React from 'react'
import { Header } from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function Layout() {
  return (
    <div className=''>
      <div className='row'>
        <div className="col-md-2"><Sidebar /></div>
        <div className="col-md-8 col-lg-12"><Header/> </div>
      </div>
    </div>
  )
}
