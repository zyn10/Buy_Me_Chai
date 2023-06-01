import abi from "./contracts/Chai.json";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Buy from "./components/buy";
import Memos from "./components/memos";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xea1f3cea755231e1fa172fdd80b4980623969357";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setState({ provider, signer, contract })
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    connectWallet();
  }, []);

  return (
    <div className='App' style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url('https://images.unsplash.com/photo-1434989407504-46a53b1b8a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80')"
	  //backgroundImage: "url('https://images.unsplash.com/photo-1562534104-6b964ad63e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')"

	}}>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
