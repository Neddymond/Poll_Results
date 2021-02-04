const express = require("express");
const router = express.Router();
const db = require("../db/mysql");


/** Display the results for any individual polling unit */
router.get("/poll-results/:uniqueid", function(req, res) {
  let query = (`select *
  from announced_pu_results
  where polling_unit_uniqueid = ?`);

  let polling_unit_uniqueid = [req.params.uniqueid];
  
  try {
    db.query(query, polling_unit_uniqueid, (err, data) => {
      if (err) throw err;
      res.render("pollUnitResult", { title: "Polling Unit Result", pollResults: data });
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

/** Display the summed total result of all the polling units under any particular local government */
router.get("/total-poll-results/:lga_name", function(req, res) {
  let query = `select sum(party_score) total
  from announced_pu_results
  inner join polling_unit on polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid
  inner join lga using (lga_id)
  where lga_name = ?`;

  let lga_name = [req.params.lga_name];

  try {
    db.query(query, lga_name, function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

/** Store results for all parties for a new polling unit */
router.post("/new-poll-results", function(req, res) {
  let query = `insert into announced_pu_results set ?`;

  let values = {
    polling_unit_uniqueid: req.body.uniqueid,
    party_abbreviation: req.body.party,
    party_score: req.body.party_score,
    entered_by_user: req.body.user,
    date_entered: new Date(),
    user_ip_address: req.body.user_ip_address
  };

  try {
    db.query(query, values, function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;