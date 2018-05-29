import React from 'react';

const BrowseFeatured = ({ playlists }) => {
    console.log(playlists)
    return (
        <div>
            <h2>Featured</h2>
            <ul className="tilelist">
                {playlists.map(item => {
                    return (
                        <li
                            className="tile"
                            key={item.name}
                        >
                            <img
                                className="thumbnail"
                                alt={`Thumbnail for ${item.name} category`}
                                src={`${item.images[0].url}`}
                            />
                            <div className="playlistName">{item.name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BrowseFeatured;