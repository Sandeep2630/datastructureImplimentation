function hashStringToInt(key, tableSize) {
  let hash = 17;

  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class Hashtable {
  table = new Array(17);

  setitem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    this.table[idx] = value;
  };

  getitem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx];
  };
}

const myTable = new Hashtable();

mytable.setitem("sirname", "thakur");
mytable.setitem("age", 10);

console.log(myTable.table);
console.log(myTable.getItem("sirName"));

console.log(myTable.getItem("age"));
