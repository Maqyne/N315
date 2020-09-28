var MODEL = (function () {
  var _getDuck = function (callback) {
    let duckContent = `
    <img src="media/duck.jpg" alt="">
    <p>Duck is the common name for numerous species in the waterfowl family Anatidae which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species) but a form taxon, since swans and geese are not considered ducks. Ducks are mostly aquatic birds, mostly smaller than the swans and geese, and may be found in both fresh water and sea water.

    Ducks are sometimes confused with several types of unrelated water birds with similar forms, such as loons or divers, grebes, gallinules and coots.</p>
    `;
    return callback(duckContent);
  };
  var _getPig = function (callback) {
    let pigContent = `
    <img src="media/pig.jpg" alt="">
    <p>A pig is any of the animals in the genus Sus, within the even-toed ungulate family Suidae. Pigs include domestic pigs and their ancestor, the common Eurasian wild boar (Sus scrofa), along with other species. Pigs, like all suids, are native to the Eurasian and African continents, ranging from Europe to the Pacific islands. Suids other than the pig are the babirusa of Indonesia, the pygmy hog of Asia, the warthog of Africa, and another genus of pigs from Africa. The suids are a sister clade to peccaries.
    
    Juvenile pigs are known as piglets. Pigs are highly social and intelligent animals.
    
    With around 1 billion individuals alive at any time, the domestic pig is among the most populous large mammals in the world. Pigs are omnivores and can consume a wide range of food. Pigs are biologically similar to humans and are thus frequently used for human medical research.</p>
    `;
    return callback(pigContent);
  };
  var _getGoat = function (callback) {
    let goatContent = `
      <img src="media/goat.jpg" alt="">
      <p>The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. It is one of the oldest domesticated species of animal, and has been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.

      Female goats are referred to as does or nannies, intact males are called bucks or billies and juvenile goats of both sexes are called kids. Castrated males are called wethers. While the words hircine and caprine both refer to anything having a goat-like quality, hircine is used most often to emphasize the distinct smell of domestic goats.
      
      In 2011, there were more than 924 million goats living in the world, according to the UN Food and Agriculture Organization.</p>
      `;
    return callback(goatContent);
  };
  var _getCow = function (callback) {
    let cowContent = `
      <img src="media/cow.jpg" alt="">
      <p>Cattle, or cows (female) and bulls (male), are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos taurus.

      Cattle are commonly raised as livestock for meat (beef or veal, see beef cattle), for milk (see dairy cattle), and for hides, which are used to make leather. They are used as riding animals and draft animals (oxen or bullocks, which pull carts, plows and other implements). Another product of cattle is their dung, which can be used to create manure or fuel. In some regions, such as parts of India, cattle have significant religious meaning. Cattle, mostly small breeds such as the Miniature Zebu, are also kept as pets.
      
      Around 10,500 years ago, cattle were domesticated from as few as 80 progenitors in central Anatolia, the Levant and Western Iran. According to the FAO, there are approximately 1.5 billion cattle in the world as of 2018. In 2009, cattle became one of the first livestock animals to have a fully mapped genome.</p>
      `;
    return callback(cowContent);
  };
  var _getHome = function (callback) {
    let homeContent = `
    <h1>Common Livestock</h1>
      <img src="media/home.jpg" alt="">
      <p>Livestock is commonly defined as domesticated animals raised in an agricultural setting to produce labor and commodities such as meat, eggs, milk, fur, leather, and wool. The term is sometimes used to refer solely to those that are bred for consumption, while other times it refers only to farmed ruminants, such as cattle and goats. Horses are considered livestock in the United States. The USDA classifies pork, veal, beef, and lamb as livestock and all livestock as red meat. Poultry and fish are not included in the category..</p>
      `;
    return callback(homeContent);
  };

  return {
    getDuck: _getDuck,
    getPig: _getPig,
    getGoat: _getGoat,
    getCow: _getCow,
    getHome: _getHome,
  };
})();
