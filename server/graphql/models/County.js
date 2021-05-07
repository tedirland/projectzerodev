class County {
  constructor(model) {
    this.Model = model;
  }

  getAll() {
    return this.Model.find({});
  }

  getById(id) {
    return this.ModelfindById(id);
  }

  create(data) {
    return this.Model.create(data);
  }

  findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  findAndDelete(id) {
    return this.Model.findOneAndRemove({ _id: id });
  }
}

module.exports = County;
