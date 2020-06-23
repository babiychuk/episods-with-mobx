import React from 'react';
import { observer } from 'mobx-react';

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const EpisodInfo = ({openEpisodjs, charactersjs}) => {

    return <div >
        <Grid className="episodModal">
            <Grid>Название серии: {openEpisodjs.name}</Grid>
            <Grid>Дата выхода в эфир: {openEpisodjs.air_date}</Grid>
            <Grid>Персонажи: </Grid>
            {charactersjs.map((item, num) => (
                <Card key={num}>
                    <CardHeader
                        avatar={<Avatar alt={item.name} src={item.image} />}
                        title={item.name}
                        subheader={item.species}
                    />
                </Card>
            ))}
        </Grid>
    </div>;
};

export default observer(EpisodInfo);