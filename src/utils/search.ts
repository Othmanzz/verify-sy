import { FactCheck } from '../types';

// Simple semantic similarity function using word overlap and fuzzy matching
export function calculateSimilarity(query: string, text: string): number {
  const queryWords = query.toLowerCase().split(' ').filter(word => word.length > 2);
  const textWords = text.toLowerCase().split(' ').filter(word => word.length > 2);
  
  if (queryWords.length === 0 || textWords.length === 0) {
    return 0;
  }
  
  let score = 0;
  
  queryWords.forEach(queryWord => {
    textWords.forEach(textWord => {
      // Exact match
      if (queryWord === textWord) {
        score += 2;
      }
      // Substring match
      else if (queryWord.includes(textWord) || textWord.includes(queryWord)) {
        score += 1;
      }
      // Fuzzy match for Arabic text (similar characters)
      else if (fuzzyMatch(queryWord, textWord)) {
        score += 0.5;
      }
    });
  });
  
  // Normalize score based on query length and text length
  const maxPossibleScore = queryWords.length * 2;
  const normalizedScore = score / maxPossibleScore;
  
  return normalizedScore;
}

// Simple fuzzy matching for similar Arabic words
function fuzzyMatch(word1: string, word2: string): boolean {
  if (Math.abs(word1.length - word2.length) > 2) {
    return false;
  }
  
  const minLength = Math.min(word1.length, word2.length);
  if (minLength < 3) {
    return false;
  }
  
  let matchCount = 0;
  for (let i = 0; i < minLength; i++) {
    if (word1[i] === word2[i]) {
      matchCount++;
    }
  }
  
  return matchCount / minLength > 0.7;
}

// Enhanced semantic search function
export function semanticSearch(query: string, factChecks: FactCheck[]): FactCheck[] {
  if (!query.trim()) {
    return factChecks;
  }
  
  const queryLower = query.toLowerCase().trim();
  
  // Calculate semantic similarity for each fact check
  const searchResults = factChecks.map(factCheck => {
    // Search in multiple fields with different weights
    const titleScore = calculateSimilarity(queryLower, factCheck.title) * 3;
    const summaryScore = calculateSimilarity(queryLower, factCheck.summary) * 2;
    const categoryScore = calculateSimilarity(queryLower, factCheck.category) * 1;
    const tagScore = factCheck.tags.reduce((acc, tag) => 
      acc + calculateSimilarity(queryLower, tag), 0) * 1.5;
    
    // Check for exact category matches
    const exactCategoryMatch = factCheck.category.toLowerCase().includes(queryLower) ? 2 : 0;
    
    // Check for exact tag matches
    const exactTagMatch = factCheck.tags.some(tag => 
      tag.toLowerCase().includes(queryLower)) ? 1.5 : 0;
    
    // Boost score for featured articles
    const featuredBoost = factCheck.featured ? 0.2 : 0;
    
    // Combine all scores
    const totalScore = titleScore + summaryScore + categoryScore + tagScore + 
                      exactCategoryMatch + exactTagMatch + featuredBoost;
    
    return {
      factCheck,
      score: totalScore
    };
  });
  
  // Filter results with minimum score threshold
  const minScore = 0.1;
  const filteredResults = searchResults
    .filter(result => result.score >= minScore)
    .sort((a, b) => b.score - a.score);
  
  return filteredResults.map(result => result.factCheck);
}

// Enhanced search with query suggestions
export function getSearchSuggestions(query: string, factChecks: FactCheck[]): string[] {
  if (!query.trim() || query.length < 2) {
    return [];
  }
  
  const queryLower = query.toLowerCase();
  const suggestions = new Set<string>();
  
  // Extract suggestions from categories
  factChecks.forEach(factCheck => {
    if (factCheck.category.toLowerCase().includes(queryLower)) {
      suggestions.add(factCheck.category);
    }
    
    // Extract suggestions from tags
    factCheck.tags.forEach(tag => {
      if (tag.toLowerCase().includes(queryLower)) {
        suggestions.add(tag);
      }
    });
    
    // Extract suggestions from title words
    const titleWords = factCheck.title.toLowerCase().split(' ');
    titleWords.forEach(word => {
      if (word.length > 3 && word.includes(queryLower)) {
        suggestions.add(word);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 5);
}

// Popular search terms based on content analysis
export const popularSearchTerms = [
  'كوفيد-19',
  'لقاحات',
  'صحة',
  'اقتصاد',
  'سياسة',
  'تكنولوجيا',
  'بيئة',
  'تعليم',
  'إحصائيات',
  'معلومات مضللة'
];