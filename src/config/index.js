const data = {
	local: {
		networkID: 365,
		chainName: 'Theta Testnet',
		networkSymbol: 'TFUEL',
		RpcUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
	},
	development: {
		networkID: 365,
		chainName: 'Theta Testnet',
		networkSymbol: 'TFUEL',
		RpcUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
	},
	staging: {
		networkID: 365,
		chainName: 'Theta Testnet',
		networkSymbol: 'TFUEL',
		RpcUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
	},
	production: {
		networkID: 361,
		chainName: 'Theta Mainnet',
		networkSymbol: 'TFUEL',
		RpcUrl: 'https://eth-rpc-api.thetatoken.org/rpc',
	},
};

export const CUSTOM_NODE_ENV = process.env.NEXT_PUBLIC_CUSTOM_NODE_ENV;
export const NETWORK_ID = data[CUSTOM_NODE_ENV].networkID;
export const NETWORK_ID_HEX = `0x${NETWORK_ID.toString(16).toLowerCase()}`;
export const NETWORK_NAME = data[CUSTOM_NODE_ENV].chainName;
export const NETWORK_SYMBOL = data[CUSTOM_NODE_ENV].networkSymbol;
export const RPC_URL = data[CUSTOM_NODE_ENV].RpcUrl;
