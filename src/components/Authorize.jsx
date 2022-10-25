export function Authorize({handleCode}) {

  const urlParams = new URLSearchParams(window.location.search);

  function handleAuthorize(event) {
    event.preventDefault();

    try {
      window.location.replace(
        "http://localhost:8080/o/oauth2/authorize?response_type=code&client_id=id-72774244-5acf-3de4-4414-4655fc18a55"
      );
    } catch (e) {
      throw new Error(e)
    }

  }

  const codeParams = urlParams.get("code");

  function getAuthorizationCode() {
    if(codeParams) {
      handleCode(codeParams)
    }
  }




  return (
    <div>
      <h2>Authorize</h2>

      <form onSubmit={handleAuthorize}>
        <button type="onSubmit">Authorize</button>
      </form>
        <button onClick={getAuthorizationCode} disabled={!codeParams}>Get Authorization Code</button>
    </div>
  );
}