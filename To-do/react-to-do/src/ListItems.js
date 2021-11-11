import React from 'react';


//https://reactjs.org/docs/faq-functions.html#gatsby-focus-wrapper
//map will loop through all the items and will be stored in the variable called ListItems
function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <button type="button" className="btn-close" aria-label="Close" style={{color: 'red'}} onClick={() => {
            props.deleteItem(item.key)
        }} icon="close" />
        </span>
     </p>
     
    </div>})
    //listItems will be displayed here in this return
    return <div>
        <p>
        {listItems}
        </p>
    
    </div>;
  }

  export default ListItems;
