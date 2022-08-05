

const Header = () => {



const findTranasctions = () => {
    console.log("Searching for your transaction");

}

const newTranasction = () => {
    console.log("Generating a new transaction");
}

return <div>
                <p className="header-paragraph" >Payments Application</p>
                <button onClick={findTranasctions}  >Find a transaction</button>
                <button onClick={newTranasction}  >New transaction</button>
        </div>
}


export default Header;