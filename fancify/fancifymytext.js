biggify = () => {document.getElementById("textarea").style.fontSize = "24pt";}
fancy = () => {textarea = document.getElementById("textarea")
            textarea.style.fontWeight = "bold";
            textarea.style.color = "blue";
            textarea.style.textDecoration = 'underline';

} // fancy
boring = () => {textarea = document.getElementById("textarea")
textarea.style.fontWeight = "normal";
textarea.style.color = "black";
textarea.style.textDecoration = "none";
}// boring
moo = () => {
  //  textarea.value = textarea.value.toUpperCase();
    let text = textarea.value;
    let parts = text.split(".");
    textarea.value = parts.join("moo");


}