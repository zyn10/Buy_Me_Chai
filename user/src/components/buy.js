import {ethers} from "ethers";
const Buy = ({ state }) => {
  const buyChai = async (event) => {
	event.preventDefault();
	const {contract} = state;
	const name = document.querySelector("#name").value;
	const message = document.querySelector("#message").value;
	console.log(name,message,contract);

	const value = {value:ethers.utils.parseEther("0.01")};
	const transaction = await contract.buyChai(name,message,value);
	await transaction.wait();
	console.log("Transaction is done");
  };
  
  return (
    <>
      <form onSubmit={buyChai}>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter your name"></input>
        <label>Message</label>
        <input type="text" id="message" placeholder="Enter Message"></input>
		<button type="submit">Pay</button>
	  </form>

    </>
  );
};
export default Buy;
