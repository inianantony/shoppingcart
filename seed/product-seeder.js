var Product = require("../models/product")

var mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_URI, { useMongoClient: true })

var products = [
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/sku/10633/1/10633182_1GG.jpg",
		title: "Pes 2016 Game - Ps4",
		description:
			"Along with all the new features included in Pes 2016, the Soccer Series will have the Dynamic Weather System for the first time. This new implementation will not only graphically improve the effects of time in the game, but will also affect the gameplay itself, having a role Important in the Reformulation of the Master League Mode and Off-Line Matches. In addition to this New Feature, the Game Features a New Camera Mode, New Celebration Features Title: Pes 16 Platform: Ps4 Production Company: Konami Features: Genre: Sport Age Group: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio In Portuguese-With Narration by Mauro Beting And Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals and Metropolitan Regions 0800-880-7669 Other Locations. All Features Are Available For All Game Platforms. ",
		price: 269
	}),
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg",
		title: "Game Tom Clancys Ghost Recon Wildlands Ps4",
		description:
			"We are all used to the huge amount of 3-person games that exist in the virtual world. Because of that, a game that has a difference draws much more attention. Tom Clancys Ghost Recon Wildlands brings much more than one or another novelty. The Game Brings a Totally New Experience That Will Change Your Way of Watching Shooting Games. ",
		price: 209
	}),
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg",
		title: "Lego Game Star Wars: The Force Awakens - PS4",
		description:
			"LEGO® Star Wars: The Force Awakens marks the incredible comeback of the number 1 LEGO video game series and takes fans into the new Star Wars adventure in an unprecedented way. Players can relive the epic action of cinema success in a way that only LEGO can offer, with the whole storyline of Star Wars: The Force Awakens retold under the clever and fun perspective of LEGO. The game will also bring exclusive content that will take players on adventures between Star Wars: Episode VI: The Return of Jedi and Star Wars: The Force Awakens, offering a new take on the recent film and its characters. ",
		price: 169
	}),
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg",
		title: "Game Mortal Kombat X - PS4",
		description:
			"Mortal Kombat X is the next chapter in the long-awaited, legendary and acclaimed fighting game franchise from NetherRealm Studios, marking the debut of the iconic series in the new generation. The game combines cinematic presentation with unprecedented gameplay, offering the most brutal combat experience of all-time, bringing a completely new connected experience that throws players into a persistent online competition, where every fight counts in the global battle for supremacy. ",
		price: 79
	}),
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg",
		title: "Game - Uncharted 4: A Thief's End - PS4",
		description:
			"Every treasure has its price Several years after his last adventure, retired treasure hunter Nathan Drake is forced to return to the world of thieves. Now with his personal life at stake, Drake embarks on a journey around the world in search of a historic conspiracy behind a famous pirate treasure. ",
		price: 108
	}),
	new Product({
		imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg",
		title: "Game - The Witcher 3: Wild Hunt - PS4",
		description:
			"The Witcher 3: Wild Hunt is a role-playing game in a wide, dynamic, non-linear, dark fantasy world based on a story driven by the character himself, the player's choices and strategic fighting. The third chapter of this award-winning saga enhances all aspects of the series, with a more fluid combat system, new Witcher Senses and Monster Hunting, improved alchemy, magic signals, skill systems and many other innovations. ",
		price: 99
	})
]

var done = 0
for (var i = 0; i < products.length; i++) {
	products[i].save(function (err, result) {
		done++
		if (done === products.length) {
			exit()
		}
	})
}

function exit() {
	mongoose.disconnect()
}
