exports.handler = async (event) => {
  const httpMethod = event.requestContext.http.method;
  const path = event.requestContext.http.path;

  if (httpMethod === 'GET' && path === '/hello') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello from Lambda' }),
    };
  }

  return {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`,
    }),
  };
};
