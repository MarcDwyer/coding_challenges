 function Tree(leaf, type) {
     this.leaf = leaf
     this.type = type
 }

 Tree.prototype.giveType = function() {
     return this.leaf
 }

 Tree.prototype.season = 'fall'
 const newTree = new Tree('orange', 'maple')
 console.log(newTree.season)
 console.log(newTree.giveType())