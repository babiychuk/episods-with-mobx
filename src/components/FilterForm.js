import React from 'react';
import { observer } from 'mobx-react';

import Input from '@material-ui/core/Input';

const FilterForm = ({filter}) => {

    return <div className="w200">
        <Input            
            type="filter"
            name="filter"
            placeholder="название серии"
            onChange={(e)=>filter(e.target.value)}
        />
    </div>;
};

export default observer(FilterForm);