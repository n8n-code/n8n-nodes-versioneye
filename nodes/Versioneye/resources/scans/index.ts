import type { INodeProperties } from 'n8n-workflow';

export const scansDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Scans",
					"value": "GET Api V 1 Scans",
					"action": "Retrieves all scans",
					"description": "Retrieves all scans",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/scans"
						}
					}
				},
				{
					"name": "GET Api V 1 Scans Files",
					"value": "GET Api V 1 Scans Files",
					"action": "Retrieves a file object, containing information about dependencies in the file",
					"description": "Retrieves a file object, containing information about dependencies in the file",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/scans/{{$parameter[\"id\"]}}/files/{{$parameter[\"file_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/scans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api_key (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/scans/{id}/files/{file_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans Files"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans Files"
					]
				}
			}
		},
		{
			"displayName": "File Id",
			"name": "file_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans Files"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans Files"
					]
				}
			}
		},
		{
			"displayName": "Api Key",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api_key (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scans"
					],
					"operation": [
						"GET Api V 1 Scans Files"
					]
				}
			}
		},
];
