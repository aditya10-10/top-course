function Item(props){
    // const {name, price} = {name: "Aditya", price: 1000};
    const name = props.name;
    const price = props.price;
    return (
        <div> 
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}

export default Item;