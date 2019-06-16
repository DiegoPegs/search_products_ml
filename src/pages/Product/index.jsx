import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Button from '../../components/Commun/Button';
import Image from '../../components/Commun/Image';

import { Link } from 'react-router-dom'

import './style.css'

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {}
        }
        
    }

    componentDidMount() {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ]).then(([item, description]) => {

            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text
                },
                loading: false
            })

        })
    }


    renderContent() {
        const { data } = this.state
        
        return (
            <Fragment>
                <div className="mdl-cell mdl-cell--12-col">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to={`/`}>
                        Voltar</Link>


                </div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <Image src={data.pictures[0].url} alt={data.titles} />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <div>
                            <h3>{data.title}</h3>
                            <p><b>Quantidade de Itens:</b> {data.available_quantity}</p>
                            <p><b>Garantia:</b> {data.warranty}</p>

                            <p><b>Valor:</b> R$ {data.price}</p>
                            <p><b>Localização do Vendedor:</b> {data.seller_address.city.name}</p>
                            <Button title="Comprar" ></Button>

                        </div>

                    </div>
                </div>
                <div className="divider div-transparent div-arrow-down">

                </div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h3>Descrição</h3>
                        <p>{data.description}</p>
                    </div>
                   
                </div>

            </Fragment>
        )
    }

    render() {
        const { loading } = this.state;
        
        return loading ?
            <div className="mdl-spinner mdl-js-spinner is-active spinner"></div> :
            this.renderContent();
    }
}

export default Product;