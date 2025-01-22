import * as React from "react";
import User from "../../../models/User";
const queryData = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (user) {
            const { first_name, surname } = user;
            console.log("User Info from queryData:", { first_name, surname });
            return Promise.resolve({ first_name, surname });
        }
        return Promise.resolve({});
    } catch (err) {
        console.error("Error in queryData:", err);
        return Promise.resolve({});
    }
};

export default queryData;