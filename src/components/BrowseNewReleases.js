import React from 'react';

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

const BrowseNewReleases = ({ newReleases }) => {
    console.log(newReleases)
    return (
        <div>
            <h2>New Albums & Singles</h2>
            <ul className="tilelist">
                {newReleases.map(item => {
                    return (
                        <li
                            className="tile"
                            key={item.name}
                        >
                            <img
                                className="thumbnail"
                                alt={`Thumbnail for ${item.name} category`}
                                src={`${item.images[1].url}`}
                            />
                            <div className="albumName" title={item.name}>{truncate(item.name)}</div>
                            <div className="artistName">{item.artists[0].name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BrowseNewReleases;