// text-analytics-kit.js

const natural = require('natural');

/**
 * Tokenize text into an array of words.
 * @param {string} text - The text to tokenize.
 * @returns {string[]} - An array of words.
 */
function tokenize(text) {
  const tokenizer = new natural.WordTokenizer();
  return tokenizer.tokenize(text);
}

/**
 * Calculate the term frequency (TF) of each word in a document.
 * @param {string} document - The document to analyze.
 * @returns {Object} - An object containing the term frequency of each word.
 */
function calculateTermFrequency(document) {
  const words = tokenize(document);
  const tf = {};
  words.forEach(word => {
    tf[word] = (tf[word] || 0) + 1;
  });
  const totalWords = words.length;
  for (const word in tf) {
    tf[word] /= totalWords;
  }
  return tf;
}

/**
 * Calculate the inverse document frequency (IDF) of each word in a collection of documents.
 * @param {string[]} documents - An array of documents.
 * @returns {Object} - An object containing the inverse document frequency of each word.
 */
function calculateInverseDocumentFrequency(documents) {
  const idf = {};
  const totalDocuments = documents.length;
  const wordDocumentMap = {};
  documents.forEach(document => {
    const words = new Set(tokenize(document));
    words.forEach(word => {
      if (!wordDocumentMap[word]) {
        wordDocumentMap[word] = 1;
      } else {
        wordDocumentMap[word]++;
      }
    });
  });
  for (const word in wordDocumentMap) {
    idf[word] = Math.log(totalDocuments / (wordDocumentMap[word] + 1));
  }
  return idf;
}

module.exports = {
  tokenize,
  calculateTermFrequency,
  calculateInverseDocumentFrequency
};
