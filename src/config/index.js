const data = {
	local: {
		networkID: 365,
	},
	development: {
		networkID: 365,
	},
	staging: {
		networkID: 365,
	},
	production: {
		networkID: 361,
	},
};

export const CUSTOM_NODE_ENV = process.env.NEXT_PUBLIC_CUSTOM_NODE_ENV;
export const NETWORK_ID = data[CUSTOM_NODE_ENV].networkID;
