import React from 'react';

const BrowseGenres = ({ categories }) => {
    console.log(categories)
    return (
        <div>
            <h2>Genres & Moods</h2>
            <ul className="tilelist">
                {categories.slice(1).map(item => {
                    return (
                        <li
                            className="tile"
                            key={item.name}
                        >
                            <div className="thumbnail">
                                <img
                                    alt={`Thumbnail for ${item.name} category`}
                                    src={`${item.icons[0].url}`}
                                />
                                <div className="overlay"></div>
                            </div>
                            <div className="title">{item.name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BrowseGenres;