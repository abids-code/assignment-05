function getInputFieldValueById (id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldValueById (id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;  
}

function showPageById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}