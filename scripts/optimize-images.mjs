import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root=process.cwd();
const sourceDir=path.join(root,"public","images");
const outputDir=path.join(sourceDir,"optimized");
const files=await fs.readdir(sourceDir);
await fs.mkdir(outputDir,{recursive:true});

for(const file of files.filter(name=>/\.(jpe?g|png)$/i.test(name))){
  const input=path.join(sourceDir,file);
  const base=path.basename(file,path.extname(file));
  const image=sharp(input).rotate();
  await image.clone().resize({width:1600,withoutEnlargement:true}).webp({quality:82}).toFile(path.join(outputDir,`${base}.webp`));
  await image.clone().resize({width:1600,withoutEnlargement:true}).avif({quality:55}).toFile(path.join(outputDir,`${base}.avif`));
}
console.log(`Optimized ${files.filter(name=>/\.(jpe?g|png)$/i.test(name)).length} source images.`);
