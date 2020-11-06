const success = (res, data) => {
  res.status(200).json(data);
};

const error = (res, message, status = 500) => {
  res.status(status).json(message);
};

const notFound = (res, message) => {
  error(res, message, 404);
};

module.exports = {
  error,
  notFound,
  success,
};