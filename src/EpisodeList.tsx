import React from "react";
import { IEpisode } from "./interfaces";

const EpisodeList = (props: any): JSX.Element[] => {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((ep: IEpisode) => {
    return (
      <section className="episode-box" key={ep.id}>
        {ep.image !== null ? (
          <img src={ep.image.medium} alt={`Rick & Morty ${ep.name}`}></img>
        ) : (
          ""
        )}
        <div>{ep.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {ep.season} Episode: {ep.number}
          </div>
          <button
            onClick={() => toggleFavAction(state, dispatch, ep)}
            type="button">
            {favourites.find((fav: IEpisode) => fav.id === ep.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </div>
      </section>
    );
  });
};

export default EpisodeList;
