const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      const userData = await User.find().select("-__v -password");
      return userData;
    },
    user: async (parent, { username }) => {
      const params = username ? { username } : {};
      const userData = await User.findOne({ params }).select("-__v -password");
      return userData;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const { username, email, password } = args;
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user }.catch((err) => {
        console.log(err);
        throw new Error("Something went wrong.");
      });
    },
    deleteUser: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError("You need to be logged in!");
      // }
      try {
        const deletedUser = await User.findByIdAndDelete({
          _id: context.user._id,
        });
        return deletedUser;
      } catch (err) {
        console.log(err);
        throw new Error("Something went wrong.");
      }
    },
  },
};

module.exports = resolvers;
