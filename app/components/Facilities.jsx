import Place from "./Place"

const Facilities = () => {

  return (
    <div className="facilitiesContainer">
      <div className="selectContainer">
        <p><span>Comming to visit us?</span> Here are some of our favorite places around town</p>

        <select name="select">
          <option value="book">A quiet place to read a book</option>
        </select>
      </div>

      <div className="placesContainer">
        <div>
          <p className="cityTitle mexico">Mexico City:</p>
          <div className="placeContainer">
            <Place direction="right"/>
            <Place direction="right"/>
          </div>
        </div>

        <div className="verticalLine"></div>

        <div>
          <p className="cityTitle">Washington, DC:</p>
          <div className="placeContainer">
            <Place />
            <Place />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities