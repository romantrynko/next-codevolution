export default function handler(req, res) {
  const params = req.query.params;
  console.log(params);
  console.log('query', req.query);

  res.status(200).json(params);
}
