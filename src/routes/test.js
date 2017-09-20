import React,{Component} from 'react';
import { render } from 'react-dom';

// const withGists = (PassedComponent) => (
//   class WithGists extends React.Component {
//     state = {
//       gists: []
//     }

//     componentDidMount() {
//       fetch("https://api.github.com/gists/public")
//       .then(r => r.json())
//       .then(gists => this.setState({
//         gists
//       }))
//     }

//     render() {
//       return <PassedComponent  gists={this.state.gists} />
//     }
//   }
// )

// const Gist = ({ id, html_url, files }) => (
//   <div>
//     <a href={html_url}>{id}</a>
//     <ul>
//       {Object.entries(files).map(([filename, data]) => 
//         <li><a href={data.raw_url} key={filename}>{filename}</a></li>
//       )}
//     </ul>
//   </div>
// )



// const Gists = ( gists ) => {
//   console.log(gists)
//   return (
//     <div>
//       <h1>Gists</h1>
//       {gists.map(gist =>
//         <div key={gist.id}>
//          <Gist {...gist} />
//           <hr />
//        </div>
//        )}
//     </div>
//     )
// }
// const GistsList = withGists(Gists)
const Gist = () => (
  <div>
    <a href='#'>fds</a>
    <ul>
      <li>fsf</li>
    </ul>
  </div>
)

const MyContainer = (MyComponent) =>(
  class extends Component {
    proc(wrappeddComponentInstance){
      wrappeddComponentInstance.method()
    }
    render(){
      const props = Object.assign({},this.props,{
        ref:this.proc.bind(this)
      })
      return <MyComponent  {...props   }/>
    }
  }
)

export default MyContainer(Gist)