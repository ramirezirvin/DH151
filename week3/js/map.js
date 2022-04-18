let data = [
    {
        'id': 0,
        'title': 'Santiago, Chile',
        'lat': -33.45694,
        'lon': -70.64827,
        'desc': '<b>Reason for wanitng to visit:</b> I am a big fan of chilean indie rock, they have a nice underground music scene for the genre and I would love to explore more of Latin America.',
        'img': '<img src= img/chile.jpg width="200px">'
    },
    {
        'id': 1,
        'title': 'Rio de Janeiro, Brazil',
        'lat': -22.27528,
        'lon': -42.41941,
        'desc': '<b>Reason for wanitng to visit:</b> Portuguese is the third langauge I learned to speak and have had an obsession with their culture and music, as well as wanting to see what the beautiful country has to offer.',
        'img': '<img src= img/brazil.jpg width="200px">'
    },
    {
        'id': 2,
        'title': 'Bangkok, Thailand',
        'lat': 13.75254,
        'lon': 100.49347,
        'desc': '<b>Reason for wanitng to visit:</b> Due to a friend having an obsession with Thai Dramas, I was brought down that ship to watch and enjoy them as well, the locations looks amazing and so does the gastronomy of the country.',
        'img': '<img src= img/thailand.jpg width="200px">'
    },
    {
        'id': 3,
        'title': 'Seoul, South Korea',
        'lat': 37.56668,
        'lon': 126.97829,
        'desc': '<b>Reason for wanitng to visit:</b> Korean is the fourth langauge I am currently learning, I think immersing myself within the culture could be a good way to help me learn the language, I also do enjoy the gastrnomy and korean music. Aside from that I do enjoy coffee shops and have seen the creativity put into the coffee shop scene within the country.',
        'img': '<img src= img/korea.jpg width="200px">'
    },
    {
        'id': 4,
        'title': 'Tokyo, Japan',
        'lat': 35.68284,
        'lon': 139.75945,
        'desc': 'Reason for wanitng to visit:</b>I am just a big anime fan ever since I was a child, and would love to visit akihabara, I feel like my inner child otaku would very much enjoy it. Also I am a big fan of sushi and would want to try in the country of origin.',
        'img': '<img src= img/japan.jpg width="200px">'
    },

]

let map = L.map('map').setView([0,0], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// before looping the data, create an empty FeatureGroup
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item){
	// create marker
	let marker = L.marker([item.lat,item.lon]).bindPopup(`<h2>${item.title}</h2>${item.img}<br><br><div class = text>${item.desc}</div>`)

	// add marker to featuregroup
	myMarkers.addLayer(marker)

	// add data to sidebar with onclick event
	$('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${item.id})">${item.title}</div>`)
})

// after loop, add the FeatureGroup to map
myMarkers.addTo(map)

// make the map zoom to the extent of markers
map.fitBounds(myMarkers.getBounds());

// function to fly to a location by a given id number
function flyToIndex(index){
	map.flyTo([data[index].lat,data[index].lon],10)

    // open the popup
	myMarkers.getLayers()[index].openPopup()
}

// define layers
let layers = {
	"My Markers": myMarkers
}

// add layer control box
L.control.layers(null,layers).addTo(map)

