//declare var WPQ2ListData: any;

declare var WPQ2ListData: { Row: { ID: string }[] };


interface SPListItem {
    d: {
        __metadata: {
            id: string,
            uri: string,
            etag: string,
            type: string,
        },
        /**
         * Խնդրի ISN
         */
        OData__x053d__x0576__x0564__x0580__x05: string;
        /** link to task */
        linktotask: string;
    }
}


declare namespace SharePoint {
  export interface IListItem {
      /** Data */
      d: {
        __metadata: {
          id: string;
          uri: string;
          etag: string;
          type: "SP.Data.ReviewListItem"; //| string
        };
        FirstUniqueAncestorSecurableObject: IDeferredObject;
        RoleAssignments: IDeferredObject;
        AttachmentFiles: IDeferredObject;
        ContentType: IDeferredObject;
        GetDlpPolicyTip: IDeferredObject;
        FieldValuesAsHtml: IDeferredObject;
        FieldValuesAsText: IDeferredObject;
        FieldValuesForEdit: IDeferredObject;
        File: IDeferredObject;
        Folder: IDeferredObject;
        ParentList: IDeferredObject;
        FileSystemObjectType: number;
        Id: number;
        ContentTypeId: string;
        Title: string;
        Body: string;
        DiscussionLastUpdated: string;
        ParentItemEditorId: null;
        ParentItemID: null;
        LastReplyById: number;
        IsQuestion: boolean;
        BestAnswerId: null;
        IsFeatured: boolean;
        EmailSender: null;
        /** Զննողներ */
        OData__x0536__x0576__x0576__x0578__x05Id: {
          __metadata: { 
            type: string | "Collection(Edm.Int32)"
          };
          results: number[];
        };
        /** Հեղինակ */
        OData__x0540__x0565__x0572__x056b__x05Id: number;
        Shelve: string;
        tfsModifierId: number;
        /** Ակտիվ */
        OData__x0531__x056f__x057f__x056b__x05: "Այո" | "Ոչ";
        /** Բարդություն */
        OData__x0532__x0561__x0580__x0564__x05: "Պարզ" | "Միջին" | "Բարդ";
        OData__x0534__x056b__x057f__x0578__x05: null;
        OData__x053a__x0561__x0574__x056f__x05: string;
        OData__x053d__x0574__x0562__x0561__x05Id: number;
        /**
         * Խնդրի ISN
         */
        OData__x053d__x0576__x0564__x0580__x05: string;
        OData__x054f__x0578__x0572__x0565__x05: number;
        /** Պրոյեկտ */
        OData__x0539__x0565__x0574__x0561_: string;
        /** link to task */
        linktotask: string;
        Modified: string;
        ID: number;
        Created: string;
        AuthorId: number;
        EditorId: number;
        OData__UIVersionString: string;
        Attachments: boolean;
        GUID: string;
    };
  }
  
  export interface IDeferredObject {
      __deferred: {
          uri: string;
      };
  }
}


  
  /*
  {
    "d": {
      "__metadata": {
        "id": "5206ff12-fa86-4b93-8b1a-51d6d8f8d42c",
        "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)",
        "etag": "\"2\"",
        "type": "SP.Data.ReviewListItem"
      },
      "FirstUniqueAncestorSecurableObject": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/FirstUniqueAncestorSecurableObject"
        }
      },
      "RoleAssignments": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/RoleAssignments"
        }
      },
      "AttachmentFiles": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/AttachmentFiles"
        }
      },
      "ContentType": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/ContentType"
        }
      },
      "GetDlpPolicyTip": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/GetDlpPolicyTip"
        }
      },
      "FieldValuesAsHtml": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/FieldValuesAsHtml"
        }
      },
      "FieldValuesAsText": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/FieldValuesAsText"
        }
      },
      "FieldValuesForEdit": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/FieldValuesForEdit"
        }
      },
      "File": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/File"
        }
      },
      "Folder": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/Folder"
        }
      },
      "ParentList": {
        "__deferred": {
          "uri": "https://spserver2016.armsoft.am/_api/Web/Lists(guid'2ff3c593-f85c-41fe-a5c1-3ff11cfe455f')/Items(1591)/ParentList"
        }
      },
      "FileSystemObjectType": 1,
      "Id": 1591,
      "ContentTypeId": "0x01200200A97B6A5860CEE446A8BDBF9DE3A5605D",
      "Title": "Review ՖՆ (վերջնական) - Ավանդը երրորդ անձին ամբողջովին հանձնելու հնարավորություն",
      "Body": "<div class=\"ExternalClass0C93D4A1383040AEBCF72B09D3DED905\">N/A</div>",
      "DiscussionLastUpdated": "2019-03-14T06:47:46Z",
      "ParentItemEditorId": null,
      "ParentItemID": null,
      "LastReplyById": 164,
      "IsQuestion": false,
      "BestAnswerId": null,
      "IsFeatured": false,
      "EmailSender": null,
      "OData__x0536__x0576__x0576__x0578__x05Id": {
        "__metadata": {
          "type": "Collection(Edm.Int32)"
        },
        "results": [
          144,
          158,
          19,
          43,
          37
        ]
      },
      "OData__x0540__x0565__x0572__x056b__x05Id": 164,
      "Shelve": "108390",
      "tfsModifierId": 144,
      "OData__x0531__x056f__x057f__x056b__x05": "Այո",
      "OData__x0532__x0561__x0580__x0564__x05": "Միջին",
      "OData__x0534__x056b__x057f__x0578__x05": null,
      "OData__x053a__x0561__x0574__x056f__x05": "2019-03-13T20:00:00Z",
      "OData__x053d__x0574__x0562__x0561__x05Id": 144,
      "OData__x053d__x0576__x0564__x0580__x05": "108489",
      "OData__x054f__x0578__x0572__x0565__x05": 50,
      "OData__x0539__x0565__x0574__x0561_": "Բանկ",
      "linktotask": "<a target='_blank' href='http://tfserver:8080/tfs/web/wi.aspx?pcguid=41e92480-0108-4111-8e26-60b750b81e97&id=108489'>TFS link 108489</a>",
      "Modified": "2019-03-14T05:24:36Z",
      "ID": 1591,
      "Created": "2019-03-11T11:47:34Z",
      "AuthorId": 188,
      "EditorId": 19,
      "OData__UIVersionString": "1.0",
      "Attachments": false,
      "GUID": "2d755210-dd10-4585-a288-82176835ff82"
    }
  }
  
  
  */