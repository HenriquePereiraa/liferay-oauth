export const getAuthToken = async (code) => {
  const request = {
    client_id: "id-72774244-5acf-3de4-4414-4655fc18a55",
    client_secret: "secret-83ba2088-10c4-66b6-fca6-fa6d1ee657d8",
    code: code,
    grant_type: "authorization_code",
    redirect_uri:
      "http://localhost:5173?url=http://localhost:8080&client_id=id-72774244-5acf-3de4-4414-4655fc18a55",
  };

  let formBody = [];
  for (let property in request) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(request[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const datas = await fetch(`http://localhost:8080/o/oauth2/token`, {
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  })
    .then((response) => response.json())

  return datas;
};

export const getUsers = (token) => {

	return fetch(`http://localhost:8080/o/headless-admin-user/v1.0/user-accounts`, {
		headers: {
			Authorization: "Bearer " + token,
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};
