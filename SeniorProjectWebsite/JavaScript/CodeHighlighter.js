window.addEventListener("load", CodeHighlighter);
import { Color } from "./Color.js";

function CodeHighlighter()
{
    var codeElement = document.getElementById("codeHTML");
    var codeString = codeElement.innerHTML;

    //Colors
    var green    = new Color(0, 150, 0);
    var black    = new Color(0, 0, 0);
    var darkBlue = new Color(0, 0, 150);
    var orange   = new Color(230, 140, 0);

    //Close span const
    const closeSpan = "</span>";

    //True when inside element creation
    var inElem = false;

    for (var i = 0; i < codeString.length; i++)
    {
        if (codeString.slice(i, i + 7) == "&lt;!--")
        {
            var openSpan = "<span style=\"color: " + green.Code() + ";\">";
            codeString = insert(codeString, i, openSpan);
            i += openSpan.length;
            i += 7;

            while (codeString.slice(i, i + 4) != "&gt;")
                i++;
            i += 4;
            codeString = insert(codeString, i, closeSpan);
            i += closeSpan.length;
        }
        if (codeString.slice(i, i + 4) == "&lt;")
        {
            inElem = true;
            var openSpan = "<span style=\"color: " + black.Code() + "; font-weight: bold;\">";
            codeString = insert(codeString, i, openSpan);

            i += openSpan.length;
            i += 4;

            if (codeString[i] == "/")
                i++;

            codeString = insert(codeString, i, closeSpan);

            i += closeSpan.length;

            openSpan = "<span style=\"color: " + darkBlue.Code() + "; font-weight: bold;\">";
            codeString = insert(codeString, i, openSpan);
            i += openSpan.length;

            while (codeString[i] != " " && codeString.slice(i, i + 4) != "&gt;")
                i++;

            codeString = insert(codeString, i, closeSpan);
            i += closeSpan.length;
        }
        if (inElem && codeString[i] == "\"")
        {
            var openSpan = "<span style=\"color: " + orange.Code() + ";\">";
            codeString = insert(codeString, i, openSpan);
            i += openSpan.length;

            i++;
            while (codeString[i] != "\"")
                i++;
            i++;
            codeString = insert(codeString, i, closeSpan);
            i += closeSpan.length;
        }
        if (inElem && (codeString.slice(i, i + 4) == "&gt;" || codeString.slice(i, i + 5) == "/&gt;" ))
        {
            var openSpan = "<span style=\"color: " + black.Code() + "; font-weight: bold;\">";
            codeString = insert(codeString, i, openSpan);

            i += openSpan.length;
            i += 4;
            if (codeString[i] == ";")
                i++;

            codeString = insert(codeString, i, closeSpan);
            i += closeSpan.length;

            i--;

            inElem = false;
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

