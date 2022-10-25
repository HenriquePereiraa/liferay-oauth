import { getAuthToken } from "../utils/request";

export function Token({ handleToken, code }) {

  
  async function handleGetToken() {
    const token = await getAuthToken(code);
    handleToken(token);
  }

  return (
    <div>
      <h2>Get Token</h2>

      <button onClick={handleGetToken}>GetToken</button>
    </div>
  );
}
