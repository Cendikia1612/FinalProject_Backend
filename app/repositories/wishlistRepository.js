const { Wishlist, User, Product, category } = require("../../database/models");

module.exports = {
  findAll() {
    return Wishlist.findAll();
  },

  findWishlistBuyerById(id) {
    try {
      const data = Wishlist.findAll({
        include: [{
            model: Product,
            as: "products",
            include: [{
                model: category,
                as: "categories",
                attributes: ["name"]
              },
              {
                model: User,
                as: "userAsSeller",
                attributes: ["id","role","name","city","address","phone","image"]
              }
            ],
          },
          {
            model: User,
            as: "userAsBuyer",
            where: {
              role: "BUYER",
              id: id,
            },
            attributes: ["id","role","name"]
          },
        ],
      });

      if (data) {
        return data;
      }
    } catch (error) {
      return error;
    }
  },

  findWishlistSellerById(id) {
    try {
      const data = Wishlist.findAll({
        include: [{
            model: Product,
            as: "products",
            where: {
              userId: id,
            },
            include: [{
                model: category,
                as: "categories",
                attributes: ["name"]
              },
              {
                model: User,
                as: "userAsSeller",
                where: {
                  role: "SELLER",
                  id: id,
                },
                attributes: ["id","role","name"],
              },
            ],
          },
          {
            model: User,
            as: "userAsBuyer",
            attributes: ["id","role","name","city","address","phone","image"],
          }
        ],
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
      const data = Wishlist.findOne({
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
    return Wishlist.create(createArgs);
  },

  update(id, updateArgs) {
    return Wishlist.update(updateArgs, {
      where: {
        id,
      },
    });
  },
  delete(id) {
    return Wishlist.destroy({
      where: {
        id,
      },
    });
  },
};
