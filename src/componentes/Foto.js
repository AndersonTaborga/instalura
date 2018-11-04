import React, { Component } from 'react';

export default class Foto extends Component {

    render() {
        return (
            <div className="foto">
                <FotoHeader/>
                <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/vp/92e28c7fcce9e8f61d2be7a773b9abed/5C7564A0/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/43589133_303541320467022_203598300496100535_n.jpg"/>
                <FotoInfo/>
                <FotoAtualizacoes/>
            </div>
        )
    }
}

class FotoHeader extends  Component {
    render() {
        return(
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src="https://instagram.fcgh10-1.fna.fbcdn.net/vp/029341c53dbd9b189bbc25081ad296a5/5C63DC00/t51.2885-19/s150x150/40409347_280801122534595_9138464368818651136_n.jpg" alt="foto do usuario"/>
                    <figcaption className="foto-usuario">
                        <a href="#">
                            alots
                        </a>
                    </figcaption>
                </figure>
                <time className="foto-data">03/10/2016 20:13</time>
            </header>
        )
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-in fo">
                <div className="foto-info-likes">

                    <a href="#">
                        alots_ssa
                    </a>

                    ,

                    <a href="#">
                        rafael_rollo
                    </a>

                    curtiram

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
                </p>

                <ul className="foto-info-comentarios">
                    <li className="comentario">
                        <a className="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                    </li>
                    <li className="comentario">
                        <a className="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                    </li>
                    <li className="comentario">
                        <a className="foto-info-autor">seguidor </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                    </li>
                </ul>
            </div>
        );
    }
}

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
                </form>

            </section>
        );
    }
}