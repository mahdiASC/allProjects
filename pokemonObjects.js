var Pokemon = function(HP, attack, desc, def, height, special, pokedexNum, type, legendary){
    this.HP = HP;
    this.attack = attack;
    this.desc = desc;
    this.def = def;
    this.height = height;
    this.special = special;
    this.pokedexNum = pokedexNum;
    this.type = type;
    this.legendary = legendary;
}

var sandshrew = new Pokemon(150,"Scratch","Some pokemon that lives underground and likes digging",200,"1 ft. 5 in.",300,123,"Normal",false);
var pikachu = new Pokemon(140,"Thunder","Some pokemon that electricity",100,"1 ft. 10 in.",450,121,"Electric",false);
var lugia = new Pokemon(230,"Water","Some legendary pokemon",300,"80 ft. 1 in.",600,500,"Water",true);
