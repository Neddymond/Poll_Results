const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Neddymondmysql!!",
  database: "poll_result"
});

db.connect((err) => {
  if (err) throw err;
});


module.exports = db;






























// connection.connect((err) => {
//   if (err) throw err;
//   console.log("connected");
// });

// const poll_unit = 8;

// /** Create a page to display the result for any individual polling unit on a web page. Note that the database you have been given only contains LGA's in Delta state (state id: 25)  */
// connection.query(`select *
//   from announced_pu_results
//   where polling_unit_uniqueid = ${poll_unit}`, (err, res) => {
//     if (err) throw err;
//   // console.log(res);
// })

// /** Create a page to display the summed total result of all the polling units under any particular local government. Local Governemnt should be selected using a selection box.
//  * Do NOT use the announced LGA result table to display this required result. The announced LGA table is designed to be used for a comparison of a total of a summed up total of all polling units results under any LGA.
//  */
// const LGA = '"Ethiope West"';
// connection.query(`select sum(party_score) total 
//   from announced_pu_results
//   inner join polling_unit on polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid
//   inner join lga using (lga_id)
//   where lga_name = ${LGA}`, (err, res) => {
//     if (err) throw err;
//     // console.log(res);
// });

// const results = {
//   polling_unit_uniqueid: 8,
//   party_abbreviation: "PDP",
//   party_score: 900,
//   entered_by_user: "Chinedu",
//   date_entered: new Date(),
//   user_ip_address: "192.168.1.101"
// };

// /** Create a page to be used to store results for ALL parties for a new polling unit */
// connection.query(`insert into announced_pu_results set ?`, results, (err, res) => {
//   if (err) throw err;
//   // console.log(res);
// });