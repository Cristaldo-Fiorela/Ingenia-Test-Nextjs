import SvgComponent from "@/assets/icons/place-restaurant";

const Place = ({ direction }) => {

  return (
    <>
      {direction === 'right' ?
        (
          <div className="placeItemR">
            <div className="titlePlace">
              <h3>Name of Place</h3>
              <span>
                <SvgComponent className="iconPlace"/>
              </span>
            </div>
            <small>123 Main St</small>
            <p>amazing burgers, imprompteau jazz trios</p>
          </div> 
        ) : (
          <div className="placeItemL">
            <div className="titlePlace">
              <span>
                <SvgComponent className="iconPlace"/>
              </span>
              <h3>Name of Place</h3>
            </div>
            <small>123 Main St</small>
            <p>amazing burgers, imprompteau jazz trios</p>
          </div> 
        )
      }
    </>
  )
}

export default Place