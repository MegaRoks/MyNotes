Note = require("../models/model");

exports.index = function(req, res) {
  Note.get(function(err, notes) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Notes retrieved successfully",
      data: notes
    });
  });
};

exports.new = function(req, res) {
  let note = new Note();
  note.title = req.body.title ? req.body.title : note.title;
  note.description = req.body.description;

  note.save(function(err) {
    res.json({
      message: "New note created!",
      data: note
    });
  });
};

exports.view = function(req, res) {
  Note.findById(req.params.note_id, function(err, note) {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Notes details loading..",
      data: note
    });
  });
};

exports.update = function(req, res) {
  Note.findById(req.params.note_id, function(err, note) {
    if (err) {
      res.send(err);
    }
    note.title = req.body.title ? req.body.title : note.title;
    note.description = req.body.description;

    note.save(function(err) {
      if (err) {
        res.json(err);
      }
      res.json({
        message: "Notes Info updated",
        data: note
      });
    });
  });
};

exports.delete = function(req, res) {
  Note.deleteOne(
    {
      _id: req.params.note_id
    },
    function(err, note) {
      if (err) {
        res.send(err);
      }
      res.json({
        status: "success",
        message: "Notes deleted"
      });
    }
  );
};
