/**
 * Utilities for creating hidden instructions in text
 * These functions are used to demonstrate Tool Poisoning Attack (TPA) techniques
 */

/**
 * Hides text using zero-width spaces between characters
 * @param text The text to hide
 * @returns Text with zero-width spaces inserted
 */
export function hideWithZeroWidth(text: string): string {
  // Zero-width space character
  const ZWSP = '\u200B';
  
  // Insert zero-width space between each character
  return text.split('').join(ZWSP);
}

/**
 * Hides text in HTML comments
 * @param text The text to hide
 * @returns Text wrapped in HTML comments
 */
export function hideWithHtmlComments(text: string): string {
  return `<!-- ${text} -->`;
}

/**
 * Encodes text in Base64
 * @param text The text to encode
 * @returns Base64 encoded text
 */
export function hideWithBase64(text: string): string {
  return Buffer.from(text).toString('base64');
}

/**
 * Replaces characters with similar-looking Unicode homoglyphs
 * @param text The text to obfuscate
 * @returns Text with some characters replaced by homoglyphs
 */
export function hideWithHomoglyphs(text: string): string {
  const homoglyphMap: Record<string, string> = {
    'a': 'а', // Cyrillic 'а' (U+0430) instead of Latin 'a'
    'e': 'е', // Cyrillic 'е' (U+0435) instead of Latin 'e'
    'o': 'о', // Cyrillic 'о' (U+043E) instead of Latin 'o'
    'p': 'р', // Cyrillic 'р' (U+0440) instead of Latin 'p'
    'c': 'с', // Cyrillic 'с' (U+0441) instead of Latin 'c'
    'x': 'х', // Cyrillic 'х' (U+0445) instead of Latin 'x'
  };
  
  return text.split('').map(char => homoglyphMap[char] || char).join('');
}

/**
 * Creates a markdown link with hidden JavaScript
 * @param visibleText The visible text of the link
 * @param jsCode The JavaScript code to hide
 * @returns Markdown link with hidden JavaScript
 */
export function createHiddenJsLink(visibleText: string, jsCode: string): string {
  return `[${visibleText}](javascript:${jsCode})`;
}

/**
 * Combines multiple hiding techniques
 * @param text The text to hide
 * @returns Text hidden with multiple techniques
 */
export function hideWithMultipleTechniques(text: string): string {
  // First encode with Base64
  const base64Text = hideWithBase64(text);
  
  // Then hide with zero-width spaces
  const zwspText = hideWithZeroWidth(base64Text);
  
  // Finally wrap in HTML comments
  return hideWithHtmlComments(zwspText);
}