// DO NOT COMMIT ANY CREDENTIALS!!!

// Using pseudocode, explain in plain English how you would use the Google Maps API to receive directions from Altria HQ to the nearest gas station. Assume you know the address of Altria HQ, but not the address of the nearest gas station
//Use Google maps geocoding API to convert Altria HQ address into latitude and longitude.
//Then use the API again (GET request) to search for gas stations near Altria HQ. Set the type as gas_station. Sort the results by distance.
//Then use another GET request to get the direction using the Altria HQ latitude and longitude as the Origin and the gas station longitude/latitude as the destination.
//Set the mode as driving to ensure we get a driving direction

// Challenge - Extreme: Write a function in Javascript that executes this process, taking the API key as an argument. DO NOT COMMIT THE API KEY.
