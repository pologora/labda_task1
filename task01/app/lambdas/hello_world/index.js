exports.handler = async (event) => {
  const httpMethod = event.requestContext.http.method;
  const path = event.requestContext.http.path;

  if (httpMethod === 'GET' && path === '/hello') {
    return {
      statusCode: 200,
      message: 'Hello from Lambda',
    };
  }

  return { statusCode: 200, message: 'Hello from Lambda' };
};
