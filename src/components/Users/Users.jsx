import React from 'react';
import images from "../../images/3135823.png"
import styles from './users.module.css'
import axios from 'axios'
class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&current=${this.props.pageSize}`).then( response => {
    
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalUsersCount)
        });
    }

    onPageChanged = (pageNumber) => {
        debugger;
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&current=${this.props.pageSize}`).then( response => {
    
            this.props.setUsers(response.data.items);
        });
    }
     

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;

        let pages = [];
        for(let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            <div>
            {pages.map(p=> {
                return <span className={this.props.currentPage === p && styles.selectPage} onClick={(e) => {this.onPageChanged(e)}}>{p}</span>
            })}

            </div>
            
        {
             this.props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : images} className={styles.userPhoto}/>
                    </div>
                </span>
                <span>
                    <div>
                        {u.followed 
                        ?  <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                        :  <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>

             </div>)
        }
    </div>
    }
}

export default Users;