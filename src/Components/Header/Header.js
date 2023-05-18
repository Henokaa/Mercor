import React from 'react'
import './Header.css'
import logo from '../Assets/logo_1.jpg'

const Header = () => {
    return (
        <div class="mt-8 flex justify-between items-center px-4 md:px-6 py-8 h-16 fixed w-full">
  <div class="flex items-center">
    <img class="h-10 rounded-full" src={logo} alt="Chronicle logo" />
    <p class="text-2xl font-bold ml-2">Chronicle</p>
  </div>
  <div class=" bg-white text-black text-lg px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-680 ease-in-out">
    Join Beta
  </div>
</div>
    )
}

export default Header