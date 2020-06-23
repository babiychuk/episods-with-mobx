import { decorate, observable, action } from 'mobx';
import axios from 'axios';
import { toJS } from 'mobx';

class Store {
    episodes = null;
    filterEpisodes = null;
    page = 1;
    openEpisod = null;
    characters = [];

    getEpisodes() {
        const url = `https://rickandmortyapi.com/api/episode?page=${this.page}`;
        axios.get(url)
            .then((response) => {
                this.setEpisodes(response.data);
            })

    }

    setEpisodes(result) {
        this.episodes = result;
        this.filterEpisodes = result;
    }

    nextPage(page) {
        this.page = page + 1;
        this.getEpisodes()
    }

    prevPage(page) {
        this.page = page - 1;
        this.getEpisodes()
    }

    getMoreInfo(url) {
        axios.get(url)
            .then((response) => {
                this.setOpenEpisod(response.data);
            })
    }

    setOpenEpisod(result) {

        this.openEpisod = result;
        let charArr = [];

        result.characters.map((item) => (
            axios.get(item)
                .then((response) => {
                    charArr.push(response.data);
                })
        ));

        setTimeout(() => { this.characters = charArr; }, 1000);
    }

    filterEpisods(value) {

        let filterInput = value.toLowerCase(); 
        let filterEpisodes = toJS(this.filterEpisodes); 
        let displayEpisods = filterEpisodes.results.filter((el)=>{
            let filterValue = el.name.toLowerCase();
            return filterValue.indexOf(filterInput) !== -1;
        });
        
        this.showFilteEpisods(displayEpisods);
    }

    showFilteEpisods(displayEpisods) {
       this.episodes.results = displayEpisods;
    }
}



Store = decorate(Store, {
    episodes: observable,
    page: observable,
    openEpisod: observable,
    characters: observable,
    getEpisodes: action.bound,
    setEpisodes: action,
    nextPage: action.bound,
    prevPage: action.bound,
    getMoreInfo: action.bound,
    setOpenEpisod: action.bound,
    filterEpisods: action.bound,
    showFilteEpisods: action.bound,
});

export default new Store();
