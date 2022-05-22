import React from 'react';
import { Formik } from 'formik';
import { ButtonSubmit } from './ButtonSubmit';
import style from './Fragments.module.scss'

const FormNew = () => (
    <div>
        <h1>Добавьте новую задачу</h1>
        <Formik
            initialValues={{
                title: '',
                description: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className={style.block_form}>
                        <input
                            className={style.form_input}
                            placeholder='Заголовок'
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={values.email}
                        />
                    </div>
                    <div>
                        <textarea
                            className={style.form_input}
                            placeholder='Описание'
                            type="text"
                            name="description"
                            onChange={handleChange}
                            value={values.password}
                        />
                    </div>
                    <ButtonSubmit text={'Добавить'} />
                </form>
            )}
        </Formik>
    </div>
);

export default FormNew;