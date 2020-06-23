import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';

import FilterForm from './FilterForm';
import EpisodTable from './EpisodTable';
import Pagination from './Pagination';
import EpisodInfo from './EpisodInfo';

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from '@material-ui/core';

import store from '../store';
import { observer } from 'mobx-react';

const Episodes = () => {
    const { episodes, getEpisodes, prevPage, nextPage, page, getMoreInfo, openEpisod, characters, filterEpisods } = store;

    useEffect(() => {
        getEpisodes();
    }, [getEpisodes]);

    const [modalEpisode, setModalEpisode] = useState(false);

    const episodesjs = toJS(episodes);
    const openEpisodjs = toJS(openEpisod);
    const charactersjs = toJS(characters);

   

    return <div>
        <Grid className="filter">
            <Grid className="filter_container">
                <FilterForm filter={(value) => filterEpisods(value)} />
            </Grid>
        </Grid>
        <Grid className="root">
            <EpisodTable episodesjs={episodesjs}  setModalEpisode={(value) => setModalEpisode(value)} getMoreInfo={(value) => getMoreInfo(value)}/>
            <Pagination episodesjs={episodesjs} prevPage={prevPage} nextPage={nextPage} page={page}/>

            <Dialog
                open={modalEpisode}
                aria-labelledby="modal-episode"
            >
                {openEpisodjs ? <EpisodInfo openEpisodjs={openEpisodjs} charactersjs={charactersjs} /> : <CircularProgress />}
                <DialogTitle id="modal-episode">
                    <Typography ><Button onClick={() => setModalEpisode(false)}> CLOSE </Button></Typography>
                </DialogTitle>
            </Dialog>

        </Grid>
    </div >;
};

export default observer(Episodes);