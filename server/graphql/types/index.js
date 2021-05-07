const countyFields = `
name: String,
countySeat: String,
website: String,
population: String,
description: String,
`;

exports.countyTypes = `
type County {
  _id: ID,
${countyFields}
}

input CountyInput {
${countyFields}
}

`;
