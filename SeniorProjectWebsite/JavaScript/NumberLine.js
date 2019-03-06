window.addEventListener("load", NumberLine);

function NumberLine()
{
    var codeElement = document.getElementById("codeHTML");
    var codeString = codeElement.innerHTML;

    codeString = insert(codeString, 0, "1. ");
    var line = 1;

    for (var i = 0; i < codeString.length; i++)
    {
        if (codeString[i - 1] == "\n")
        {
            line++;
            if (line < 10)
                codeString = insert(codeString, i, line + ".   ");
            else if (line < 100)
                codeString = insert(codeString, i, line + ".  ");
            else
                codeString = insert(codeString, i, line + ". ");
        }
    }
    codeElement.innerHTML = codeString;
}

function insert(mainString, index, string)
{
    if (index > 0)
        return mainString.substring(0, index) + string + mainString.substring(index, mainString.length);
    return string + mainString;
}
