import React from 'react';
import { observer } from 'mobx-react';

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Pagination = ({ episodesjs, prevPage, nextPage, page }) => {

    return <div >
        <Grid>
            {episodesjs ? episodesjs.results.length >= 16 ?
                episodesjs.info.prev ? <Button className="fl-Left" onClick={() => prevPage(page)}>предыдущая страница</Button> : null : null : null}

            {episodesjs ? episodesjs.results.length >= 20 ?
                episodesjs.info.next ? <Button className="fl-right" onClick={() => nextPage(page)}>следующая страница</Button> : null : null : null}
        </Grid>
    </div>;
};

export default observer(Pagination);