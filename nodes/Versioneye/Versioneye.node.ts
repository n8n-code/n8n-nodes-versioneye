import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { scansDescription } from './resources/scans';

export class Versioneye implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'versioneye',
		name: 'N8nDevVersioneye',
		icon: { light: 'file:./versioneye.png', dark: 'file:./versioneye.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'VersionEye is a cross-platform search engine for free/libre/open source software libraries',
		defaults: { name: 'versioneye' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVersioneyeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Scans",
					"value": "Scans",
					"description": ""
				}
			],
			"default": ""
		},
		...scansDescription
		],
	};
}
