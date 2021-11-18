import { Component } from "react";
import Collection from "../../components/collection/collection.component";
import { SHOP_DATA } from "./ShopPage.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections : SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <Collection key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;