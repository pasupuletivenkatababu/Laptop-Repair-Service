import React from 'react'

const collectionsData = [
  {
    title: "Screen Repair",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
  {
    title: "Battery Replacement",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    title: "Keyboard Repair",
    image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
  },
  {
    title: "Motherboard Repair",
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Software Installation",
    image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    title: "Data Recovery",
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
];
const Collections = () => {
  return (
   <div className="collectionsSection">
      <h2>Our Repair Services</h2>

      <div className="collectionsGrid">
        {collectionsData.map((item, index) => (
          <div className="collectionCard" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections