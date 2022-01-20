import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ setSearchValue, setSelectedProf }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex w-100 mx-auto">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search..."
                        onChange={(event) => {
                            setSearchValue(event.target.value);
                            setSelectedProf();
                        }}
                    />
                    {/* <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button> */}
                </form>
            </div>
        </nav>
    );
};
SearchUser.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
    setSelectedProf: PropTypes.func.isRequired
};

export default SearchUser;
