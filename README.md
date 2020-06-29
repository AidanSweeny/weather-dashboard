# weather-dashboard
For this project we were assigned to create a weather application that could display the weather in any city that was typed into the system. In order to do this I had to use jquery event listeners, local storage, and API's to get the information. First I created the search query that allowed the user search for any city in the world. This city was converted into a query URL that could be used to search for all weather data on the city. The API we used was from weathermap.org. A query line that was used is shown below:
```
"https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&appid=" + APIKey;
```
Two seperate API calls were used, because I had to find different kinds of information in order for the program to work. I relized that to get the 5 day data, I had to use the latitude and longitude of the city, so I had to get that from a seperate API, and then use it to find the 5 day forecast. When a city was searched I saved it to a list that was added to the local storage, so that the list could be generated even when the page was refreshed. I also added a clear button that could remove these items from local storage. Once the user entered a city it was displayed to the page with the current weather information, as well as the 5 day weather information below it. In order to display this nicely on the page, I used bootstrap's grid system. I also used bootstrap to style the page in the way that I wanted. There was a section in the API called weather icons, that I used in order to display the correct images for the sun or moon. Below is a working demonstration of the website:  

![](weather.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
The moment.js librarys can be used for the timing elements of the project. 
### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Moment.js](https://momentjs.com/docs/)
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/weather-dashboard/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp
* Font Awesome
