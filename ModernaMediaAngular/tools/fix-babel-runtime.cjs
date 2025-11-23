#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'node_modules', '@babel', 'runtime');
const target = path.join(
  root,
  'node_modules',
  '@angular-devkit',
  'build-angular',
  'node_modules',
  '@babel',
  'runtime'
);

if (!fs.existsSync(source)) {
  console.warn('[postinstall] Skipping Babel runtime sync – source not found.');
  process.exit(0);
}

const targetParent = path.dirname(target);
fs.mkdirSync(targetParent, { recursive: true });
if (fs.existsSync(target)) {
  fs.rmSync(target, { recursive: true, force: true });
}

fs.cpSync(source, target, { recursive: true });
console.log('[postinstall] Synced @babel/runtime into build-angular.');
