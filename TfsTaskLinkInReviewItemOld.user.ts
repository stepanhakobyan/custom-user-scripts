window.addEventListener('load', function() {
    const reviewId = WPQ2ListData.Row[0].ID;
    let request = new XMLHttpRequest();
    request.open("GET", `https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/items(${reviewId})`, true);
    request.withCredentials = true;
    request.setRequestHeader("Accept", "application/json;odata=verbose");
    request.onreadystatechange = function (): void {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                //let myJson = JSON.parse(request.responseText) as SPListItem;
                let myJson = JSON.parse(request.responseText) as SharePoint.IListItem;
                const tfsTaskId = myJson.d.OData__x053d__x0576__x0564__x0580__x05; //Խնդրի ISN
                console.log("tfsTaskId is " + tfsTaskId);
                const tfsLinkText = myJson.d.linktotask;
                console.log("and the link is " + tfsLinkText);

                const titleTag = document.getElementById("pageTitle");
                const parentTag = titleTag.parentElement;
                let linkHtml = "<h2>" + tfsLinkText + "<span>&nbsp;</span></h2>"
                parentTag.innerHTML = parentTag.innerHTML + linkHtml;
                    
            } else {
                console.error(request.responseText);
            }
        }
    };
    request.send();
});
