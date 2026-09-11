class QueryBuilder {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //   filter
  filter() {
    // Basic Filtering...
    const queryObj = { ...this.queryString };
    // exclude sort,limit,page and fields
    const excludedFields = ['sort', 'limit', 'page', 'fields'];
    // exclude those fields from queryObj
    excludedFields.forEach((field) => delete queryObj[field]);

    // Advanced Filtering...
    const advancedQueryObj = {};
    Object.keys(queryObj).forEach((key) => {
      const match = key.match(/^(.+)\[(gte|gt|lte|lt)\]$/);

      if (match) {
        const field = match[1];
        const operator = `$${match[2]}`;

        advancedQueryObj[field] = {
          ...(advancedQueryObj[field] || {}),
          [operator]: queryObj[key],
        };
      } else {
        advancedQueryObj[key] = queryObj[key];
      }
    });

    this.query = this.query.find(advancedQueryObj);
    return this;
  }

  //   sort
  sort() {
    if (this.queryString.sort) {
      if (typeof this.queryString.sort !== 'string') {
        throw new Error('Sort parameter must be a string.');
      }
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    }
    return this;
  }

  //   limit
  limitFields() {
    if (this.queryString.fields) {
      if (this.queryString.fields !== 'string') {
        throw new Error('Fields parameter must be a string.');
      }
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields); // projection
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  //   pagination
  paginate() {
    const page = this.queryString.page === undefined ? 1 : Number(this.queryString.page);
    const limit = this.queryString.limit === undefined ? 100 : Number(this.queryString.limit);
    // check valid or not
    if (
      !Number.isInteger(page) ||
      !Number.isInteger(limit) ||
      page < 1 ||
      limit < 1 ||
      limit > 100
    ) {
      throw new Error('Page must be a positive integer and limit must be between 1 and 100.');
    }
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export default QueryBuilder;
