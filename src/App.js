import logo from './logo.svg';
import './App.css';
import React from 'react';
import SimpleCard, {setisFlipped} from './components/card'
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import PostData from './data/data.json'
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

const question = "Die"
class App extends React.Component {
  componentDidMount() {
    this.setState({});
    this.state = {value: ''};
  }
  constructor(props) {
    super(props)

    this.state = {
      items: PostData,
      showItems: 1,
      name: "",
      isflipped: false,
      value: ''
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  increase(event) {
    event.preventDefault()
    this.setState({ showItems: this.state.showItems+1 })

    console.log(this.state.showItems)
  }

  decrease(event) {
    event.preventDefault()
    this.setState({ showItems: this.state.showItems-1 })
    console.log(this.state.showItems)
  }

  validateGuess(event) {
    event.preventDefault()
  }


  render() {
    return (
      <div>
        <Title />
        {PostData.slice(this.state.showItems - 1, this.state.showItems).map(
          (questionDetail) => {
            return (
              <div key={questionDetail.id + 1}>
                <Subtitle question={questionDetail.kysymys} />
              </div>
            );
          }
        )}
        <ul className="flex-container">
          {PostData.slice(this.state.showItems - 1, this.state.showItems).map(
            (questionDetail) => {
              return (
                <div key={questionDetail.id + 2}>
                  <SimpleCard
                    className="flex-item"
                    number="1"
                    back={questionDetail.eka}
                    isflipped={this.state.isFlipped}
                  ></SimpleCard>
                </div>
              );
            }
          )}
          {PostData.slice(this.state.showItems - 1, this.state.showItems).map(
            (questionDetail) => {
              return (
                <div key={questionDetail.id + 3}>
                  <SimpleCard
                    className="flex-item"
                    number="2"
                    back={questionDetail.toka}
                    isflipped={this.state.isFlipped}
                  ></SimpleCard>
                </div>
              );
            }
          )}
        </ul>
        <br></br>
        <ul className="flex-container">
          {PostData.slice(this.state.showItems - 1, this.state.showItems).map(
            (questionDetail) => {
              return (
                <div key={questionDetail.id + 4}>
                  <SimpleCard
                    className="flex-item"
                    number="3"
                    back={questionDetail.kolmas}
                    isflipped={this.state.isFlipped}
                  ></SimpleCard>
                </div>
              );
            }
          )}
          {PostData.slice(this.state.showItems - 1, this.state.showItems).map(
            (questionDetail) => {
              return (
                <div key={questionDetail.id + 5}>
                  <SimpleCard
                    className="flex-item"
                    number="4"
                    back={questionDetail.neljäs}
                    isflipped={this.state.isFlipped}
                  ></SimpleCard>
                </div>
              );
            }
          )}
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul className="flex-container">
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
  <input type="submit" value="Submit" />

</form>
        </ul>

        <div className="footer">
          <Button variant="contained" color="primary" onClick={this.decrease}>
            <IoMdArrowRoundBack />
            Previous question
          </Button>

          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            onClick={this.increase}
          >
            Next question <IoMdArrowRoundForward />
          </Button>
        </div>
      </div>
    );
  }
}

export default App