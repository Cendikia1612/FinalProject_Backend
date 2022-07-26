const { Transaction, Product, User, category } = require("../../database/models");

module.exports = {
  findAll() {
    return Transaction.findAll();
  },

  find(id) {
    return Transaction.findOne({
      where: {
        id: id,
      },
    });
  },

  findByBuyer(id) {
    try {
      const data = Transaction.findAll({
            include: [{
                model: Product,
                as: "products",
                include: [{
                    model: User,
                    as: "userAsSeller",
                    attributes: ["id","role","name","city","address","phone","image"]
                  },
                  {
                    model: category,
                    as: "categories",
                    attributes: ["name"]
                  },
                ]
          },
          {
            model: User,
            as: "userAsBuyer",
            where: {
              id: id,
            },
            attributes: ["id", "role", "name"]
          }
        ]
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  findBySeller(id) {
    try {
      const data = Transaction.findAll({
            include: [{
                model: Product,
                as: "products",
                include: [{
                    model: User,
                    as: "userAsSeller",
                    where: {
                      id: id,
                    },
                    attributes: [ "id", "role", "name"]
                  },
                  {
                    model: category,
                    as: "categories",
                    attributes: ["name"]
                  },
                ]
          },
          {
            model: User,
            as: "userAsBuyer",
            attributes: ["id","role","name","city","address","phone","image"]
          }
        ]
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  findDetailByBuyer(userId, id){
    try {
      const data = Transaction.findOne({
            include: [{
                model: Product,
                as: "products",
                include: [{
                    model: User,
                    as: "userAsSeller",
                    attributes: ["id","role","name","city","address","phone","image"]
                  },
                  {
                    model: category,
                    as: "categories",
                    attributes: ["name"]
                  },
                ]
          },
          {
            model: User,
            as: "userAsBuyer",
            where: {
              id: userId,
            },
            attributes: ["id", "role", "name"]
          }
        ],
        where: {
          id: id,
        },
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  findDetailBySeller(userId, id){
    try {
      const data = Transaction.findAll({
            include: [{
                model: Product,
                as: "products",
                include: [
                  {
                    model: User,
                    as: "userAsSeller",
                    where: {
                      id: userId,
                    },
                    attributes: [ "id", "role", "name"]
                  },
                  {
                    model: category,
                    as: "categories",
                    attributes: ["name"]
                  },
                ],
          },
          {
            model: User,
            as: "userAsBuyer",
            attributes: ["id","role","name","city","address","phone","image"]
          }
        ],
        where: {
          id: id,
        },
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  findProductByUser(userId, productId) {
    try {
      const data = Transaction.findOne({
        where: {
          userId: userId,
          productId: productId,
        },
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  create(createArgs) {
    return Transaction.create(createArgs);
  },

  update(id, updateArgs) {
    return Transaction.update(updateArgs, {
      where: {
        id,
      },
    });
  },
};
