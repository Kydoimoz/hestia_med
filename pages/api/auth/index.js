<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:456f6477429038f181e6ac013e9344b6aa6882fc221fc8b965031d6ea7443709
size 587
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
