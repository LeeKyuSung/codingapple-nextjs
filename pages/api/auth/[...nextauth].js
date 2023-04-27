import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "ec2f7e66e962ed77ff33",
      clientSecret: "db9dd04f2a613a44c89265e4252e7a5799f2243b",
    }),
    GoogleProvider({
      clientId:
        "938523790700-hkc03p5of8jmkj7kgrce8qt39lunlg09.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "2q4p23789ohasfldkjh234lkjhsdf",
};
export default NextAuth(authOptions);
