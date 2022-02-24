import React from 'react'
import style from './style.module.css'

class Gist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }

    handleVisitedState = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        const { image, name } = this.props.data
        const { isClicked } = this.state

        return (
            <>
                <div onClick={this.handleVisitedState} className={style.row}>
                    <div className={style.profileImg}>
                        <img style={isClicked ? { filter: 'brightness(70%)', } : null} src={image} />
                    </div>
                    <div className={style.name}>
                        <p style={isClicked ? { color: '#de5bbd' } : null} >{name}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Gist