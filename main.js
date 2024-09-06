import './style.css';
import { checkPalindrome } from './palindrome.js';

document.querySelector('#app').innerHTML = `
  <input type="text" id="inputString" placeholder="Enter a string" />
  <button id="checkPalindrome" type="button">Check Palindrome</button>
  <p id="result"></p>
`;

document.querySelector('#checkPalindrome').addEventListener('click', () => {
    const inputString = document.querySelector('#inputString').value;
    const result = checkPalindrome(inputString);
    document.querySelector('#result').textContent = result;
});
