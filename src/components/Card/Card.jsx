import React from 'react'
import "./Card.css"
import {
    AiFillClockCircle
} from "react-icons/ai"
import ImageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import Avatar from "../../assets/images/image-avatar.png";
import {
   BsFillEyeFill
} from "react-icons/bs"
import {
    FaEthereum
} from "react-icons/fa"
function Card() {
  return (
    <div className="card_container max-w-sm">
          <div className="card_components">
              <div className="card_image">
                  <img src={ImageEquilibrium} alt="equilibrium" className="card_img rounded h-80 w-full" />
                  <div className="cover flex items-center justify-center">
                      <BsFillEyeFill style={{fontSize: "2em", color:"#fff"}}/>
                  </div>
              </div>

              <div className="card_content">
                  <h3 className="font-bold title text-left py-2.5 text-2xl capitalize">equilibrium #3429</h3>
                  <p className="para text-left capitalize text-xl py-2.5">
                      our equilibrium collection promotes balance and calm.
                  </p>

                  <div className="flex justify-between py-2.5">

                      <div className="left flex items-center">
                        <FaEthereum />
                         <p className='pl-1.5'> 0.041 ETH </p>
                      </div>

                      <div className="right flex items-center">
                          <AiFillClockCircle />
                          <p className="pl-1.5">3 days left</p>
                      </div>
                  </div>

                  <hr className='my-2.5' />
                  <div className="profile">
                      <div className="profile_info flex items-center">
                          <img src={Avatar} alt="profile" className='w-10' />
                          <p className="pl-5 capitalize">
                              <span>creation of</span> jules wyvern
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card