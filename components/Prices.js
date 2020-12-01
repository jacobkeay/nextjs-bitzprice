import React from "react";

class Prices extends React.Component {
  state = {
    currency: "GBP",
  };

  render() {
    const { bpi } = this.props.bpi;

    let list = "";
    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.USD.description}:<span> </span>
          <span className="badge badge-primary">{bpi.USD.code}</span>
          <strong>{bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.GBP.description}:<span> </span>
          <span className="badge badge-primary">{bpi.GBP.code}</span>
          <strong>{bpi.GBP.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.EUR.description}:<span> </span>
          <span className="badge badge-primary">{bpi.EUR.code}</span>
          <strong>{bpi.EUR.rate}</strong>
        </li>
      );
    }
    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
