import React from "react";

import DataTable from "../../UIs/Tables/DataTable/DataTable.ui";

const appHeaders = [
    {
      id: "id",
      name: "Id",
    },
    {
      id: "title",
      name: "Title"
    },
    {
      id: "completed",
      name: "Completed",
      display: (value) => {
        return (
          <span>
            {value
              ? "Oui"
              : "Non"}
          </span>
        );
      },
    },
       
  ];

  // const applications = [
  //   {
  //       "id": 1,
  //       "name": "App 1",
  //       "description": "This is new App"
  //   }
  // ]

  

const AllTodos = ({
    todos,
  }) => {

    const actions = [
      {
        isVisible: (item) => true,
        label: "Editer",
        action: (e, item) => { e.preventDefault(); console.log(item) }
      },
      {
        isVisible: (item) => true,
        label: "Details",
        action: (e, item) => { e.preventDefault(); console.log(item) },
      },
      {
        isVisible: (item) => true,
        label: "Supprimer",
        action: (e, item) => { e.preventDefault(); console.log(item) }
      },
    ];

    return (
        <>
            <div className="">
                <DataTable
                    data={todos}
                    radioVisible={false}
                    keyProp="id"
                    headers={appHeaders}
                    emptyMessage={"Aucun todo pour le moment"}
                    actions={actions}
                />
            </div>
            {/* <Panel
                toggleOpen={togglePanel}
                closeSidePanel={handleClose}
                title="Détails de la facture"
                position="right"
            >
                <InvoiceDetails details={details} isRecurring={isRecurring} />
            </Panel> */}
        </>
    )
}

export default AllTodos;