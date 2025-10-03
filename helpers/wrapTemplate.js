export function wrapTemplate(campaign, data) {
    const document = new DOMParser().parseFromString(campaign, 'text/html')
    document.body.innerHTML = data.html
    document.head.innerHTML += "<style>" + data.style + "</style>"
    const doctype = new XMLSerializer().serializeToString(document.doctype);
    return doctype + document.documentElement.outerHTML
}