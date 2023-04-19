import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";

import FormCard from "./UIs/FormCard/FormCard.ui";
import FormSelect from "./UIs/FormSelect/FormSelect.ui";
import FormInput from "./UIs/FormInput/FormInput.ui";
import ButtonOrange from "./UIs/ButtonOrange/ButtonOrange.ui";
import { WithFormikDisplayAlertMessage } from "./WithHOCs/WithFormik";

import Modal from "./UIs/Modal/Modal.ui";


const fields = {
    environement: "",
    name: "",
    description: "",
};

const optionEnv = [
    {
        label: 'Sandbox',
        value: 'SANDBOX'
    },
    {
        label: 'Live',
        value: 'LIVE'
    },
];


const FormApplication = ({
    state,
    closeModal,
    handleSubmit,
    loading,
}) => {

    const validationSchema = Yup.object({
        environement: Yup.string()
          .max(10, "Le nombre de caractères maximum est de 10")
          .required("Veuillez renseigner ce champ"),
          name: Yup.string()
          .max(255, "Le nombre de caractères maximum est de 255")
          .required("Veuillez renseigner ce champ"),
          description: Yup.string()
          .max(255, "Le nombre de caractères maximum est de 255")
          .required("Veuillez renseigner ce champ"),  
    })

    return (
        <Modal
            visible={state.openModal}
            handleModal={closeModal}
            // handleSubmit={handleSubmit}
            title="Ajouter une application"
        >
            <Formik
                initialValues={fields}
                validationSchema={validationSchema}
                onSubmit={(values, actions) =>{
                    handleSubmit(values)
                    .then(() => {
                        actions.resetForm({
                            values: {
                                environement: '',
                                name: '',
                                description: '',
                            },
                        });
                    });
                    
                } }
                validateOnMount={true}
            >
                {(formik) => (
                <>
                    <FormCard>
                        <div className="form-row">
                            <div className="col form-group">
                                <FormSelect
                                    name="environement"
                                    label="Environement"
                                    handleChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    // placeholder="Choisir un code marchand"
                                    options={optionEnv}
                                    required
                                    value={formik.values["environement"]}
                                    className={classnames("form-control custom-input")}
                                />
                                <WithFormikDisplayAlertMessage
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    name={`environement`}
                                />
                            </div>
                            <div className="col form-group">
                                <FormInput
                                    name="name"
                                    label="Nom"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values["name"]}
                                    className={classnames("form-control custom-input")}
                                />
                                <WithFormikDisplayAlertMessage
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    name={`name`}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col form-group">
                            <FormInput
                                name="description"
                                label="Description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values["description"]}
                                className={classnames("form-control custom-input")}
                            />
                            <WithFormikDisplayAlertMessage
                                touched={formik.touched}
                                errors={formik.errors}
                                name={`description`}
                            />
                            </div>
                        </div> 
                                                                
                        <br />
                        <div className="d-flex justify-content-end">
                            <ButtonOrange onClick={() => {formik.submitForm()}}>
                            {loading === true ? "En cours..." : "Créer l'appication"}
                            </ButtonOrange>
                        </div>
                    </FormCard>
                </>
                )}
            </Formik>
        </Modal>
    )
}

export default FormApplication;