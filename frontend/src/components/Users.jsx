import React from "react";


class Users extends React.Component {
    state = {
        usersData: [],
        currentData: [],
        page: 1,
        detailData: [],
        postDetail: false,
    };
    size = 5;
    baseUrl = 'https://jsonplaceholder.typicode.com/';

     componentDidMount() {
         fetch(this.baseUrl + "posts").then(res => res.json())
        .then(response => {
            const data = response;
            const index = this.size * this.state.page;
            const currentData = data.slice(index - this.size, index);
            this.setState({usersData: data, currentData: currentData});
        })

     };



    handleNext = () =>  {
        let page = this.state.page + 1;
        if (page > 20) {
            page = 20;
        }
        const index = this.size * page;
        const currentData = this.state.usersData.slice(index - this.size, index);
        this.setState({currentData: currentData, page: page});

    };

    handlePrevious = () => {
        let page = this.state.page - 1;
        if (page < 1) {
            page = 1;
        }
        const index = this.size * page;
        const currentData = this.state.usersData.slice(index - this.size, index);
        this.setState({currentData: currentData, page: page});
    };

    handleUserId = (id) => {
        const url = this.baseUrl + "posts?userId=" + id;
        fetch(url).then(res => res.json()).then(response => {
            this.setState({detailData: response, postDetail: false});
        })
    };

    handlePostId = (id) => {
        const url = this.baseUrl + "comments?postId=" + id;
        fetch(url).then(res => res.json()).then(response => {
             this.setState({detailData: response, postDetail: true});
        })
    };
    render() {
        const items = [];
        const itemsDetail = [];
        const {currentData} = this.state;
        const {detailData} = this.state;
        for (const [index, value] of currentData.entries()) {
            items.push(
                <tr>
                    <td ><a href="#" onClick={() => this.handleUserId(value.userId)}>{value.userId}</a></td>
                    <td>{value.id}</td>
                    <td><a href="#" onClick={() => this.handlePostId(value.id)}>{value.id}</a></td>
                    <td>{value.title}</td>
                    <td>{value.body}</td>
                </tr>
            )
        }

        for (const [index, value] of detailData.entries()) {
            let tdDetail = <tr>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
            </tr>;

            if (this.state.postDetail) {
                 tdDetail = <tr>
                    <td>{value.postId}</td>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.body}</td>
                </tr>;
            }

            itemsDetail.push(tdDetail)
        }

        // detail table
        let thDetail = <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>;
        if (this.state.postDetail) {
            thDetail = <tr>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>;
        }
        return(
            <div>
                <header>
                    <h6><a href="/">home</a></h6>
                    <h3>Users - <a href="https://jsonplaceholder.typicode.com/"> info</a></h3>
                </header>
                <section className="table-users">
                    <table>
                        <thead>
                          <tr >
                            <th width="8%">User id</th>
                            <th width="3%">id</th>
                            <th width="4%">post</th>
                            <th width="26%">title</th>
                            <th>body</th>
                          </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                    <span> pagination -- <a href="#" onClick={this.handlePrevious}> /- previous  </a> ||  <a href="#" onClick={this.handleNext}> next >> </a></span>
                </section>
                <hr/>
                <section className={ this.state.detailData.length  ? 'other': 'hide'}>
                    <header> <h4>Details</h4></header>
                    <table>
                        <thead>
                            {thDetail}
                        </thead>
                        <tbody>
                            {itemsDetail}
                        </tbody>
                    </table>
                </section>

            </div>
        );
    }
}

export default Users;