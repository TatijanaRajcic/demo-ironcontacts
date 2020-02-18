import React from 'react'
import "../stylesheets/Celebrity.css"

export default function Celebrity({id, image, name, popularity, deleteHandler}) {
  return (
    <tr className="Celebrity">
      <td><img src={image} alt="star"/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button onClick={()=>deleteHandler(id)}>Delete</button>
      </td>
    </tr>
  )
}

// export default function Celebrity({contact, deleteHandler}) {
//   return (
//     <tr className="Celebrity">
//       <td><img src={contact.pictureUrl} alt="star"/></td>
//       <td>{contact.name}</td>
//       <td>{contact.popularity}</td>
//       <td>
//         <button onClick={()=>deleteHandler(contact.id)}>Delete</button>
//       </td>
//     </tr>
//   )
// }