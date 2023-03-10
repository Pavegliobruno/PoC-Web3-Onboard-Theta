import {useEffect, useState} from 'react';
import {useConnectWallet, useSetChain} from '@web3-onboard/react';
import {NETWORK_ID_HEX} from '../config/index';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [{wallet, connecting}, connect, disconnect] = useConnectWallet();
	const [{connectedChain}, setChain] = useSetChain();
	const [isDiffChain, setIsDiffChain] = useState(false);

	useEffect(() => {
		const previouslyConnectedWallet =
			window.localStorage.getItem('connectedWallet');
		if (!wallet && previouslyConnectedWallet) {
			connectWallet(previouslyConnectedWallet);
		}
	}, [wallet]);

	useEffect(() => {
		if (wallet && connectedChain.id !== NETWORK_ID_HEX) {
			setIsDiffChain(true);
			setChain({chainId: NETWORK_ID_HEX});
		} else {
			setIsDiffChain(false);
		}
	}, [connectedChain]);

	useEffect(() => {
		window.addEventListener('beforeunload', (ev) => {
			ev.preventDefault();
			if (wallet) window.localStorage.setItem('connectedWallet', wallet.label);
		});
	});

	const connectWallet = async (previouslyConnectedWallet) => {
		if (previouslyConnectedWallet) {
			connect({
				autoSelect: {label: previouslyConnectedWallet, disableModals: true},
			});
		} else {
			connect();
		}
		window.localStorage.removeItem('connectedWallet');
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>PoC Web3-Onboard + Thetha</title>
				<meta
					name='description'
					content='Example of how to integrate Web3-Onboard with Next.js'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>PoC Web3-Onboard + Thetha</h1>
				<div className={styles.walletButton}>
					<h3>
						{connecting
							? 'Loading status 👉🏻'
							: wallet
							? isDiffChain &&
							  '⚠️ You are connected to a different chain, add and change to Theta. ⚠️'
							: 'Connect your wallet 👉🏻'}
					</h3>
					{!isDiffChain && (
						<button
							disabled={connecting}
							onClick={() => (wallet ? disconnect(wallet) : connectWallet())}
						>
							{connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
						</button>
					)}
				</div>
			</main>
		</div>
	);
}
