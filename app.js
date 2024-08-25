function encrypt() {
    const textInput = document.getElementById("text-input").value;
    const messageTitle = document.getElementById("message-title");
    const messageParagraph = document.getElementById("message-paragraph");
    const resultImage = document.querySelector(".result-image");
    const resultText = document.getElementById("result-text");
    const copyButton = document.getElementById("copy-btn");

    const encryptedText = textInput
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (textInput.length !== 0) {
        document.getElementById("text-input").value = encryptedText;
        messageTitle.textContent = "Texto encriptado con éxito";
        messageParagraph.textContent = "";
        resultImage.style.display = "none";
        resultText.textContent = encryptedText;
        resultText.style.display = "block";
        copyButton.style.display = "block";
    } else {
        resultImage.style.display = "block";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        resultText.style.display = "none";
        copyButton.style.display = "none";
    }
}

function decrypt() {
    const textInput = document.getElementById("text-input").value;
    const messageTitle = document.getElementById("message-title");
    const messageParagraph = document.getElementById("message-paragraph");
    const resultImage = document.querySelector(".result-image");
    const resultText = document.getElementById("result-text");
    const copyButton = document.getElementById("copy-btn");

    const decryptedText = textInput
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textInput.length !== 0) {
        document.getElementById("text-input").value = decryptedText;
        messageTitle.textContent = "Texto desencriptado con éxito";
        messageParagraph.textContent = "";
        resultImage.style.display = "none";
        resultText.textContent = decryptedText;
        resultText.style.display = "block";
        copyButton.style.display = "block";
    } else {
        resultImage.style.display = "block";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        resultText.style.display = "none";
        copyButton.style.display = "none";
    }
}

function copyText() {
    const resultText = document.getElementById("result-text");
    resultText.select();
    document.execCommand("copy");
}

document.getElementById("copy-btn").addEventListener("click", copyText);
