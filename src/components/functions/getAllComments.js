import axios from "axios";
import { useState } from "react";

async function getAllComments(post_id) {
    try {
        const requisition = await axios.get(
            `${process.env.REACT_APP_HOST_URL}/posts/${post_id}/comments`
        );

        const allComments = requisition.data;
        return allComments;
    } catch (error) {
        console.log(error);
    }
}

export { getAllComments };
