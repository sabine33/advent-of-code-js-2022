// var treeify = require("treeify");
const data: string[] = require("fs")
  .readFileSync("data.txt")
  .toString()
  .split("\n");

class Files {
  name: string;
  parent?: Folders;
  size: number;
  constructor(name: string, size: number, parent?: Folders) {
    this.name = name;
    this.parent = parent;
    this.size = size;
  }
}

class Folders {
  name: string;
  parent?: Folders | null;
  files: Files[] = [];
  subFolders: Folders[] = [];

  constructor(name: string, parent?: Folders) {
    this.name = name;
    this.parent = parent;
  }
  calculateSize() {
    let total = 0;
    this.files.forEach((file: Files) => (total += file.size));
    if (this.subFolders.length < 1) return total;
    this.subFolders.forEach((folder: Folders) => {
      total += folder.calculateSize();
    });
    return total;
  }
}

let allFoldersList: Folders[] = [];
let rootFolder: Folders = new Folders("/");
allFoldersList.push(rootFolder);
let currentFolder: Folders = rootFolder;

const traverse = () => {
  data.forEach((command) => {
    if (command.startsWith("$ cd ")) {
      let folderName = command.split(" ")[2];
      console.log(folderName);
      if (folderName == "..") {
        currentFolder = currentFolder.parent || rootFolder;
      } else {
        currentFolder =
          currentFolder.subFolders.find((x) => x.name == folderName) ||
          currentFolder;
      }
    }
    if (command.startsWith("dir")) {
      let folderName = command.split(" ")[1];
      let folder = new Folders(folderName, currentFolder);
      currentFolder.subFolders.push(folder);
      allFoldersList.push(folder);
    }

    if (Number.isInteger(Number.parseInt(command.split(" ")[0]))) {
      let [fileSize, fileName] = command.split(" ");
      currentFolder.files.push(new Files(fileName, +fileSize, currentFolder));
    }
  });
};

const traverseTree = (parent: Folders) => {
  if (parent.files) {
    parent.files.forEach((file) => {
      console.log(file);
    });
  }
  if (parent.subFolders.length < 1) {
    return parent.calculateSize();
  } else {
    parent.subFolders.forEach((folder: Folders) => {
      console.log(folder);
    });
  }
  console.log(parent.calculateSize());
};

const calculateSmallestFolder = (foldersList: Folders[]) => {
  let smallestFolderSize = foldersList[0].calculateSize();
  let [availableSpace, neededSpace] = [70000000, 0];
  let freeSpaceAtRoot = availableSpace - smallestFolderSize;
  neededSpace = 30000000 - freeSpaceAtRoot;
  allFoldersList.forEach((item) => {
    if (
      item.calculateSize() <= smallestFolderSize &&
      item.calculateSize() >= neededSpace
    ) {
      smallestFolderSize = item.calculateSize();
    }
  });
  console.log(smallestFolderSize);
  return smallestFolderSize;
};

const roundTwoAnswer = () => {
  return calculateSmallestFolder(allFoldersList);
};

const roundOneAnswer = () => {
  const CAP_MAX = 100000;
  let sumOfDiskSizes = 0;
  for (var Folders of allFoldersList) {
    let allFoldersListize = Folders.calculateSize();
    if (allFoldersListize <= CAP_MAX) {
      sumOfDiskSizes += allFoldersListize;
    }
  }
  return sumOfDiskSizes;
};
traverse();

console.log(roundOneAnswer());
console.log(roundTwoAnswer());
// console.log(treeify.asTree({ rootFolder }, true));
