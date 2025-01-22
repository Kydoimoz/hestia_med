<<<<<<< HEAD
import connectDB from "../../../libs/medical_db";
import User from "../../../models/User";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import { fetchUpdatedUserData } from "../fetchUpdates";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import queryData from "./index";;
import { Cookies } from "react-cookie";

export let user_account;
export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    await connectDB();
                    const user = await User.findOne({ email: credentials?.email });
                    console.log("User: ", user);
                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);

                    if (credentials.email === user.email && passwordMatch) {
                        user_account = {
                            user_ID: user._id,
                            practice: user.practice,
                            title: user.title,
                            first_name: user.first_name,
                            surname: user.surname,
                            gender: user.gender,
                            birth_date: user.birth_date,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            country: user.country,
                            city: user.city,
                            address: user.address,
                            password: user.password,
                            isVerified: user.isVerified,
                            role: user.role,
                            termsAccepted: user.termsAccepted,
                        };
                        console.log(user_account);
                        return Promise.resolve(user_account);
                    } else {
                        return null;
                    }
                } catch (err) {
                    console.error(err);
                    return null;
                }
            },
        }),
    ],
    jwt: {
        encryption: true,
        maxAge: 30 * 24 * 60 * 60
    },
    session: {
        jwt: true,
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
     callbacks: {
        async jwt({ token, user }) {
            if (user) {
              // Füge die Benutzerfelder ins Token hinzu
              token.user_ID = user._id;
              token.practice = user.practice;
              token.title = user.title;
              token.first_name = user.first_name;
              token.surname = user.surname;
              token.gender = user.gender;
              token.birth_date = user.birth_date;
              token.email = user.email;
              token.phoneNumber = user.phoneNumber;
              token.country = user.country;
              token.city = user.city;
              token.address = user.address;
              token.password = user.password; // beachte, dass du das Passwort möglicherweise nicht speichern möchtest!
              token.isVerified = user.isVerified;
              token.role = user.role;
              token.termsAccepted = user.termsAccepted;
            }
            return token;
          },
          async session({ session, token }) {
            // Übertrage die Felder vom Token in die Session
            session.user.user_ID = token.user_ID;
            session.user.practice = token.practice;
            session.user.title = token.title;
            session.user.first_name = token.first_name;
            session.user.surname = token.surname;
            session.user.gender = token.gender;
            session.user.birth_date = token.birth_date;
            session.user.email = token.email;
            session.user.phoneNumber = token.phoneNumber;
            session.user.country = token.country;
            session.user.city = token.city;
            session.user.address = token.address;
            session.user.password = token.password; // ebenfalls prüfen, ob das sinnvoll ist, das Passwort zu speichern!
            session.user.isVerified = token.isVerified;
            session.user.role = token.role;
            session.user.termsAccepted = token.termsAccepted;
      
            return session;
          },
        async session(session, token) {
            const user = await User.findById(token.user.user_ID).populate("practice"); 
            session.user = {
                ...user._doc,
                practice: user.practice, 
            };
            
            const updatedUser = await fetchUpdatedUserData(token.user.user_ID);
    
            session.user = {
                user_ID: updatedUser._id,
                practice: updatedUser.practice,
                title: updatedUser.title,
                first_name: updatedUser.first_name,
                surname: updatedUser.surname,
                gender: updatedUser.gender,
                birth_date: updatedUser.birth_date,
                email: updatedUser.email,
                phoneNumber: updatedUser.phoneNumber,
                country: updatedUser.country,
                city: updatedUser.city,
                address: updatedUser.address,
                password: updatedUser.password,
                isVerified: updatedUser.isVerified,
                role: updatedUser.role,
                termsAccepted: updatedUser.termsAccepted,
            };
    
            return session;
        },
     },
    callbacks: {
        async signIn(user, account, profile) {
            const { email } = user;
            const additionalUserInfo = await queryData(email);

            // Add additional user info to the session
            return Promise.resolve({ ...user, ...additionalUserInfo });
        },
        async session(session) {

            if (session) {
                session.user = {
                    id: user_account.user_ID,
                    practice: user_account.practice,
                    title: user_account.title,
                    first_name: user_account.first_name,
                    surname: user_account.surname,
                    gender: user_account.gender,
                    birth_date: user_account.birth_date,
                    email: user_account.email,
                    phoneNumber: user_account.phoneNumber,
                    country: user_account.country,
                    city: user_account.city,
                    address: user_account.address,
                    password: user_account.password,
                    isVerified: user_account.isVerified,
                    role: user_account.role,
                    termsAccepted: user_account.termsAccepted,
                };
            }
            
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/login/",
        callbackUrl: "/home/",
    },
};
/*
export const config = {
    api: {
        bodyParser: false,
    },
};
*/

const handler = NextAuth(authOptions);

export default handler;
export const GET = (req, res) => handler.handleRequest(req, res, { ...authOptions });
export const POST = (req, res) => handler.handleRequest(req, res, { ...authOptions });
=======
version https://git-lfs.github.com/spec/v1
oid sha256:31b429e251548fe1c435fbe5b6af528eed2b6b4b0c8d68e17457a7aa024334b0
size 7713
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
