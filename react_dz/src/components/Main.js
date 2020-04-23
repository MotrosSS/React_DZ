import React from 'react';
import { DATALIST } from '../dataList';
import ToDoList from './ToDoList';


function Main() {

    const dataList = DATALIST.map(data => <ToDoList key={data.id} info={data} />);

    return (
        <div id="mainList">
            {dataList}
        </div>
    );
}

export default Main;