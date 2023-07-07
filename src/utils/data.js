import {MdOutlineDashboard} from "react-icons/md"
import {FaShippingFast} from "react-icons/fa"
import {RxDashboard} from "react-icons/rx"
import {MdDeliveryDining} from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {MdSupervisedUserCircle} from "react-icons/md"
import {BsFillCartCheckFill} from "react-icons/bs"
import {RiShoppingBag3Fill} from "react-icons/ri"
import {FaTypo3} from "react-icons/fa"
import {TbBrandJuejin} from "react-icons/tb"
import {AiOutlineBgColors} from "react-icons/ai"
import {FaBloggerB} from "react-icons/fa"
export const sideBarLinks = [
  {
    name:"Accueil",
    icon:<MdOutlineDashboard style = {{fontSize:"28px"}}/>,
    link:"/"

  },
  {
       name:"Produits",
       link:"/products",
       icon:<RiShoppingBag3Fill style = {{fontSize:"28px"}}/>
  },
  {
    name:"Categories",
    link:"/categories-product",
    icon:<FaTypo3 style = {{fontSize:"28px"}}/>

  },
  {
     name:"Marques",
     link:"/brands",
     icon:<TbBrandJuejin style = {{fontSize:"28px"}}/>
  }
  ,
  {
     name:"Couleurs",
     link:"/colors",
     icon:<AiOutlineBgColors style = {{fontSize:"28px"}}/>
  },

  {
    name:"Commandes",
    icon:<BsFillCartCheckFill style = {{fontSize:"28px"}}/>,
    link:"/orders"
  },
  {
    name:"Clients",
    icon:<MdSupervisedUserCircle style = {{fontSize:"28px"}}/>,
    link:"/customers"
  },
  {
    name:"Blog",
    icon:<FaBloggerB style = {{fontSize:"28px"}}/>,
    link:"/blog"
  }
  ,{
    name:"Paramètres",
    link:"/setting",
    icon:<AiFillSetting style = {{fontSize:"28px"}}/>
  }
]