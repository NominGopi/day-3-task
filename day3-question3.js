// (3).Use the same rest countries and print all countries names, regions, sub-region and populations

async function displayCountryInfo() {
    try {
      
        var response = await fetch("https://restcountries.com/v3.1/all");
        var countries = await response.json();

        for (var country of countries) {
            var name = country.name.common;
            var region = country.region;
            var subregion = country.subregion;
            var population = country.population;

            console.log(`Country: ${name}`);
            console.log(`Region: ${region}`);
            console.log(`Subregion: ${subregion}`);
            console.log(`Population: ${population}`);
            console.log("----------------------");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

displayCountryInfo();



