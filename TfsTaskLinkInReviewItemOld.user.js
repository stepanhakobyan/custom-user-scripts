window.addEventListener('load', function () {
    var reviewId = WPQ2ListData.Row[0].ID;
    var request = new XMLHttpRequest();
    request.open("GET", "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/items(" + reviewId + ")", true);
    request.withCredentials = true;
    request.setRequestHeader("Accept", "application/json;odata=verbose");
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                //let myJson = JSON.parse(request.responseText) as SPListItem;
                var myJson = JSON.parse(request.responseText);
                var tfsTaskId = myJson.d.OData__x053d__x0576__x0564__x0580__x05; //Խնդրի ISN
                console.log("tfsTaskId is " + tfsTaskId);
                var tfsLinkText = myJson.d.linktotask;
                console.log("and the link is " + tfsLinkText);
                var titleTag = document.getElementById("pageTitle");
                var parentTag = titleTag.parentElement;
                var linkHtml = "<h2>" + tfsLinkText + "<span>&nbsp;</span></h2>";
                parentTag.innerHTML = parentTag.innerHTML + linkHtml;
            }
            else {
                console.error(request.responseText);
            }
        }
    };
    request.send();
});
