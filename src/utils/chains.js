import {NETWORK_ID} from '../config/index';
import {thetaIconString} from '../components/icons/CustomIcons';

export const NETWORKS = {
	1: {
		name: 'Ethereum Mainnet',
		displayName: 'Ethereum',
		symbol: 'ETH',
		ID: 1,
		hexaID: `0x${'1'.toString(16).toLowerCase()}`,
		rpcUrl: 'https://mainnet.infura.io/v3',
		blockExplorerUrl: 'https://etherscan.io',
		icon: '<></>',
	},
	5: {
		name: 'Goerli Test Network',
		displayName: 'Goerli Test Network',
		symbol: 'ETH',
		ID: 5,
		hexaID: `0x${'5'.toString(16).toLowerCase()}`,
		rpcUrl: 'https://goerli.infura.io/v3',
		blockExplorerUrl: 'https://goerli.etherscan.io/',
		icon: '<></>',
	},
	137: {
		name: 'Matic Mainnet',
		displayName: 'Polygon',
		symbol: 'MATIC',
		ID: 137,
		hexaID: `0x${'137'.toString(16).toLowerCase()}`,
		rpcUrl: 'https://polygon-rpc.com',
		blockExplorerUrl: 'https://polygonscan.com',
		icon: '<></>',
	},
	80001: {
		name: 'Polygon Testnet',
		displayName: 'Polygon',
		symbol: 'MATIC',
		ID: 80001,
		hexaID: `0x${Number(80001).toString(16).toLowerCase()}`,
		rpcUrl:
			'https://polygon-mumbai.infura.io/v3/cb3531f01dcf4321bbde11cd0dd25134',
		blockExplorerUrl: 'https://mumbai.polygonscan.com',
		icon: '<></>',
	},
	361: {
		name: 'Theta Mainnet',
		displayName: 'Theta Mainnet',
		symbol: 'TFUEL',
		ID: 361,
		hexaID: `0x${Number(361).toString(16).toLowerCase()}`,
		rpcUrl: 'https://eth-rpc-api.thetatoken.org/rpc',
		blockExplorerUrl: 'https://explorer.thetatoken.org/',
		icon: thetaIconString,
	},
	365: {
		name: 'Theta Testnet',
		displayName: 'Theta Testnet',
		symbol: 'TFUEL',
		ID: 365,
		hexaID: `0x${Number(365).toString(16).toLowerCase()}`,
		rpcUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
		blockExplorerUrl: 'https://testnet-explorer.thetatoken.org/',
		icon: thetaIconString,
	},
	43114: {
		name: 'Avalanche Mainnet C-Chain',
		displayName: 'Avalanche',
		symbol: 'AVAX',
		ID: 43114,
		hexaID: `0x${'43114'.toString(16).toLowerCase()}`,
		rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
		blockExplorerUrl: 'https://snowtrace.io',
		icon: '<></>',
	},
	43113: {
		name: 'Avalanche Testnet C-Chain',
		displayName: 'Avalanche',
		symbol: 'AVAX',
		ID: 43113,
		hexaID: `0x${'43113'.toString(16).toLowerCase()}`,
		rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
		blockExplorerUrl: 'https://testnet.snowtrace.io',
		icon: '<></>',
	},
};

export const CHAIN = NETWORKS[NETWORK_ID];
