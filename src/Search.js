import React from "react";
import "./App.css";
const Search = ({ search }) => {
  const vehicles = {
    bikes: [
      {
        brand: "Honda",
        Image:
          "https://imgd.aeplcdn.com/272x153/n/cw/ec/43482/sp-125-right-front-three-quarter-2.jpeg?isig=0&q=75",
        color: "Black",
        price: 5000,
      },
      {
        brand: "Yamaha",
        Image:
          "https://www.yamaha-motor-india.com/theme/v3/image/fzx/color/color-02.png?v=2",
        color: "Blue",
        price: 6000,
      },
      {
        brand: "Honda",
        Image:
          "https://assets.tractorjunction.com/bike-junction/bikes/yamaha-fz-fi/yamaha-fz-fi-4.webp?format=webp&width=429&height=255",
        color: "Blue",
        price: 5000,
      },
      {
        brand: "Honda",
        Image:
          "https://www.drivespark.com/bikes-photos/models/450x350/obenelectricrorr_1661767825.jpg/3/",
        color: "Red",
        price: 5000,
      },
      {
        brand: "Honda",
        Image:
          "https://cdn.bajajauto.com/-/media/Assets/bajajauto/home-page/Product-Highlights/motorcycle-img/Motorcycle-3.ashx",
        color: "Green",
        price: 5000,
      },
      {
        brand: "Honda",
        Image:
          "https://www.credr.com/blog/wp-content/uploads/2022/05/42-Side.jpeg",
        color: "Skyblue",
        price: 5000,
      },
    ],
    cars: [
      {
        Image:
          "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
        brand: "Toyota",
        color: "Red",
        price: 20000,
      },
      {
        Image:
          "https://imgd.aeplcdn.com/0x0/n/cw/ec/47278/bmw-m8-right-front-three-quarter16.jpeg",
        brand: "BMW",
        color: "Blue",
        price: 40000,
      },
      {
        Image:
          "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg",
        brand: "BMW",
        color: "Yellow",
        price: 40000,
      },
      {
        Image:
          "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg",
        brand: "BMW",
        color: "Green",
        price: 40000,
      },
      {
        Image:
          "https://imgd.aeplcdn.com/600x337/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75",
        brand: "BMW",
        color: "Black",
        price: 40000,
      },
      {
        Image:
          "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg",
        brand: "BMW",
        color: "Blue",
        price: 40000,
      },
    ],
    cycles: [
      {
        Image:
          "https://www.wizbiker.com/image/cache/catalog/Products/Schwinn/schwinn-burnout-24t-kids-bike-red-1000x1000.jpg",
        brand: "Schwinn",
        color: "Red",
        price: 300,
      },
      {
        Image:
          "https://rukminim1.flixcart.com/image/850/1000/jmnrtzk0-1/cycle/z/9/z/granite-bike-for-teenagers-green-74507-16-huffy-original-imaf9gjpaaddanfn.jpeg?q=90",
        brand: "Huffy",
        color: "Green",
        price: 200,
      },
      {
        Image:
          "https://ik.imagekit.io/electriccycles/Accessories/WhatsApp_Image_2022-11-28_at_21.43.38_u7r0w1dw7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669652998111",
        brand: "Huffy",
        color: "Violet",
        price: 200,
      },
    ],
  };

  const filteredVehicles = Object.keys(vehicles)
    .filter((key) => key.includes(search.toLowerCase()))
    .map((key) => vehicles[key]);

  return (
    <div>
      {filteredVehicles.map((vehicleGroup, index) => (
        <div key={index} className="vehicle-container">
          {vehicleGroup.map((vehicle, idx) => (
            <div key={idx}>
              <img
                className="img"
                src={vehicle.Image}
                alt={vehicle.brand}
                height="300px"
                width="400px"
              />
              <ul className="title">
                <li>Brand: {vehicle.brand}</li>
                <li>Color: {vehicle.color}</li>
                <li>Price: ${vehicle.price}</li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Search;