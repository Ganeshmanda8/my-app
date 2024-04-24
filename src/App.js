import React from 'react';
// import MyFormComponent from './components/form/form';
// import HrComponent from './components/extra/hr';
// import TextComponent from './components/text/text';
// import TeamsComponent from './components/list/list';
// import ImageComponent from './components/image/image';
// import TableDataComponent from './components/table/table';
import ListComponents from './components/list/list_components';
import OrderList from './components/list/ordered-list';
function App() {
    return (
        <div>
            {/* <MyFormComponent />
            <HrComponent />
            <TextComponent />
            <HrComponent />
            <ImageComponent />
            <HrComponent />
            <TeamsComponent />            
            <HrComponent />
            <TableDataComponent /> */}
            <ListComponents/>
            <OrderList/>
        </div>
    );
}

export default App;
