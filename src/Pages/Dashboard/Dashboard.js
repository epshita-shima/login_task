import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
    <h2 className='text-3xl font-bold text-secondary'>Welcom to your Dashboard</h2>
      {/* <!-- Page content here --> */}
      <Outlet></Outlet>
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-[#0265A3] text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li className='relative'><Link to='/dashboard/dasreview'>Review</Link>
                    <ul className='absolute w-[100%] left-[40%] overflow-hidden mt-4'>
                        <li className='p-[8px 16px] float-left w-auto border-none block outline-none'><Link to='/dashboard/dash'></Link>Item 1</li>
                        <li className='p-[8px 16px] float-left w-auto border-none block outline-none'><Link to='/dashboard/dash'></Link>Item 1</li>
                    </ul>
                    </li>
                    <li><Link to='/dashboard/dasprofile'>My Profile</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Dashboard