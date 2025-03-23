exports.handler = async (event) => {
  const httpMethod = event.requestContext.http.method;
  const path = event.requestContext.http.path;

  if (httpMethod === 'GET' && path === '/hello') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: { statusCode: 200, message: 'Hello from Lambda' },
    };
  }

  return {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      statusCode: 400,
      message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`,
    },
  };
};
