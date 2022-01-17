import React from "react";
import { useParams } from "react-router-dom";
import RenderUser from "./userPage";
import Users from "./users";

const RenderContent = () => {
    const params = useParams();
    const { userId } = params;

    return <>{userId ? <RenderUser id={userId} /> : <Users />}</>;
};

export default RenderContent;
