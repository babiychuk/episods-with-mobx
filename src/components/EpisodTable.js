import React from 'react';
import { observer } from 'mobx-react';

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { CircularProgress } from '@material-ui/core';

const tableHeadNames = [
    { id: 'id', field: 'Номер серии' },
    { id: 'name', field: 'Название серии' },
    { id: 'surname', field: 'епизод' },
];

const EpisodTable = ({episodesjs, setModalEpisode, getMoreInfo}) => {

    return <div >
        <Table>
            <TableHead >
                <TableRow className='tableHead'>
                    {tableHeadNames.map(item => (
                        <TableCell key={item.id}>
                            {item.field}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {episodesjs ?
                    episodesjs.results.map((item, num) => (
                        <TableRow className="episode" key={item.id} onClick={() => { setModalEpisode(true); getMoreInfo(item.url) }}>
                            <TableCell >Серия {item.id}</TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >{item.episode}</TableCell>
                        </TableRow>
                    ))
                    : <CircularProgress />}
            </TableBody>
        </Table>
    </div>;
};

export default observer(EpisodTable);