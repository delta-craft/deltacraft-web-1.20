/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const path = require("path");
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const webp = require("webp-converter");

const SRC_DIR = "images";
const DEST_DIR = "public/images";

webp.grant_permission();

const convertImage = async imagePath => {
  // join path
  try {
    const destPath = path.join(__dirname, DEST_DIR, path.basename(imagePath));
    await webp.cwebp(imagePath, `${destPath}.webp`, "-q 80");
    console.log(`Converted ${imagePath} to ${destPath}.webp`);
  } catch (err) {
    console.log(err);
  }
};

const dir = path.join(__dirname, SRC_DIR);

// read all .jpg and .pnd files
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach(file => {
    // is file a jpg or png
    if (!file.match(/\.(jpg|png)$/)) {
      return;
    }

    const filePath = path.join(dir, file);
    convertImage(filePath);
  });
});
