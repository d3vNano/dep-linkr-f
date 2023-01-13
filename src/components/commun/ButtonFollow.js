import axios from "axios";
import React, { useEffect, useState } from "react";

function ButtonFollow({
    user_id,
    follow_user_id,
    setDisabled,
    followState,
    setFollowState,
}) {
    async function followToggle() {
        const body = {
            user_id,
            follow_user_id,
        };

        try {
            setDisabled(true);
            const requisition = await axios.post(
                `${process.env.REACT_APP_HOST_URL}/follow
            `,
                body
            );
            setFollowState(!followState);
        } catch (error) {
            alert(`It was not possible to perform the operation`);
            setDisabled(false);
        }
    }

    return (
        <>
            {followState === false ? (
                <button onClick={followToggle}>{`follow`}</button>
            ) : (
                <button onClick={followToggle}>{`unfollow`}</button>
            )}
        </>
    );
}

export default ButtonFollow;
