var oop = require("@alu0100973914/oop");
const chalk = require("chalk");

class ColorCell extends oop.TCell {
	
	constructor(inner, colors) {
		super(inner);
		this.color = colors["c"] || 'Red';
		this.background = colors["bg"] || 'black';
	}
		
	draw (width, height) {
		return super.draw(width, height).map(str => chalk.keyword(this.color)(chalk.bgKeyword(this.background)(str)));
	}
}

oop.Registry.addMapClass('ColorCell', ColorCell);
debugger;
module.exports = ColorCell

