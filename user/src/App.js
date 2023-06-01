import abi from "./contracts/Chai.json"
import {useState,useEffect} from 'react';
import { ethers } from 'ethers';
import Buy from "./components/buy";
import Memos from "./components/memos";
import './App.css';

function App() {
	const [state,setState]=useState({
		provider:null,
		signer: null,
		contract:null
	});
	useEffect(()=>{
		const connectWallet=async()=>{
			const contractAddress = "0xea1f3cea755231e1fa172fdd80b4980623969357";
			const contractABI = abi.abi;
			try{
				const {ethereum} = window;
				if(ethereum){
					const accounts= await ethereum.request({method:"eth_requestAccounts"});
				}
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer= provider.getSigner();
				const contract= new ethers.Contract(contractAddress,contractABI,signer);
				setState({provider,signer,contract})
			}
			catch(error){
				console.log("something went wrong",error);
			}
		};
		connectWallet();
	},[]);
	//console.log(state);

	 return (
        <div className='App'>
            <Buy state={state}></Buy>
        </div>
    );
}
export default App;
