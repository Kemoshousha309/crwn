import React from "react";
import CollectionItem from "../collectionItem/collectionItem.component";
import "./collection.styles.scss";

const Collection = ({title, items}) => (
  <div className="collection-preview">
    <h2>{title}</h2>
    <div className="collection-items">
      {
      items
      .filter((i, indx ) => indx < 4)
      .map(({id, ...otherItemProps}) => <CollectionItem key={id} {...otherItemProps} />)
      }
    </div>
  </div>
)

export default Collection;