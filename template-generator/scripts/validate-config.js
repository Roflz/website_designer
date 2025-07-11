// validate-config.js
const fs = require('fs');
const path = require('path');
const { businessConfigSchema, portfolioConfigSchema } = require('./generate.js');

function validateConfig(config, schema, pathStr = '') {
  for (const key in schema) {
    const expected = schema[key];
    const actual = config[key];
    const currentPath = pathStr ? `${pathStr}.${key}` : key;
    if (Array.isArray(expected)) {
      if (!Array.isArray(actual)) return `Expected array at ${currentPath}`;
      if (expected.length > 0 && actual.length > 0) {
        for (let i = 0; i < actual.length; i++) {
          const err = validateConfig(actual[i], expected[0], `${currentPath}[${i}]`);
          if (err) return err;
        }
      }
    } else if (typeof expected === 'object') {
      if (typeof actual !== 'object' || actual === null) return `Expected object at ${currentPath}`;
      const err = validateConfig(actual, expected, currentPath);
      if (err) return err;
    } else {
      if (typeof actual !== expected) return `Expected ${expected} at ${currentPath}`;
    }
  }
  return null;
}

function loadConfig(configPath) {
  const ext = path.extname(configPath);
  if (ext === '.json') {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } else if (ext === '.js' || ext === '.ts') {
    // Use require for .js, dynamic import for .ts (if supported)
    // For .ts, require may not work unless compiled, so recommend .js/.json for validation
    return require(path.resolve(configPath));
  } else {
    throw new Error('Unsupported config file type. Use .js, .ts, or .json');
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node validate-config.js <config-file> <template-type: business|portfolio>');
    process.exit(1);
  }
  const [configFile, templateType] = args;
  let config;
  try {
    config = loadConfig(configFile);
  } catch (e) {
    console.error('Failed to load config:', e.message);
    process.exit(1);
  }
  let schema;
  if (templateType === 'business') schema = businessConfigSchema;
  else if (templateType === 'portfolio') schema = portfolioConfigSchema;
  else {
    console.error('Invalid template type. Use "business" or "portfolio".');
    process.exit(1);
  }
  const validationError = validateConfig(config, schema);
  if (validationError) {
    console.error('Config validation failed:', validationError);
    process.exit(1);
  }
  console.log('Config is valid!');
}

if (require.main === module) {
  main();
} 