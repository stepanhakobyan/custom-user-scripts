// ==UserScript==
// @name        Show all comments
// @version     1.2
// @match       https://www.patreon.com/posts/*
// @grant       none
// @icon        https://c5.patreon.com/external/favicon/favicon-32x32.png
// @updateURL   https://github.com/stepanhakobyan/custom-user-scripts/raw/master/Patreon/patreon-show-all-comments.user.js
// @downloadURL https://github.com/stepanhakobyan/custom-user-scripts/raw/master/Patreon/patreon-show-all-comments.user.js
// @homepageURL https://github.com/stepanhakobyan/custom-user-scripts/tree/master/Patreon
// ==/UserScript==


window.addEventListener("load", ()=> {
  const wrapper = document.getElementById("renderPageContentWrapper");
  const mainDiv = wrapper.firstChild;
	const div = document.createElement("div");
  mainDiv.prepend(div);
  
  const allComments = document.createElement("div");
  allComments.innerHTML = "<button onclick='showAllComments(true);'>All Comments <br/> in New Window ↗<br/> in Table</button>"
  										+ "<button onclick='showAllComments(false);'>All Comments <br/> in This Window <br/> in Table</button>"
  										+ "<button onclick='showAllCommentsFlat(true);'>All Comments <br/> In New Window ↗<br/> in Flow</button>"
  										+ "<button onclick='showAllCommentsFlat(false);'>All Comments <br/> In This Window <br/> in Flow</button>";
  div.append(allComments);
  
  const newScript = document.createElement("script");
  newScript.textContent = showAllComments.toString() 
    										+ showAllCommentsFlat.toString();
  div.append(newScript);
});

function showAllComments(showInNewWindow) {
  const loc = document.location.href;
  const postId = loc.substring(loc.lastIndexOf("-")+1);			//36881796
  
  const longUrl = "https://www.patreon.com/api/posts/" + postId + "/comments" 
        + "?include=commenter.campaign.null%2Ccommenter.flairs.campaign%2Cparent%2Cpost%2Cfirst_reply.commenter.campaign.null%2Cfirst_reply.parent%2Cfirst_reply.post%2Cexclude_replies%2Con_behalf_of_campaign.null%2Cfirst_reply.on_behalf_of_campaign.null" 
        + "&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote%2Creply_count" 
        + "&fields[post]=comment_count" 
        + "&fields[user]=image_url%2Cfull_name%2Curl" 
        + "&fields[flair]=image_tiny_url%2Cname" 
        + "&page[count]=10000" 
        + "&sort=created" 
        + "&json-api-use-default-includes=false" 
        + "&json-api-version=1.0";
  
//  const shortUrl = "https://www.patreon.com/api/posts/" + postId + "/comments?page[count]=1000&sort=created" 
//  	+ "&" + "json-api-use-default-includes=false"
//  	+ "&" + "include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null";
  
  
  //https://www.patreon.com/api/posts/36473589/comments?page[count]=10000&sort=created&json-api-use-default-includes=false&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null
  
  
  //https://www.patreon.com/api/posts/36881796/comments?page[count]=1000&sort=created&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&json-api-use-default-includes=false
  //&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&
  
  //replies
  //https://www.patreon.com/api/comments/36574431/replies
  //https://www.patreon.com/api/comments/36342081/replies?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote&fields[flair]=image_tiny_url%2Cname&fields[post]=comment_count&fields[user]=image_url%2Cfull_name%2Curl&json-api-use-default-includes=false&json-api-version=1.0
  
  //https://www.patreon.com/api/comments/36355620/replies?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote&fields[flair]=image_tiny_url%2Cname&fields[post]=comment_count&fields[user]=image_url%2Cfull_name%2Curl&json-api-use-default-includes=false&json-api-version=1.0
  //https://www.patreon.com/api/comments/36355620/replies
  
  fetch(longUrl)
  	.then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    	
    	let win = null
    	if (showInNewWindow) {
        win = window.open("", "All Comments " + Math.random().toString());
      } else {
        win = window;
        win.document.body.innerHTML = "";
      }
      
      if (win) {
        const winHead = win.document.head;
        let style = win.document.createElement("style");
        style.innerText = "table, th, td { border: 1px solid lightgray; border-spacing: 0px; border-collapse: collapse; } " 
                        + "td { padding: 5px; vertical-align: top; } "
                        + "#mainContainer { padding: 25px; } "
                        + "a { text-decoration: none; font-weight: 700; color: black; } "
                        + "a:hover { text-decoration: underline; } "
                        + "html { font-family: sans-serif; } "
                        + " "
                        + "@media print { "
                        + "  #mainContainer { padding: 0px; }"
                        + "} "
        								+ " ";
        winHead.append(style);
        
        let title = win.document.createElement("title");
        title.innerText = "Show All Comments";
        winHead.append(title);
        
        const winBody = win.document.body;
        const mainContainer = win.document.createElement("div");
        mainContainer.id = "mainContainer";
        winBody.append(mainContainer);
        
        let table = win.document.createElement("table");
        mainContainer.append(table);
        let thead = win.document.createElement("thead");
        table.append(thead);
        let theadtr = win.document.createElement("tr");
        thead.append(theadtr);
        
        let th = win.document.createElement("th");
        th.innerText = "type";
        theadtr.append(th);
        th = win.document.createElement("th");
        th.innerText = "icon";
        theadtr.append(th);
        th = win.document.createElement("th");
        th.innerText = "name";
        theadtr.append(th);
        th = win.document.createElement("th");
        th.innerText = "comment";
        theadtr.append(th);
        th = win.document.createElement("th");
        th.innerText = "date";
        theadtr.append(th);
        
        let tbody = win.document.createElement("tbody");
        table.append(tbody);
        
        const converterArea = win.document.createElement("textarea");
        const convertHtml = (encodedText) => {
          converterArea.innerHTML = encodedText;
          return converterArea.value;
        }
        
        const repliedCommentIds = [];
        
        const addRowDetails = (item, tbodytr, myJson, commentType) => {
          let itemUser = null;
          if (item.relationships.commenter.data.type == "user") {
            for (let user of myJson.included) {
              if (user.id == item.relationships.commenter.data.id && user.type == "user") {
                itemUser = user;
                break;
              }
            }
          }
            
          let td = win.document.createElement("td");
          td.innerText = commentType;
          tbodytr.append(td);
          
          td = win.document.createElement("td");
          if (itemUser == null) {
            td.innerText = "icon";
          } else {
            const img = win.document.createElement("img");
            img.src = itemUser.attributes.image_url;
            img.width = 32;
            img.height = 32;
            td.append(img);
          }
          tbodytr.append(td);
            
          td = win.document.createElement("td");
          if (itemUser == null) {
            td.innerText = "name";
          } else {
            const link = win.document.createElement("a");
            link.href = itemUser.attributes.url;
            link.innerText = itemUser.attributes.full_name;
            td.append(link);
          }
          tbodytr.append(td);
          
          td = win.document.createElement("td");
          tbodytr.append(td);
          let span = win.document.createElement("span");
          span.innerText = convertHtml(item.attributes.body)
          td.append(span);
          
           td = win.document.createElement("td");
          tbodytr.append(td);
          td.innerText = (new Date(item.attributes.created)).toLocaleString();
        };
        
        for (let item of myJson.data) {
          if (item.type == "comment") {
            let tbodytr = win.document.createElement("tr");
            tbodytr.id = "tr" + item.id;
            tbody.append(tbodytr);
            addRowDetails(item, tbodytr, myJson, "");
            
            if (item.attributes.reply_count > 1) {
              repliedCommentIds.push(item.id);
            } 
          }
        }
        
        for (let item of myJson.included) {
          if (item.type == "comment") {
            
            if (!repliedCommentIds.includes(item.relationships.parent.data.id)) {
              let tbodytr = win.document.createElement("tr");
              tbodytr.id = "tr" + item.id;
            
              let prevTr = win.document.getElementById("tr" + item.relationships.parent.data.id);
              prevTr.parentNode.insertBefore(tbodytr, prevTr.nextSibling);

              addRowDetails(item, tbodytr, myJson, "reply");
            }
          }
        }
        
        
        for (let id of repliedCommentIds) {
          //console.log(id);
          
          const replayLongUrl = "https://www.patreon.com/api/comments/" + id + "/replies" 
          	+ "?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null" 
          	+ "&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote" 
          	+ "&fields[flair]=image_tiny_url%2Cname" 
          	+ "&fields[post]=comment_count" 
          	+ "&fields[user]=image_url%2Cfull_name%2Curl" 
          	+ "&json-api-use-default-includes=false" 
          	+ "&json-api-version=1.0";
          
          fetch(replayLongUrl)
            .then(function(replyResponse) {
              return replyResponse.json();
            })
    	    .then(function(replyJson) {
      	      console.log(replyJson);
            	
              for (let i = replyJson.data.length - 1; i >= 0; i--) {
                let item = replyJson.data[i];
                if (item.type == "comment") {
                  if (win.document.getElementById("tr" + item.id)) {
                    //reply is already in
                  } else {
                    let tbodytr = win.document.createElement("tr");
                    tbodytr.id = "tr" + item.id;

                    let prevTr = win.document.getElementById("tr" + item.relationships.parent.data.id);
                    prevTr.parentNode.insertBefore(tbodytr, prevTr.nextSibling);

                    addRowDetails(item, tbodytr, replyJson, "reply");
                  }
                }
              }
            });
        }
      }

    });
}

function showAllCommentsFlat(showInNewWindow) {
  const loc = document.location.href;
  const postId = loc.substring(loc.lastIndexOf("-")+1);			//36881796
  
  const longUrl = "https://www.patreon.com/api/posts/" + postId + "/comments" 
        + "?include=commenter.campaign.null%2Ccommenter.flairs.campaign%2Cparent%2Cpost%2Cfirst_reply.commenter.campaign.null%2Cfirst_reply.parent%2Cfirst_reply.post%2Cexclude_replies%2Con_behalf_of_campaign.null%2Cfirst_reply.on_behalf_of_campaign.null" 
        + "&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote%2Creply_count" 
        + "&fields[post]=comment_count" 
        + "&fields[user]=image_url%2Cfull_name%2Curl" 
        + "&fields[flair]=image_tiny_url%2Cname" 
        + "&page[count]=10000" 
        + "&sort=created" 
        + "&json-api-use-default-includes=false" 
        + "&json-api-version=1.0";
  
//  const shortUrl = "https://www.patreon.com/api/posts/" + postId + "/comments?page[count]=1000&sort=created" 
//  	+ "&" + "json-api-use-default-includes=false"
//  	+ "&" + "include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null";
  
  
  //https://www.patreon.com/api/posts/36473589/comments?page[count]=10000&sort=created&json-api-use-default-includes=false&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null
  
  
  //https://www.patreon.com/api/posts/36881796/comments?page[count]=1000&sort=created&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&json-api-use-default-includes=false
  //&include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&
  
  //replies
  //https://www.patreon.com/api/comments/36574431/replies
  //https://www.patreon.com/api/comments/36342081/replies?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote&fields[flair]=image_tiny_url%2Cname&fields[post]=comment_count&fields[user]=image_url%2Cfull_name%2Curl&json-api-use-default-includes=false&json-api-version=1.0
  
  //https://www.patreon.com/api/comments/36355620/replies?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote&fields[flair]=image_tiny_url%2Cname&fields[post]=comment_count&fields[user]=image_url%2Cfull_name%2Curl&json-api-use-default-includes=false&json-api-version=1.0
  //https://www.patreon.com/api/comments/36355620/replies
  
  fetch(longUrl)
  	.then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    	
    	let win = null
    	if (showInNewWindow) {
        win = window.open("", "All Comments " + Math.random().toString());
      } else {
        win = window;
        win.document.body.innerHTML = "";
      }
      
      if (win) {
        const winHead = win.document.head;
        let style = win.document.createElement("style");
        style.innerText = "table, th, td { border-spacing: 0px; border-collapse: collapse; } "
                        + "table { margin-top: 25px; } "
                        + "td { padding: 5px; vertical-align: top; padding-bottom: 25px; } "
                        + "#mainContainer { padding: 25px; } "
                        + "a { text-decoration: none; font-weight: 700; color: black; } "
                        + "a:hover { text-decoration: underline; } "
                        + "html { font-family: sans-serif; } "
                        + " "
                        + "@media print { "
                        + "  #mainContainer { padding: 0px; }"
                        + "} "
        								+ " ";
        winHead.append(style);
        
        let title = win.document.createElement("title");
        title.innerText = "Show All Comments";
        winHead.append(title);
        
        const winBody = win.document.body;
        const mainContainer = win.document.createElement("div");
        mainContainer.id = "mainContainer";
        winBody.append(mainContainer);
        
        let table = win.document.createElement("table");
        mainContainer.append(table);

        
        let tbody = win.document.createElement("tbody");
        table.append(tbody);
        
        const converterArea = win.document.createElement("textarea");
        const convertHtml = (encodedText) => {
          converterArea.innerHTML = encodedText;
          return converterArea.value;
        }
        
        const repliedCommentIds = [];
        
        const addRowDetails = (item, tbodytr, myJson, commentType) => {
          let itemUser = null;
          if (item.relationships.commenter.data.type == "user") {
            for (let user of myJson.included) {
              if (user.id == item.relationships.commenter.data.id && user.type == "user") {
                itemUser = user;
                break;
              }
            }
          }
            
          let td;
          
          td = win.document.createElement("td");
          if (itemUser == null) {
            td.innerText = "icon";
          } else {
            const img = win.document.createElement("img");
            img.src = itemUser.attributes.image_url;
            img.width = 32;
            img.height = 32;
            td.append(img);
          }
          tbodytr.append(td);
            
          let userName = "name";
          let userUrl = "";
          
          if (itemUser != null) {
            userName = itemUser.attributes.full_name;
            userUrl = itemUser.attributes.url;
          }
          
          td = win.document.createElement("td");
          tbodytr.append(td);

          const userP = win.document.createElement("div"); 
          td.append(userP);
          
          const link = win.document.createElement("a");
          link.href = userUrl;
          link.innerText = userName;
          userP.append(link);
          
          const commentP = win.document.createElement("div"); 
          td.append(commentP);
          
          let span = win.document.createElement("span");
          span.innerText = convertHtml(item.attributes.body)
          commentP.append(span);
          
          
          if (item.attributes.reply_count > 0) {
            const repliesDiv = win.document.createElement("div"); 
            
            td.append(repliesDiv);
            
            const repliesTable = win.document.createElement("table"); 
            repliesTable.id = "replies" + item.id;
            td.append(repliesTable);
            
          }
          
        };
        
        for (let item of myJson.data) {
          if (item.type == "comment") {
            let tbodytr = win.document.createElement("tr");
            tbodytr.id = "tr" + item.id;
            tbody.append(tbodytr);
            addRowDetails(item, tbodytr, myJson, "");
            
            if (item.attributes.reply_count > 1) {
              repliedCommentIds.push(item.id);
            } 
          }
        }
        

        for (let item of myJson.included) {
          if (item.type == "comment") {
            
            if (!repliedCommentIds.includes(item.relationships.parent.data.id)) {
              let tbodytr = win.document.createElement("tr");
              tbodytr.id = "tr" + item.id;
            
              let repliesTable = win.document.getElementById("replies" + item.relationships.parent.data.id);
              repliesTable.append(tbodytr);

              addRowDetails(item, tbodytr, myJson, "reply");
            }
          }
        }
        
        
        
        for (let id of repliedCommentIds) {
          //console.log(id);
          
          const replayLongUrl = "https://www.patreon.com/api/comments/" + id + "/replies" 
          	+ "?include=commenter.campaign.null%2Ccommenter.flairs.campaign.null%2Cparent%2Cpost%2Con_behalf_of_campaign.null" 
          	+ "&fields[comment]=body%2Ccreated%2Cdeleted_at%2Cis_by_patron%2Cis_by_creator%2Cvote_sum%2Ccurrent_user_vote" 
          	+ "&fields[flair]=image_tiny_url%2Cname" 
          	+ "&fields[post]=comment_count" 
          	+ "&fields[user]=image_url%2Cfull_name%2Curl" 
          	+ "&json-api-use-default-includes=false" 
          	+ "&json-api-version=1.0";
          
          fetch(replayLongUrl)
            .then(function(replyResponse) {
              return replyResponse.json();
            })
    	    .then(function(replyJson) {
      	      console.log(replyJson);
            	
              for (let item of replyJson.data) {
                if (item.type == "comment") {
                  if (win.document.getElementById("tr" + item.id)) {
                    //reply is already in
                  } else {
                    let tbodytr = win.document.createElement("tr");
                    tbodytr.id = "tr" + item.id;

                    let repliesTable = win.document.getElementById("replies" + item.relationships.parent.data.id);
                    repliesTable.append(tbodytr);

                    addRowDetails(item, tbodytr, replyJson, "reply");
                  }
                }
              }
            });
        }
        
      }

    });
}


console.log("Show all comments");
