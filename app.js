var textarea = document.querySelector('textarea');
var bold = document.querySelector('#bold');
var underline = document.querySelector('#underline');
var italize = document.querySelector('#italize');
var paragraph = document.querySelector('#paragraph');
var leftAlign = document.querySelector('#lalign');
var rightAlign = document.querySelector('#ralign');
var centerAlign = document.querySelector('#calign');
var justify = document.querySelector('#jalign');
var btext = '', utext = '', itext = '', lalign ='', ralign='', calign ='', jalign ='';

textToChange = (elem=textarea)=>{
    elem.addEventListener('select', (e)=>{
        btext = `<strong>${window.getSelection().toString().trim()}</strong>`;
        utext = `<span style="text-decoration: underline;">${window.getSelection().toString().trim()}</span>`;
        itext = `<em>${window.getSelection().toString().trim()}</em>`;
        lalign = `<span style="text-align: left;">${window.getSelection().toString().trim()}</span>`;
        ralign = `<span style="text-align: right;">${window.getSelection().toString().trim()}</span>`;
        calign = `<span style="text-align: center;">${window.getSelection().toString().trim()}</span>`;
        jalign = `<span style="text-align: justify;">${window.getSelection().toString().trim()}</span>`;
    });
}

function getInputSelection(elem){
    var start = 0, end = 0;
    if (typeof elem.selectionStart == 'number' && typeof elem.selectionEnd == 'number') {
        start = elem.selectionStart;
        end = elem.selectionEnd;
    }
    return {start: start, end: end}
};

function replaceSelectedText(elem, newText){
    var sel = getInputSelection(elem), val = elem.value;
    elem.value = val.slice(0, sel.start) + newText + val.slice(sel.end);
    btext = '', utext = '', itext = '', lalign ='', ralign='', calign ='', jalign ='';
}

textToChange();
bold.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, btext);
};

underline.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, utext);
};

italize.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, itext);
};

paragraph.onclick = e => {
    e.preventDefault();
    paragraph = '<br>'
    replaceSelectedText(textarea, paragraph);
};

leftAlign.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, lalign);
};

rightAlign.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, ralign);
};

centerAlign.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, calign);
};

justify.onclick = e => {
    e.preventDefault();
    replaceSelectedText(textarea, jalign);
};
