const inputText = document.getElementById('text-input');
const decoderContainer = document.getElementById('decoder-container');
const decoderReturn = document.getElementById('decoder-return');
const encryptButton = document.getElementById('button-encrypt');
const decryptButton = document.getElementById('button-decrypt');
const copyButton = document.getElementById('button-copy')
const clearButton = document.getElementById('button-clear')
const darkMode = document.getElementById('toggle-dark-mode')
let decrypt = document.getElementById('decrypt-return');



function encryptText() {

    if (inputText.value != "") {

        decrypt.innerHTML = inputText.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

        decoderReturn.classList.remove('hidden');
        decoderContainer.classList.add('hidden');
    }
}

function decryptText() {
    let inputValue = inputText.value;
    let hasEncryptedChars = /enter|imes|ai|ober|ufat/.test(inputValue);

    if (hasEncryptedChars) {
        decrypt.innerHTML = inputText.value.replaceAll("imes", "i").replaceAll("enter", "e").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    }

    decoderReturn.classList.remove('hidden');
    decoderContainer.classList.add('hidden');
}

function copyToClipboard() {
    navigator.clipboard.writeText(decrypt.innerHTML);
}

function clearDecrypt() {
    inputText.value = ""
    decoderReturn.classList.add('hidden');
    decoderContainer.classList.remove('hidden');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

encryptButton.addEventListener('click', () => encryptText());
decryptButton.addEventListener('click', () => decryptText());

copyButton.addEventListener('click', () => copyToClipboard());
clearButton.addEventListener('click', () => clearDecrypt());

darkMode.addEventListener('click', () => toggleDarkMode())