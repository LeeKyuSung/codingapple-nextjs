import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "ec2f7e66e962ed77ff33",
      clientSecret: "db9dd04f2a613a44c89265e4252e7a5799f2243b",
    }),
  ],
  secret: "2q4p23789ohasfldkjh234lkjhsdf",
};
export default NextAuth(authOptions);
