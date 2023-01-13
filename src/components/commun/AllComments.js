import styled from "styled-components";

function AllComments({}) {
    function RenderComment() {
        return (
            <>
                <Body>
                    <Avatar>
                        <img src=""></img>
                    </Avatar>
                    <UserComment>
                        <Dates>
                            <Nick>{}</Nick>
                            {/*
                            follow_var || user_id_var ?
                            <Stats>
                                <p>•</p>
                                <h2>{follow_var ? "following" : "post's author"}</h2>
                            </Stats>
                            :
                            <></>
                            */}
                            <Stats>
                                <p>•</p>
                                <h2>following</h2>
                            </Stats>
                        </Dates>
                        <Comment>{}</Comment>
                    </UserComment>
                </Body>
                <Spacer />
            </>
        );
    }

    return <RenderComment />;
}

export default AllComments;

const Body = styled.form`
    width: 100%;

    display: flex;
    position: relative;
`;

const Avatar = styled.div`
    img {
        width: 45px;
        height: 45px;
        margin-right: 15px;

        border-radius: 100%;
    }
`;

const UserComment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Dates = styled.div`
    margin-bottom: 8px;
    display: flex;
    align-items: center;
`;

const Nick = styled.h1`
    font-size: 16px;
    font-weight: 600;
`;

const Stats = styled.div`
    display: flex;
    align-items: center;

    color: #565656;

    p {
        font-size: 25px;
        margin: 0 5px;
    }

    h2 {
        font-size: 14px;
        font-weight: 400;
    }
`;

const Comment = styled.p`
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #acacac;

    word-wrap: break-word;
`;

const Spacer = styled.div`
    height: 1px;
    margin: 20px 0;

    background-color: #353535;
`;
