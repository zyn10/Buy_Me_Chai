import { useState, useEffect } from "react";
import "../Memos.css"; // Import the CSS file for styling

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      if (contract) {
        const memos = await contract.getMemos();
        setMemos(memos);
      }
    };

    fetchMemos();
  }, [contract]);

  return (
    <div className="memos-container">
      <h2 className="memos-heading">Memos</h2>
      <div className="memos-list">
        {memos.length === 0 ? (
          <p>No memos found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Message</th>
                <th>Timestamp</th>
                <th>Sender's Address</th>
              </tr>
            </thead>
            <tbody>
              {memos.map((memo) => (
                <tr key={memo.timestamp}>
                  <td>{memo.name}</td>
                  <td>{memo.message}</td>
                  <td>{String(memo.timestamp)}</td>
                  <td>{memo.from}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Memos;
