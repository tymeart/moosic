import React from 'react';
import { withRouter } from 'react-router-dom';

const BrowseFeatured = withRouter(({ playlists, history }) => {
    console.log(playlists)
    return (
        <div>
            <h2>Featured</h2>
            <ul className="tilelist">
                {playlists.map(playlist => {
                    return (
                        <li
                            className="tile"
                            key={playlist.id}
                        >
                            <div 
                                className="thumbnail"
                                onClick={() => { history.push(`/playlist/featured/${playlist.id}`, 
                                    {
                                      ownerId: 'spotify',
                                      ownerName: 'Spotify',
                                      playlistName: playlist.name,
                                      thumbnail: playlist.images[0].url
                                    })
                                }}
                            >
                                <img
                                    alt={`Thumbnail for ${playlist.name} playlist`}
                                    src={`${playlist.images[0].url}`}
                                />
                                <div className="overlay"></div>
                            </div>
                            <div className="title">{playlist.name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default BrowseFeatured;