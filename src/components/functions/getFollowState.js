import axios from "axios";
import { useState } from "react";

async function getFollowState(user_id, id) {
    try {
        const requisition = await axios.get(
            `${process.env.REACT_APP_HOST_URL}/follow/${user_id}/${id}`
        );

        const follow_state = requisition.data.followExists;

        return follow_state;
    } catch (error) {
        console.log(error);
    }
}

export { getFollowState };
