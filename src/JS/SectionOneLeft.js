import React from 'react'
import '../CSS/SectionOneLeft.css'
import salad1 from '../images/salad1.jpg'
import salad2 from '../images/salad2.jpg'

function SectionOneLeft() {
    return (
        <div className="sectionOneLeft">

            <div className="sectionOneLeft-header">
                <div className="header-title">
                    <p>Justo Vulputate Tortor Sem</p>
                </div>

                <div className="header-paraOne">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="header-paraTwo">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                </div>

                <div className="header-paraThree">
                    <p className="paraThree-content">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        <blockQuote className="quote">Purus sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            <br/>
                            <blockquote className="name">- Jane Doe</blockquote>
                        </blockQuote>
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Etiam porta sem malesuada magna mollis euismod.Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

            <div className="sectionOneLeft-footer">
                <div className="footer-title">
                    <h1>More in this series</h1>
                </div>

                <div className="footer-item">
                    <div className="footer-img">
                        <img src={salad1}/>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-title">
                           <h1>Porta Parturient Fermentum Euismod</h1>
                        </div>
                        <div className= "footer-content-para">
                           <p>Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-item">
                    <div className="footer-img">
                        <img src={salad2}/>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-title">
                           <h1>Euismod Fermentum Ornare</h1>
                        </div>
                        <div className= "footer-content-para">
                           <p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOneLeft
