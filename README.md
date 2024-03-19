# Trumposwere

A collection of text analytics functions for Node.js applications.

## Installation

You can install this module via npm: `npm install trumposwere`

## Usage

```javascript
const textAnalytics = require('text-analytics-kit');

// Tokenize text
const text = "The quick brown fox jumps over the lazy dog";
console.log('Tokenized:', textAnalytics.tokenize(text));

// Calculate term frequency
const document = "The quick brown fox jumps over the lazy dog";
console.log('Term Frequency:', textAnalytics.calculateTermFrequency(document));

// Calculate inverse document frequency
const documents = [
  "The quick brown fox jumps over the lazy dog",
  "The lazy dog slept in the sun"
];
console.log('Inverse Document Frequency:', textAnalytics.calculateInverseDocumentFrequency(documents));
```
