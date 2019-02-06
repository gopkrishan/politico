const queries = {


  checkUser: (email, phoneNumber) => ({
    text: 'SELECT * FROM users WHERE email = $1 OR phonenumber = $2',
    values: [email, phoneNumber],
  }),

  createUser: (
    firstname,
    lastname,
    othernames,
    passporturl,
    phonenumber,
    email,
    registered,
    password,
    isadmin,
  ) => ({
    text: 'INSERT INTO users(firstname, lastname, othernames, passporturl, phonenumber, email, registered, password, isadmin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    // eslint-disable-next-line max-len
    values: [firstname, lastname, othernames, passporturl, phonenumber, email, registered, password, isadmin],
  }),

  loginUser: email => ({
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }),

  createCandidte: (office, party, candidate) => ({
    text: 'INSERT INTO candidates(office, party, candidate) VALUES($1, $2, $3) RETURNING *',
    values: [office, party, candidate],
  }),

  selectOfficeById: id => ({
    text: 'SELECT * FROM office WHERE id = $1',
    values: [id],
  }),

  selectPartyById: id => ({
    text: 'SELECT * FROM party WHERE id = $1',
    values: [id],
  }),


  validateCandidate: (id, office, party) => ({
    text: 'SELECT * FROM candidates WHERE candidate = $1 OR party = $2 AND office = $3',
    values: [id, office, party],
  }),

  checkCandidate: id => ({
    text: 'SELECT * FROM candidates WHERE id = $1',
    values: [id],
  }),

  checkOffice: id => ({
    text: 'SELECT * FROM office WHERE id = $1',
    values: [id],
  }),

  createVote: (createdon, createdby, office, candidate) => ({
    text: 'INSERT INTO vote(createdon, createdby, office, candidate) VALUES($1, $2, $3, $4) RETURNING *',
    values: [createdon, createdby, office, candidate],
  }),

  checkVote: (createdby, office) => ({
    text: 'SELECT * FROM vote WHERE createdby = $1 AND office = $2',
    values: [createdby, office],
  }),

  getAllOffice: () => 'SELECT * FROM office',

  getAllParties: () => 'SELECT * FROM party',

  selectOfficeByNmae: name => ({
    text: 'SELECT * FROM office WHERE name = $1',
    values: [name],
  }),

  createOffice: (name, type) => ({
    text: 'INSERT INTO office(name, type) VALUES($1, $2) RETURNING *',
    values: [name, type],
  }),


  updatePartyName: (name, id) => ({
    text: 'UPDATE party SET name = $1 WHERE id = $2 RETURNING *',
    values: [name, id],
  }),

  deleteParty: id => ({
    text: 'DELETE FROM party WHERE id = $1 RETURNING *',
    values: [id],
  }),

  selectPartyByNmae: name => ({
    text: 'SELECT * FROM party WHERE name = $1',
    values: [name],
  }),

  createParty: (name, hqaddress, logoUrl) => ({
    text: 'INSERT INTO party(name, hqaddress, logoUrl) VALUES($1, $2, $3) RETURNING *',
    values: [name, hqaddress, logoUrl],
  }),

  getResultByOffice: officeid => ({
    text: 'SELECT office, candidate, count(candidate) as results FROM vote where vote.office = $1 GROUP BY vote.candidate , vote.office',
    values: [officeid],
  }),

  getOfficeInVote: officeid => ({
    text: 'SELECT * from vote WHERE office = $1',
    values: [officeid],
  }),

  selectUserEmail: email => ({
    text: 'SELECT * from users WHERE email = $1',
    values: [email],
  }),

  updatePassword: (password, email) => ({
    text: 'UPDATE users SET password = $1 WHERE email = $2 RETURNING *',
    values: [password, email],
  }),

};

export default queries;
