export default function comments(req, res) {
    res.status(200).json([{email:'guzziautos@gmail.com', name: 'Guzzi Autos', comment: 'Soy un comentario'}])
  }