import React from 'react'
import "../css/explorermenu.css"
import { menu_list } from '../images/assets'
const ExplorerMenu = ({category,setCategory}) => {
  return (
    <div className='explorer-menu' id='explorer-menu'>
        <h1>Explore our menu</h1>
        <p className='explorer-menu-text'>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
        <div className="explorer-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name )} key={index} className="explorer-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name } </p>
                    </div>
                )
            })

            }
        </div>
        <hr />
      
    </div>
  )
}

export default ExplorerMenu
