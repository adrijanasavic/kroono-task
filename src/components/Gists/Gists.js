import React from 'react'
import style from './style.module.css'
import Gist from '../Gist/Gist'
import GistModel from '../../models/Gist'
import api from '../../services/api'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'


class PublicGists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfGists: [],
            displayPages: 3,
            gistPerPage: 30,
            currentPage: 1,
            totalPages: 36,
            loading: true,
            isClicked: false
        }
    }

    async handlePagination(page) {
        this.setState({
            loading: true
        })

        try {
            const response = await api(page)
            this.setState({
                arrOfGists: response.data.map(gist => new GistModel(gist)),
                currentPage: page,
                loading: false
            })

        } catch (error) {
            alert(error.response)
        }
    }

    async componentDidMount() {
        try {
            const response = await api()
            this.setState({
                arrOfGists: response.data.map(gist => new GistModel(gist)),
                loading: false
            })
        } catch (error) {
            alert(error.response)
        }
    }

    render() {

        let { arrOfGists, totalPages, displayPages, currentPage, loading } = this.state
        if (loading) {
            return <Loader />
        }

        let renderButtons = []

        let maxLeft = (currentPage - Math.floor(displayPages / 2))
    
        let maxRight = (currentPage + Math.floor(displayPages / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = displayPages
        }
        if (maxRight > totalPages) {
            maxLeft = totalPages - (displayPages - 1)

            if (maxLeft < 1) {
                maxLeft = 1
            }
            maxRight = totalPages
        }

        for (let i = maxLeft; i <= maxRight; i++) {
            renderButtons.push(<Button key={i} clicked={() => this.handlePagination(i)}>{i}</Button>)
        }

        //first page
        let first;
        if (currentPage !== 1) {
            first = <Button clicked={() => this.handlePagination(1)}>{'<<First'}</Button>
        }

        //last page
        let last;
        if (currentPage !== totalPages) {
            last = <Button clicked={() => this.handlePagination(totalPages)}>{'Last>>'}</Button>
        }

        return (
            <>
                <section id={'gist-section'} className={style.landigPage}>
                    {arrOfGists.map((gist, index) => <Gist key={index} data={gist} />)}
                </section>

                <div className={style.pagination}>
                    {first}
                    {renderButtons}
                    {last}
                </div>
            </>
        )
    }
}

export default PublicGists