import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import * as api from '../../api/api'

import Image from '../../components/Commun/Image';

class Search extends Component {

    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this)
        this.state = {
            results: []
        }
    }


    onSearch(event) {
        const value = event.currentTarget.value
        
        if (value.length > 3) {
            api.searchProduct(value).then(data => {
                this.setState({
                    results: data.results
                })
            })

        }
    }

    renderItem(item) {
        const NumberFormat = require('react-number-format');
        return (
            <div className="mdl-cell mdl-cell--4-col" key={item.id}>
                <div className="demo-card-square mdl-card mdl-shadow--2dp item">
                    <div className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">{item.title}</h2>
                    </div>
                    <div className="mdl-card__media">
                        <Image src={item.thumbnail}></Image>

                    </div>

                    <div className="mdl-card__supporting-text">
                     
                        <p><b>Valor:</b> <NumberFormat value={item.price} decimalScale={2} fixedDecimalScale={true} displayType={'text'} decimalSeparator=',' thousandSeparator='.' prefix={'R$'} renderText={value => <span>{value}</span>} /></p>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to={`/product/${item.id}`}>
                            Abrir Produto</Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                <input type="text" onChange={this.onSearch} />
                <div>
                    <div className="mdl-grid">
                        {this.state.results.map(this.renderItem)}
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Search;