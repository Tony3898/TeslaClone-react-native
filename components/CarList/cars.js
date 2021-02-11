let onPressOrder = (model) => {
  console.warn(`Order Pressed!!! for ${model}`);
};
let onPressInventory = ()=>{
  console.warn('Inventory Pressed!!!')
}
export default [{
  name: "Model S",
  tagline: "Starting at $69,420",
  image: require("../../assets/images/ModelS.jpeg"),
  onPressOrder,
  onPressInventory
}, {
  name: "Model 3",
  tagline: "Order Online for",
  taglineCTA: "Touchless Delivery",
  image: require("../../assets/images/Model3.jpeg"),
  onPressOrder,
  onPressInventory
}, {
  name: "Model X",
  tagline: "Order Online for",
  taglineCTA: "Touchless Delivery",
  image: require("../../assets/images/ModelX.jpeg"),
  onPressOrder,
  onPressInventory
}, {
  name: "Model Y",
  tagline: "Order Online for",
  taglineCTA: "Touchless Delivery",
  image: require("../../assets/images/ModelY.jpeg"),
  onPressOrder,
  onPressInventory
}];
