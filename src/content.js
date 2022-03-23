import {Component} from 'react'
import dog from './dog.png'

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            numImages: 1
        }
        
    }
    handelChange = (event) =>{
        this.setState({numImages: event.target.value})
    }
    displayImages = () =>{
        let {numImages} = this.state;
        let images = [];
        for(let  i =0;i<numImages;i++){
            images.push(
                <img src={dog} alt={i.toString()}/>
            );
        }
        return(
            images
        );
    }
    render() {
        return (
          <div>
              <div>please sleect the number of images
                    <select value={this.state.numImages} onChange={this.handelChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
              </div>
              {this.displayImages()}
            <h1>Hello, world!</h1>
           
          </div>
        );
      }
}
export default Content
