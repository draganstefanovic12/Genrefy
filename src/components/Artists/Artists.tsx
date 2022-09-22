import { Artist } from "../../types";

type ArtistsTypes = {
  topArtists: {
    items: Artist[];
  };
};

const Artists = ({ topArtists }: ArtistsTypes) => {
  return (
    <div className="content-ul-wrapper">
      <h2>Your top artists</h2>
      <ul className="content-ul">
        {topArtists.items.map((artist: Artist, i: number) => (
          <li key={i}>
            <p>{artist.name}</p>
            <img src={artist.images[0].url} alt="artist-img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;