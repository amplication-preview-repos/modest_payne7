import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataSourceList } from "./dataSource/DataSourceList";
import { DataSourceCreate } from "./dataSource/DataSourceCreate";
import { DataSourceEdit } from "./dataSource/DataSourceEdit";
import { DataSourceShow } from "./dataSource/DataSourceShow";
import { FinancialDataList } from "./financialData/FinancialDataList";
import { FinancialDataCreate } from "./financialData/FinancialDataCreate";
import { FinancialDataEdit } from "./financialData/FinancialDataEdit";
import { FinancialDataShow } from "./financialData/FinancialDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FinancialDashboard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataSource"
          list={DataSourceList}
          edit={DataSourceEdit}
          create={DataSourceCreate}
          show={DataSourceShow}
        />
        <Resource
          name="FinancialData"
          list={FinancialDataList}
          edit={FinancialDataEdit}
          create={FinancialDataCreate}
          show={FinancialDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
