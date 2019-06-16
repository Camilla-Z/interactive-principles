import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
        };
    }

    renderCard() {
        return (
            this.state.flipped ?
                <div className={'card__face card__face--front'}>
                </div>
                :
                <div className={'card__face card__face--back'}>
                    <div className={'card__face--back__content'}>
                        <div className={'principle-number'}>
                            {this.props.id}
                        </div>
                        <div className={'principle-image'}>

                        </div>
                        <div className={'principle-title'}>
                            {this.props.title}
                        </div>
                    </div>
                    <div className={'card__face--back__category'}>
                        {this.props.categoryName}
                    </div>

                </div>
        );
    }

    flipCard() {
        this.setState({flipped: !this.state.flipped});
    }

    render() {
        return (
            <div className={'card card--' + this.props.category.toString()} onClick={() => this.flipCard()}>
                { this.renderCard() }
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.any,
    category: PropTypes.any,
    categoryName: PropTypes.any,
    title: PropTypes.any
};

export default Card;