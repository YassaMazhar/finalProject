import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularIcon } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Rating({rating}) {

  function getStarIcon (position){
    if (rating >= position){
      return faStar
    }
    else if (rating >= position - 0.5) {
      return faStarHalfStroke
    }
    else {
      return regularIcon

    }
  }

  return <>
    {
        [1,2,3,4,5].map((position)=>  
          <FontAwesomeIcon icon={getStarIcon(position)} key={position}/>
        )

    }
  
  </>
}
