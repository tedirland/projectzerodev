const County = require('../../db/models/county');

exports.countyQueries = {
  county: (root, { id }, ctx) => {
    return ctx.models.County.getById(id);
  },
  counties: (root, args, ctx) => {
    return ctx.models.County.getAll();
  },
};

exports.countyMutations = {
  createCounty: async (root, { input }, ctx) => {
    const createdCounty = await County.create(input);

    return createdCounty;
  },
  updateCounty: async (root, { id, input }, ctx) => {
    const updatedCounty = await ctx.models.County.findAndUpdate(id, input);
    return updatedCounty;
  },
  deleteCounty: async (root, { id }, ctx) => {
    const deletedCounty = await ctx.models.County.findAndDelete(id);
    return deletedCounty._id;
  },
};
