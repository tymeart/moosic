import React from 'react';
import { connect } from 'react-redux';

const BrowseResults = ({ match }) => {
  return (
    <div>
      <h2>{match.params.category}</h2>
      {/* <ul className="tilelist">
        {this.props.categories.slice(1).map(item => {
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

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(BrowseResults);
