const fs = require('fs');
const path = require('path');

// Folder dan file berat/otomatis yang perlu diabaikan
const IGNORE_LIST = [
  'node_modules', 
  '.next', 
  '.git', 
  'dist', 
  'build', 
  '.DS_Store', 
  'coverage', 
  'package-lock.json', 
  'yarn.lock', 
  'pnpm-lock.yaml'
];

function generateTree(dirPath, prefix = '') {
  let result = '';
  let items;
  
  try {
    items = fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(item => !IGNORE_LIST.includes(item.name))
      .sort((a, b) => {
        // Folder ditaruh di atas, file di bawah
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });
  } catch (err) {
    return '';
  }

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const icon = item.isDirectory() ? '📁 ' : '📄 ';
    
    result += `${prefix}${connector}${icon}${item.name}${item.isDirectory() ? '/' : ''}\n`;

    if (item.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      const fullPath = path.join(dirPath, item.name);
      result += generateTree(fullPath, newPrefix);
    }
  });

  return result;
}

const projectRoot = process.cwd();
const header = `=================================================\n` +
               ` STRUKTUR LENGKAP PROJECT (FOLDER & FILE)\n` +
               `=================================================\n\n project-root/\n`;

const fullStructure = header + generateTree(projectRoot);

fs.writeFileSync('struktur-project-lengkap.txt', fullStructure);
console.log('✅ Berhasil! Daftar lengkap folder & file disimpan ke "struktur-project-lengkap.txt"');