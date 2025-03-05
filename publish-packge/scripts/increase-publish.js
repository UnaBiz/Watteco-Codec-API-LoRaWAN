const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('../package.json');

const version = packageJson.version;
const versionArray = version.split('.');
const newVersion = `${versionArray[0]}.${versionArray[1]}.${parseInt(versionArray[2], 10) + 1
  }`;

packageJson.version = newVersion;

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(packageJson, null, 2),
);

execSync('npm publish');

console.log(`Published ${newVersion} success!`);
