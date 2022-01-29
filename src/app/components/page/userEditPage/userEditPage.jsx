import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const UserEditPage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/users/${userId}`);
    };
    const params = useParams();
    const { userId } = params;
    const [user, setUser] = useState();
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.users.getById(userId).then((user) => setUser(user));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введён не корректно"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [user]);

    const validate = () => {
        const errors = validator(user, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const newQualities = user?.qualities?.map((arr) => ({
        label: arr.name,
        value: arr._id,
        color: arr.color
    }));

    let professionsArray;

    if (professions) {
        professionsArray = Object.values(professions);
    }

    const getProfession = (profId, array) => {
        const professionSelected = array.filter((prof) => {
            return prof._id === profId;
        });
        return professionSelected;
    };

    const handleChange = (target) => {
        if (target.name === "profession") {
            const prof = getProfession(target.value, professionsArray);
            setUser((prevState) => ({
                ...prevState,
                profession: {
                    _id: target.value,
                    name: prof[0].name
                }
            }));
        } else if (target.name === "qualities") {
            setUser((prevState) => ({
                ...prevState,
                qualities: target.value
            }));
        } else {
            setUser((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        api.users.update(userId, user);
        handleClick();
        console.log(user);
    };

    if (user) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выберите вашу профессию"
                                value={user.profession._id}
                                name="profession"
                                onChange={handleChange}
                                options={professions}
                            />
                            <RadioField
                                label="Выберите ваш пол"
                                value={user.sex}
                                name="sex"
                                onChange={handleChange}
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                            />
                            <MultiSelectField
                                defaultValue={newQualities}
                                label="Выберите ваши качества"
                                options={qualities}
                                onChange={handleChange}
                                name="qualities"
                            />
                            <button
                                className="btn btn-primary w-100 mx-auto mb-2"
                                type="submit"
                                disabled={!isValid}
                            >
                                Сохранить изменения
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};

export default UserEditPage;
