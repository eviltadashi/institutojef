<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h4>Insomnia:JSON</h4>

<pre>
{
  "_type": "export",
  "__export_format": 4,
  "__export_date": "2024-01-17T02:25:48.963Z",
  "__export_source": "insomnia.desktop.app:v2023.5.8",
  "resources": [
    {
      "_id": "req_0bc0641961834d7e9a384fb35d480e1a",
      "parentId": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "modified": 1705455014307,
      "created": 1705453320173,
      "url": "localhost:3001/auth",
      "name": "auth",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"email\":\"riasgremory@email.com\",\n\t\"senha\":\"123456\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json"
        },
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454204212,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "parentId": null,
      "modified": 1704737324905,
      "created": 1704737324905,
      "name": "J&F",
      "description": "",
      "scope": "collection",
      "_type": "workspace"
    },
    {
      "_id": "req_029ea2660d8e4d39a33cb8d5a2b81e64",
      "parentId": "fld_264caadc7a104843917015af4879c413",
      "modified": 1705454281091,
      "created": 1705454252435,
      "url": "localhost:3001/professores",
      "name": "Listar Professores",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454268980,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_264caadc7a104843917015af4879c413",
      "parentId": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "modified": 1705454243906,
      "created": 1705454237001,
      "name": "Professores",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1705454204162,
      "_type": "request_group"
    },
    {
      "_id": "req_bb3bd8524d024daba56b84be2ac6534a",
      "parentId": "fld_f10421d0f8524044b45441da4f1dc104",
      "modified": 1705454220232,
      "created": 1704737336053,
      "url": "localhost:3001/alunos/",
      "name": "Create Alunos",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"nome\":\"Akane Tendo\",\n\t\"email\":\"tendoakane@email.com\",\n\t\"senha\":\"123456\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json"
        },
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454209905,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_f10421d0f8524044b45441da4f1dc104",
      "parentId": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "modified": 1705454204112,
      "created": 1705454204112,
      "name": "Alunos",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1705454204112,
      "_type": "request_group"
    },
    {
      "_id": "req_7072f996cf9e4d45b37c2d6640884e12",
      "parentId": "fld_f10421d0f8524044b45441da4f1dc104",
      "modified": 1705457289440,
      "created": 1704745990408,
      "url": "localhost:3001/alunos",
      "name": "Listar Alunos",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8",
          "id": "pair_3de48a60dcae4fe6839000f28fe06b8a"
        },
        {
          "id": "pair_07f9fd92db6146fd917a64a5e069a86c",
          "name": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNWViYTBmYy1kZThiLTRmOTEtOTZjZS03Y2E4OGRkNDRlNjIiLCJlbWFpbCI6InJpYXNncmVtb3J5QGVtYWlsLmNvbSIsImlhdCI6MTcwNTQ1NzEzMywiZXhwIjoxNzA1NDYwNzMzfQ.et-24SsODEyFciMZrI19KhQC60DHZ10jgGQMbyBlMME",
          "description": "",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "",
        "disabled": true
      },
      "metaSortKey": -1705454209855,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_3dbcc560b8ed49f29a231ac791504bfe",
      "parentId": "fld_f10421d0f8524044b45441da4f1dc104",
      "modified": 1705454226221,
      "created": 1705093845757,
      "url": "localhost:3001/alunos/c5eba0fc-de8b-4f91-96ce-7ca88dd44e62",
      "name": "Listar Alunos : ID",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454209830,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_51569b4fc2de43a8be2d434a0aff8e5e",
      "parentId": "fld_f10421d0f8524044b45441da4f1dc104",
      "modified": 1705455008071,
      "created": 1705078432631,
      "url": "localhost:3001/alunos/c5eba0fc-de8b-4f91-96ce-7ca88dd44e62",
      "name": "Atualizar Alunos",
      "description": "",
      "method": "PUT",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"senha\":\"123456\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json"
        },
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454209817.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_354e00720d6042d9b94d641428f3cb60",
      "parentId": "fld_f10421d0f8524044b45441da4f1dc104",
      "modified": 1705454212829,
      "created": 1705093877583,
      "url": "localhost:3001/alunos/7d81c5fa-5f7e-4f7d-8de8-9057bfa4826d",
      "name": "Delete Aluno",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "User-Agent",
          "value": "insomnia/2023.5.8"
        }
      ],
      "authentication": {},
      "metaSortKey": -1705454209805,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "env_1f6af156c2a33b64f9611d7d2004c31b8f62c7ac",
      "parentId": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "modified": 1704737324915,
      "created": 1704737324915,
      "name": "Base Environment",
      "data": {},
      "dataPropertyOrder": null,
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1704737324915,
      "_type": "environment"
    },
    {
      "_id": "jar_1f6af156c2a33b64f9611d7d2004c31b8f62c7ac",
      "parentId": "wrk_9e41785f37c1461caa9b9579e0b150d2",
      "modified": 1704737324918,
      "created": 1704737324918,
      "name": "Default Jar",
      "cookies": [],
      "_type": "cookie_jar"
    }
  ]
}
</pre>
