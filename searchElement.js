function highlightElem (elem, searchTag) {


    /* Assign title */
    const elemTitle = "<" + elem.tagName.toLowerCase() + ">";
    const parentTitle = elem.parentElement.title;
    elem.title = parentTitle + elemTitle;    

    if (elem.tagName === searchTag) {
        console.log (parentTitle + elemTitle);
        elem.style.backgroundColor = "mistyrose";
        elem.style.color = "black";
    }

    /* Check for children and assign title */
    Array.from(elem.children).forEach(highlightElem);
};

highlightElem (document.body, "HEADER");