import React, { Component } from 'react'
import Celebrity from "../components/Celebrity"
import "../stylesheets/FullList.css"

export default class FullList extends Component {

  state = {
    contacts: this.props.contacts, // how do i get data from the props in a class? with this.props
    shortList: this.props.shortList
  }

  getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  addRandom = () => {
    this.setState({
      shortList: [...this.state.shortList, this.getRandom(this.state.contacts)]
    })
  }

  // With separe compare and sort functions

  // compareName = (a,b) => {
  //   return a.name.localeCompare(b.name);
  // }

  // comparePopularity = (a,b) => {
  //   return (a.popularity > b.popularity) ? 1 : -1
  // }

  // sortName = () => {
  //   this.setState({
  //     shortList: [...this.state.shortList].sort(this.compareName)
  //   })
  // }

  // sortPopularity = () => {
  //   this.setState({
  //     shortList: [...this.state.shortList].sort(this.comparePopularity)
  //   })
  // }

  // With sort and compare combined

  sortName = () => {
    this.setState({
      shortList: [...this.state.shortList].sort((a,b)=>a.name.localeCompare(b.name))
    })
  }

  sortPopularity = () => {
    this.setState({
      shortList: [...this.state.shortList].sort((a,b)=>(a.popularity > b.popularity) ? 1 : -1)
    })
  }

  removeContact = (id) => {
    this.setState({
      shortList: [...this.state.shortList].filter(el => el.id !== id)
    })
  }

  // With the main logic in the render

  render() {

    let finalContacts = this.state.shortList.map((contact,index) => {
      return <Celebrity 
        key={index}
        id={contact.id} // we could use index here too. it would slightly change what the removeContact functions does
        image={contact.pictureUrl} 
        name={contact.name} 
        popularity={contact.popularity}
        deleteHandler={this.removeContact}
      />
    })

    // let finalContacts = this.state.shortList.map(contact => {
    //   return <Celebrity 
    //     contact={contact}
    //     deleteHandler={this.removeContact}
    //   />
    // })

    return (
      <div className="FullList">
        <h1>IronContacts</h1>
        <div className="buttons-control">
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort By Name</button>
          <button onClick={this.sortPopularity}>Sort By Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {finalContacts}
          </tbody>
        </table>
      </div>
    )
  }

  // With the main logic in the return

  // render() {

  //   return (
  //     <div className="FullList">
  //       <h1>IronContacts</h1>
  //       <div className="buttons-control">
  //         <button onClick={this.addRandom}>Add Random Contact</button>
  //         <button onClick={this.sortName}>Sort By Name</button>
  //         <button onClick={this.sortPopularity}>Sort By Popularity</button>
  //       </div>
  //       <table>
  //         <thead>
  //           <tr>
  //             <td>Picture</td>
  //             <td>Name</td>
  //             <td>Popularity</td>
  //             <td>Action</td>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {this.state.shortList.length ?
  //           this.state.shortList.map(contact => {
  //             return <Celebrity 
  //               key={contact.id}
  //               id={contact.id}
  //               image={contact.pictureUrl} 
  //               name={contact.name} 
  //               popularity={contact.popularity}
  //               deleteHandler={this.removeContact}
  //             />
  //           })
  //           :
  //           <tr>
  //             <td>
  //               no star sorry
  //             </td>
  //           </tr>
  //           }
  //         </tbody>
  //       </table>
  //     </div>
  //   )
  // }

}