const Certi = require("../models/certi");
const User = require("../models/user");
exports.addCertiToUser = (req, res) => {
  const certi = new Certi(req.body);
  certi.save((err, certi) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to ADD CERTIFICATE",
      });
    }
    res.json({ certi });
  });
};

exports.getAllCertiInfo = (req, res) => {
  Certi.find().exec((err, certi) => {
    if (err) {
      return res.status(400).json({
        error: "No certi found",
      });
    }
    res.json(certi);
  });
};

exports.download_certi = (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    if (user.email == email) {
      Certi.find().exec((err, certi) => {
        if (err) {
          return res.status(400).json({
            error: "No certi found",
          });
        }
        return res.json(certi);
      });
    }
  });
};
exports.show_badge = (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    if (user.email == email) {
      Certi.find().exec((err, certi) => {
        if (err) {
          return res.status(400).json({
            error: "No certi found",
          });
        }
        const { badge, name } = certi[0];

        return res.json({
          message: `Badge awarded to ${name} With Email ID ${email}  `,
        });
      });
    }
  });
};
