let data = [
    {
        'id': 0,
        'title': 'Santiago Chile',
        'lat': -33.45694,
        'lon': -70.64827,
        'description': '<b>Reason for wanitng to visit:</b> I am a big fan of chilean indie rock, they have a nice underground music scene for the genre and I would love to explore more of Latin America.',
        'pic': '<img src= img/chile.jpg width="200px">'
    },
    {
        'id': 1,
        'title': 'Rio de Janeiro, Brazil',
        'lat': -22.27528,
        'lon': -42.41941,
        'description': '<b>Reason for wanitng to visit:</b> Portuguese is the third langauge I learned to speak and have had an obsession with their culture and music, as well as wanting to see what the beautiful country has to offer.',
        'pic': '<img src= img/brazil.jpg width="200px">'
    },
    {
        'id': 2,
        'title': 'Bangkok, Thailand',
        'lat': 13.75254,
        'lon': 100.49347,
        'description': '<b>Reason for wanitng to visit:</b> Due to a friend having an obsession with Thai Dramas, I was brought down that ship to watch and enjoy them as well, the locations looks amazing and so does the gastronomy of the country.',
        'pic': '<img src= img/thailand.jpg width="200px">'
    },
    {
        'id': 3,
        'title': 'Seoul, South Korea',
        'lat': 37.56668,
        'lon': 126.97829,
        'description': '<b>Reason for wanitng to visit:</b> Korean is the fourth langauge I am currently learning, I think immersing myself within the culture could be a good way to help me learn the language, I also do enjoy the gastrnomy and korean music. Aside from that I do enjoy coffee shops and have seen the creativity put into the coffee shop scene within the country.',
        'pic': '<img src= img/korea.jpg width="200px">'
    },
    {
        'id': 4,
        'title': 'Tokyo, Japan',
        'lat': 35.68284,
        'lon': 139.75945,
        'description': 'Reason for wanitng to visit:</b>I am just a big anime fan ever since I was a child, and would love to visit akihabara, I feel like my inner child otaku would very much enjoy it. Also I am a big fan of sushi and would want to try in the country of origin.',
        'pic': '<img src= img/japan.jpg width="200px">'
    },

]

let map = L.map('map').setView([-33.45694,-70.64827], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// loop through data
data.forEach(function(item){
	// add marker to map
	let marker = L.marker([item.lat,item.lon]).addTo(map)
		.bindPopup(item.title)

	// add data to sidebar
	$('.sidebar').append(item.title)
})