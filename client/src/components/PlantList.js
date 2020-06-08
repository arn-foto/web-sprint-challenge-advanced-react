import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
    };
  }

  //The componentDidMount method is a part of the mounting phase in the "React Lifecycle".
  //This method gets called as soon as the render method is called the first time This way,
  // any asynchronous actions should be performed inside of our componentDidMount function, especially when it comes to fetching data.
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        console.log("I tell you what this dong 'ol thing is working", res);
        this.setState({ plants: res.data.plantsData });
      })
      .catch((err) => console.log(err));
  }

  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DONT CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
