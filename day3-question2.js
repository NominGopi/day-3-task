
//(2).Use the rest countries' API URL-> https://restcountries.com/v3.1/all and display all of the country flags in the console. 

async function displayCountryFlags() {
    try {
        var response = await fetch("https://restcountries.com/v3.1/all");
        var countries = await response.json();
        for (let i = 0; i < countries.length; i++) {
            var country = countries[i];
            var flag = country.flags[0]; 

            console.log(`Country: ${country.name.common}, Flag: ${flag}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

displayCountryFlags();

