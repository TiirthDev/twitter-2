import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: '2.0'
        }),
    ],
})

//ci1zYq4GyVP6vnSvEDPf7TLlt

//WN67EzxNYZawsicpq6tnkMlT8emlc0ZsaIZfSSdB9f1fDC2SQy

//AAAAAAAAAAAAAAAAAAAAAEX6ewEAAAAAG1FtbiTpCGOFjSzHhhFXtfG6QrM%3DMr8JSNKD6WXOPhLIEQyjvbgO6wCMiR0uBMYqX2raI1aJiefQ8p