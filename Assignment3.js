class restaurantManager{
  restaurantList = [{
    id: 1,
    restaurantName: "KFC",
    address: "Anand Vihar",
    City: "Delhi"
   },
   {
    id: 2,
    restaurantName: "Domino",
    address: "Savita Vihar",
    City: "Delhi"
   },
   {
    id: 3,
    restaurantName: "Burger King",
    address: "Civil Lines",
    City: "Pune"
   },
   {
    id: 4,
    restaurantName: "Subway",
    address: "Cantonment",
    City: "Mumbai"
   },
   {
    id: 5,
    restaurantName: "UFC",
    address: "Sangmeshwar Nagar",
    City: "Solapur"
   }] ;

   printAllRestaurantNames = () => {
    return this.restaurantList.map(restaurant => restaurant.restaurantName);
   }
   filterRestaurantsByCity = (cityname) => {
    return this.restaurantList.filter(restaurant => restaurant.City == cityname)
   }
}

const restaurantObject = new restaurantManager();

const output1 = restaurantObject.printAllRestaurantNames();
console.log(output1);

console.log(restaurantObject.filterRestaurantsByCity("Pune"));

//  2 
orderData = { 
  'Below 500': 20, 
  '500-1000': 29, 
  '1000-1500': 30, 
  '1500-2000': 44, 
  'Above 2000': 76 
}; 

// a calculate total

const total = Object.values(orderData).reduce((prev, next) => prev + next );
console.log(total);

// b calculate length

const headers = Object.keys(orderData);
console.log(headers);

// c calculate Precentage
let arr = [];
const response = headers.map((item, index) => {
  const obj =  {
    'id' : index + 1,
    'order' : item,
    'orderpercentage' : ((orderData[item]/total )*100).toFixed(2),
    'restaurant': 'Punjabi Tadka'
  }
  arr.push(obj);
})

console.log(arr);