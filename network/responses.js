function success(req, res, statusCode = 200, message = 'Success') {
  res.status(statusCode).send({
    error: false,
    message,
  });
}

function error(
  req,
  res,
  statusCode = 500,
  userMessage = 'Internal Server Error',
  adminMessage = 'Tell me where is the error',
) {
  res.status(statusCode).send({
    error: true,
    message: userMessage,
  });
  console.log({
    error: true,
    adminMessage,
  });
}

export { success, error };