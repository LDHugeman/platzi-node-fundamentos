const sharp = require('sharp');

sharp('./original.png.png').resize(80).grayscale().toFile('resized.png');
