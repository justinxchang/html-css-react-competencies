// import React, { Component } from 'react'
// import axios from 'axios';
// // import Emoji from './Components/Emoji.js';
// import Mapthrough from './Components/Mapthrough.js'
// // import Header from './Components/Header.js'
// import Question from './Components/Question.js'


// class ReactPage extends Component {
//     constructor() {
//         super();

//         this.state = {
//             post: '',
//             // quote: [],
//             posts: [],
//             edit: ''
//         }
//         this.editPost = this.editPost.bind(this)
//         this.deletePost = this.deletePost.bind(this)
//     }
//     handleNewPost(value) {
//         this.setState({
//             post: value
//         })
//     }

//     handlePostChange(value) {
//         this.setState({
//             edit: value
//         })
//     }

//     componentDidMount() {
//         axios.get('/api/posts')
//             .then(res => this.setState({ posts: res.data }))
//         axios.get('/api/quote')
//             .then(res => this.setState({ quote: res.data[0].content }))
//     }

//     addPost() {
//         const newPost = { post: this.state.post };
//         axios.post('/api/posts', newPost)
//             .then(res => this.setState({ posts: res.data }))
//     }

//     editPost(id) {
//         axios.put(`/api/posts/${id}`, { text: this.state.edit })
//             .then(res => this.setState({ posts: res.data }))
//     }

//     deletePost(id) {
//         axios.delete(`/api/posts/${id}`)
//             .then(res => this.setState({ posts: res.data }))
//     }


//     render() {
//         const posts1 = this.state.posts.map((post3) => {
//             return (
//                 <div className="post" key={props.post2.id}>
//             <h5>{props.post2.post}</h5>
//             <div class="editDelete">
//               <button className="button" onClick={() => props.editPost1(props.post2.id)}>Edit</button>

//               <DeleteCheck
//                 action={props.deletePost1} 
//                 dialog={['Delete', 'Confirm Delete']}
//                 post2={props.post2}/>
//             </div>
//           </div>
//             )
//         })

//         return (
//             <div className="App">
//                 <div><strong>Random Quote: </strong>
//                 </div>
//                 <div dangerouslySetInnerHTML={{ __html: this.state.quote }}>

//                 </div>

//                 <section>
//                     <div className="inputs">
//                         <label>
//                             Post: <input value={this.state.post} onChange={(event) => { this.handleNewPost(event.target.value) }} placeholder="Type your thoughts here" />
//                         </label>
//                         <label>
//                             Edit: <input value={this.state.edit} onChange={(event) => { this.handlePostChange(event.target.value) }} placeholder='Type your revised thought. Click "Edit"' />
//                         </label>
//                     </div>
//                     <button className="add" onClick={() => { this.addPost() }}>Add Post</button>
//                 </section>
//                 <div className="posts">
//                 </div>
//             </div>


//         );
//     }
// }

// export default ReactPage