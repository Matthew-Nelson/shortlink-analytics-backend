const { Url, Click } = require('../models');

const resolvers = {
  Query: {
    urls: async () => await Url.findAll(),
    url: async (_, { short_id }) => await Url.findOne({ where: { short_id } }),
    clicks: async (_, { url_id }) => await Click.findAll({ where: { url_id } }),
  },
  Mutation: {
    shortenUrl: async (_, { long_url, custom_id }) => {
      const short_id = custom_id || Math.random().toString(36).substr(2, 8);
      return await Url.create({ long_url, short_id, custom_id });
    },
  },
  Url: {
    clicks: async (url) => await Click.findAll({ where: { url_id: url.id } }),
  },
};

module.exports = resolvers;
