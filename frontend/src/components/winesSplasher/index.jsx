





const WinesSplasher = () => {

    return (   

        <>
            <p>Top White</p>
            <div className="columns-3 text-center">

            {/* Query here in the database based on wines sold recently for each type. Then display the top
            ones by the bottle.  */}
            <p>Top Sparkling</p>
            <p>Top White</p>
            <p className="">Top Red</p>
            </div>



            <div className="columns-3 text-center">
            {/* Query the rest of the database 3 times for each, pulling by name except for the one that is in the top. potentially
            passing off the call to the component with type="red" and that component is creating the list */}
                <p>Top Sparkling</p>
                <p>Top Red</p>
                <p className="">Top Wines</p>
            </div>
        </>
 
    )

}

export default WinesSplasher;