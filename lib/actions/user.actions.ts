"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite"
import { cookies } from "next/headers";

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);	
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("my-custom-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
    } catch (error) {
        console.log("Error", error)
    }
}

export const signIn = async () => {
    try {
        // make fetch request to appwrite
    } catch (error) {
        console.log("Error", error)
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  
