import React from 'react';

const BrowseGenres = ({ categories }) => {
    return (
        <div>
            <h2>Genres & Moods</h2>
            {/* <ul className="tilelist">
                {categories.slice(1).map(item => {
                    return (
                        <li
                            className="tile"
                            key={item.name}
                        >
                            <img
                                className="thumbnail"
                                alt={`Thumbnail for ${item.name} category`}
                                src={`${item.icons[0].url}`}
                            />
                            {item.name}
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
}

export default BrowseGenres;