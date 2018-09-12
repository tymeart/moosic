import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdPlayCircleOutline } from 'react-icons/lib/md';

const truncate = (string) => {
    if (string.length > 34) {
        var newStr = string.substring(0, 33);
        if (newStr[newStr.length - 1] === ' ') {
            return newStr.slice(0, 34) + '...';
        } else {
            return newStr + '...';
        }
    }
    return string;
}

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
                            key={album.name}
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
                            <div className="artistName">{album.artists[0].name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default BrowseNewReleases;