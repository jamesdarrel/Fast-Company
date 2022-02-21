import React from "react";
import { useQualities } from "../../../hooks/useQuality";
import PropTypes from "prop-types";

const Quality = ({ ids }) => {
    const { getQuality } = useQualities();
    const qual = getQuality(ids);

    return (
        <span className={"badge m-1 bg-" + qual.color} key={qual._id}>
            {qual.name}
        </span>
    );
};
Quality.propTypes = {
    // color: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    ids: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default Quality;
