// import { IDashboardData } from './../../dashboard/types';
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import GitHubProvider from "next-auth/providers/github";

// export default NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string
//     }),
//   ],
//   database: process.env.DB_URL,
//   session: {
//     jwt: true
//   },
//   jwt: {
//     secret: 'adfgstg'
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session, token) {
//       session.user.id = token.IDashboardData
//       return session
//     }
//   }
// })

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "mail" },
        password: { label: "Password", type: 'password' },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string,
          password: string
        };
        if (email !== 'roman@gmail.com' && password !== '12345') {
          return null;
        }
        return { id: '12345', name: "Roman Trynko", email: 'roman@gmail.com' };
      },
    })
  ],
  pages: {
    signIn: '/auth/signIn'
  }
}

export default NextAuth(authOptions)