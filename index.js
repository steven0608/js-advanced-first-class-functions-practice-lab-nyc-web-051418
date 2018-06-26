// Code your solution in this file!
const logDriverNames=(function (drivers) {
  drivers.forEach(function (driver) {
    console.log(`${driver.name}`)
  })
})

const logDriversByHometown=(function (drivers,location) {
drivers.forEach(function(driver){
  if (driver.hometown == location){
    console.log(`${driver.name}`)
  }
})
})


const driversByRevenue = (function (drivers) {
const new_drivers=[...drivers]
return new_drivers.sort(function (driver1,driver2) {
  return driver1.revenue - driver2.revenue
})
})

const driversByName = (function (drivers) {
const new_drivers=[...drivers]
return new_drivers.sort(function (driver1,driver2) {
  return driver1.name.localeCompare(driver2.name)
})
})


const totalRevenue=(function (drivers) {
  let totalPrice=0
  drivers.forEach(function (driver) {
    totalPrice+=driver.revenue
  })
  return totalPrice
})

const averageRevenue=(function (drivers) {
  let totalPrice=0
  drivers.forEach(function (driver) {
    totalPrice+=driver.revenue
  })
  return totalPrice/drivers.length
})
