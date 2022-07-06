const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// TODO: array where id is divisible by 3
const id_by_3 = pokémon.filter(p => p.id % 3 === 0);
console.log(id_by_3);

console.log();
console.log('**************')
console.log();

// TODO: array with fire type
const fire_type = pokémon.filter(p => p.types.includes("fire"))
console.log(fire_type);

console.log();
console.log('**************')
console.log();

// TODO: array with more than one type
const more_than_one = pokémon.filter(p => p.types.length >= 2);
console.log(more_than_one);

console.log();
console.log('**************')
console.log();

// TODO: array with names only
const names = pokémon.map(p => p.name);
console.log(names);

console.log();
console.log('**************')
console.log();

// TODO: array with ONLY names who have an id > 99
const names_id_99 = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(names_id_99);

console.log();
console.log('**************')
console.log();

// TODO: array with ONLY names who have ONLY poison type
const names_poison = pokémon.filter(p => p.types == "poison").map(p => p.name);
console.log(names_poison);

console.log();
console.log('**************')
console.log();

// TODO: array with the fIRST type of the object whose second type is flying
const flying = pokémon.filter(p => p.types[1] == "flying").map(p => p.types[0]);
console.log(flying);

console.log();
console.log('**************')
console.log();

// TODO: a count of the # of pokemon who are normal type
const number_normal = pokémon.filter(p => p.types.includes("normal")).length;
console.log(number_normal);

console.log();
console.log('**************')
console.log();