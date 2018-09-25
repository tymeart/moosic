import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdPlayCircleOutline } from 'react-icons/lib/md';
import { truncate } from '../utilities/truncate';
import { listify } from '../utilities/listify';

const BrowseNewReleases = withRouter(({ newReleases, history }) => {
    console.log(newReleases)
    return (
        <div>
            <h2>New Albums & Singles</h2>
            <ul className="tilelist">
                {newReleases.map(album => {
                    return (
                        <li
                            className="tile"
                            key={album.id}
                        >
                            <div 
                                className="thumbnail"
                                onClick={() => { history.push(`/playlist/newreleases/${album.id}`) }}
                            >
                                <img
                                    alt={`Thumbnail for the album ${album.name}`}
                                    src={`${album.images[1].url}`}
                                />
                                <div className="overlay"><MdPlayCircleOutline /></div>
                            </div>
                            <div className="albumName" title={album.name}>{truncate(album.name)}</div>
                            <div className="artistName">{truncate(listify(album.artists))}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default BrowseNewReleases;