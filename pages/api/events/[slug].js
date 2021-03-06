const { events } = require("./data.json");

export default (req, res) => {
  const single = events.filter((event) => event.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(single);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
