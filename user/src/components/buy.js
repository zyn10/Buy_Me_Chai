import { useState } from 'react';
import { ethers } from 'ethers';
import "../Buys.css";

const Buy = ({ state }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const buyChai = async (event) => {
    event.preventDefault();

    // Check if fields are empty
    if (name.trim() === '' || message.trim() === '') {
      console.log('Please fill in all the fields');
      return;
    }

    const { contract } = state;
    console.log(name, message, contract);

    const value = { value: ethers.utils.parseEther('0.01') };
    const transaction = await contract.buyChai(name, message, value);
    await transaction.wait();
    console.log('Transaction is done');
  };

  return (
    <div className="buy-container">
      <h2>Buy Me A Chai</h2>
      <form onSubmit={buyChai}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={name.trim() === '' || message.trim() === ''}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Buy;
