const fs = require('fs').promises;

async function filefyArray() {
  const stringArray = ['Get', 'away', 'from', 'Stone', 'Ocean'];

  const createFiles = stringArray.map((str, idx) => fs.writeFile(`./file${idx + 1}.txt`, str));

  await Promise.all(createFiles);

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFilesNames = files.map((name) => fs.readFile(name, 'utf-8'));

  const waitRead = await Promise.all(readFilesNames);

  const createNewFile = waitRead.join(' ');

  
  await fs.writeFile('./allContent.txt', createNewFile);

  console.log(createNewFile);
}

filefyArray();