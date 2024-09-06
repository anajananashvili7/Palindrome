
export function checkPalindrome(s) {
    const cleanedString = s.replace(/\s+/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    
    
    if (cleanedString === reversedString) {
        return "This string is a palindrome";
    } else {
        return "This string is not a palindrome";
    }
}
