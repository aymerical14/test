import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";

import plusIcon from "@iconify/icons-akar-icons/plus";

import AllTodos from '../../components/Layouts/AllTodos/AllTodos.layout';
import ButtonOrange from "../../components/UIs/ButtonOrange/ButtonOrange.ui";
import Container from "../../components/Layouts/Container/Container.layout";
import ContentTextLoader from "../../components/Loaders/content-text-loader/content-text-loader.component";
import './home.styles.scss';

import { getTodosAsync } from '../../store/reducers/todos/todos.actions';
import { selectTodosList } from '../../store/reducers/todos/todos.selectors';


const Home = ({
    todos,
    getTodosAsync,
}) => {

    const [loadingPage, setLoadingPage] = useState(false);

    useEffect(() => {
        setLoadingPage(true);
        getTodosAsync()
        .then((res) => {
            setLoadingPage(false);
        }).catch((err) => {
            console.error(err);
            setLoadingPage(false);
          });
    }, []);

    return (
        <>
        <div className="todos-page">
                
                <Container>
                    <div className="list-todos-top">
                        <h2 className="container-title">Liste des todos</h2>

                        <div className="list-todos-top-actions">
                            <ButtonOrange
                                typebutton="link"
                                // to={routes.loadInvoices}
                                icon={plusIcon}
                                // onClick={() => onOpenModal()}
                                >
                                Todos
                            </ButtonOrange>
                        </div>
                    </div>
                    {
                        loadingPage ?
                            <ContentTextLoader />
                            :
                            <AllTodos 
                                todos={todos.data}
                            />
                    }
                    
                    

                    {/* <FormApplication
                        state={state}
                        closeModal={closeModal}
                        handleSubmit={handleSubmit}
                        loading={state.isSubmitting}
                        handleChange={handleChange}
                    /> */}
                </Container>
            </div>
            
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    todos: selectTodosList,
});

const mapDispatchToProps = (dispatch) => ({
    getTodosAsync: () => dispatch(getTodosAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);