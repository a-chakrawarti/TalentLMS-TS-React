import {IEpisode, IAction, IState} from './interfaces'

const URL =
"http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

export const fetchDataAction = async (dispatch: any) => {
    const response = await fetch(URL);
    const data = await response.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: data._embedded.episodes,
    });
  };

export const toggleFavAction = (state: IState, dispatch: any, ep: IEpisode | any) :IAction => {
    const episodeInFav = state.favourites.includes(ep)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: ep
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== ep.id)
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
  }