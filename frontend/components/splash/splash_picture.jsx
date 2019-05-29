import React from 'react';

const splashPicture = props => {
    return (
        <div className="splash-pictures">
            <div className="wide-screen-pictures">
                <img className="picture computer" src={window.picture_computer}/>
                <img className="picture laptop" src={window.picture_laptop} />
                <img className="picture headset" src={window.picture_headset} />
                <img className="picture bomb" src={window.picture_bomb} />
                <img className="picture box" src={window.picture_box} />
                <img className="picture circle1" src={window.picture_circle} />
                <img className="picture circle2" src={window.picture_circle} />
                <img className="picture circle3" src={window.picture_circle} />
                <img className="picture circle4" src={window.picture_circle} />
                <img className="picture circle5" src={window.picture_circle} />
                <img className="picture coin1" src={window.picture_coin} />
                <img className="picture coin2" src={window.picture_coin} />
                <img className="picture controller" src={window.picture_controller} />
                <img className="picture disk" src={window.picture_disk} />
                <img className="picture floppy-disk" src={window.picture_floppy_disk} />
                <img className="picture open-circle1" src={window.picture_open_circle} />
                <img className="picture open-circle2" src={window.picture_open_circle} />
                <img className="picture open-circle3" src={window.picture_open_circle} />
                <img className="picture open-square1" src={window.picture_open_square} />
                <img className="picture open-square2" src={window.picture_open_square} />
                <img className="picture open-square3" src={window.picture_open_square} />
                <img className="picture open-triangle1" src={window.picture_open_triangle} />
                <img className="picture open-triangle2" src={window.picture_open_triangle} />
                <img className="picture open-triangle3" src={window.picture_open_triangle} />
                <img className="picture phone1" src={window.picture_phone_1} />
                <img className="picture phone2" src={window.picture_phone_2} />
                <img className="picture potion" src={window.picture_potion} />
                <img className="picture x-cross1" src={window.picture_x_cross} />
                <img className="picture x-cross2" src={window.picture_x_cross} />
            </div>

            <div className="narrow-screen-pictures">
                <img className="picture phone1-n" src={window.picture_phone_1} />
                <img className="picture phone2-n" src={window.picture_phone_2} />
                <img className="picture laptop-n" src={window.picture_laptop} />
                <img className="picture headset-n" src={window.picture_headset} />
            </div>
        </div>
    );
};

export default splashPicture;