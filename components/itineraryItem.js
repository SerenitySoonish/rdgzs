class ItineraryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log('ellp')
  }


render() {
 return (
   <div>{this.props.name}</div>
    )
  }
}
export default ItineraryItem