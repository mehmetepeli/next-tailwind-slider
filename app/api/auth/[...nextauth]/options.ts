import type {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }
                return null;
            }
        }),
    ],
}