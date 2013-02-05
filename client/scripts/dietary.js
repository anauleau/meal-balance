var celiacDiet, lactoseDiet, veganDiet, vegetarianDiet;

vegetarianDiet = ['chicken', 'andouille', 'antelope', 'bacon', 'beef', 'bologna', 'brautwurst', 'bread', 'buffalo', 'calves feet', 'capicola', 'caul fat', 'chicken', 'chorizo', 'cornish hen', 'venison', 'veal', 'turkey', 'duck', 'elk', 'escargot', 'fatback', 'foie gras', 'goose', 'ham', 'meat', 'pig', 'hog', 'hot dogs', 'steak', 'snails', 'sausage', 'salami', 'pork', 'rabbit', 'quail', 'prosciutto', 'poultry seasoning', 'pollock fillet', 'pheasant', 'pepperoni', 'pastrami', 'pancetta', 'ostrich', 'oxtails', 'anchovy', 'barramundi', 'bass', 'bonit', 'bonita flakes, dried', 'fish', 'caviar', 'clam', 'cod', 'crab', 'tuna', 'trout', 'halibut', 'grouper', 'gravlax', 'lobster', 'mackerel', 'turbot', 'squid', 'sole', 'shrimp', 'scallops', 'sardines', 'scrod', 'sea bass', 'shark', 'salmon', 'red snapper', 'octopus', 'mussels', 'pike', 'perch', 'oyster'];

veganDiet = ['eggs', 'chicken', 'andouille', 'antelope', 'bacon', 'beef', 'bologna', 'brautwurst', 'bread', 'buffalo', 'calves feet', 'capicola', 'caul fat', 'chicken', 'chorizo', 'cornish hen', 'venison', 'veal', 'turkey', 'duck', 'elk', 'escargot', 'fatback', 'foie gras', 'goose', 'ham', 'meat', 'pig', 'hog', 'hot dogs', 'steak', 'snails', 'sausage', 'salami', 'pork', 'rabbit', 'quail', 'prosciutto', 'poultry seasoning', 'pollock fillet', 'pheasant', 'pepperoni', 'pastrami', 'pancetta', 'ostrich', 'oxtails', 'anchovy', 'barramundi', 'bass', 'bonit', 'bonita flakes, dried', 'fish', 'caviar', 'clam', 'cod', 'crab', 'tuna', 'trout', 'halibut', 'grouper', 'gravlax', 'lobster', 'mackerel', 'turbot', 'squid', 'sole', 'shrimp', 'scallops', 'sardines', 'scrod', 'sea bass', 'shark', 'salmon', 'red snapper', 'octopus', 'mussels', 'pike', 'perch', 'oyster', 'butter', 'milk', 'cheese', 'milk powder', 'cream', 'margarine', 'butter', 'buttermilk', 'butternut', 'yougurt', 'cheese', 'cream', 'dulce de leche', 'genoise', 'ghee', 'grits', 'margarine', 'whipped topping', 'rennet'];

lactoseDiet = ['butter', 'milk', 'cheese', 'milk powder', 'cream', 'margarine', 'butter', 'buttermilk', 'butternut', 'yougurt', 'cheese', 'cream', 'dulce de leche', 'genoise', 'ghee', 'grits', 'margarine', 'whipped topping', 'rennet'];

celiacDiet = ['mayonnaise', 'bagels', 'baguette', 'barley', 'beer', 'bran', 'bread', 'brioche', 'bulgur', 'buns', 'flatbread', 'flour', 'yeast', 'cracker', 'wheat', 'croissants', 'cracker', 'croutons', 'dough', 'macaroni', 'focaccia', 'fettuccine', 'frogs legs', 'grissini', 'holland rusks', 'lamb', 'lard', 'malt', 'wonton skins', 'tartlette shells', 'rolls', 'puff pastry', 'seitan', 'phyllo', 'pastry', 'pasta', 'panko', 'pancake'];

var restrictionHash = {
  vegetarianDiet : vegetarianDiet,
  veganDiet : veganDiet,
  lactoseDiet: lactoseDiet,
  celiacDiet : celiacDiet
}