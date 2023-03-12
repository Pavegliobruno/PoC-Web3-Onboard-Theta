import '../styles/globals.css';
import {Web3OnboardProvider, init} from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import {CHAIN} from '@/utils/chains';
import {brandLogoString} from '../components/icons/CustomIcons';

const web3Onboard = init({
	wallets: [injectedModule()],
	chains: [
		{
			id: CHAIN.hexaID,
			token: CHAIN.symbol,
			label: CHAIN.displayName,
			rpcUrl: CHAIN.rpcUrl,
			icon: CHAIN.icon,
		},
	],
	appMetadata: {
		name: 'App Name',
		logo: brandLogoString,
		icon: brandLogoString,
		description: 'App description',
	},
});

function MyApp({Component, pageProps}) {
	return (
		<Web3OnboardProvider web3Onboard={web3Onboard}>
			<Component {...pageProps} />
		</Web3OnboardProvider>
	);
}

export default MyApp;
