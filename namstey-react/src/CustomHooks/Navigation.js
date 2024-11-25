import React, { useEffect, useState } from "react";
const useNavigation = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const getData = (apiURL) => {
        try {
            setLoading(true);
            fetch(apiURL)
                .then(res => { return res.json() })
                .then(data => setData(data))
        }
        catch (err) 
            { console.log(err) }

        
        finally {
            setLoading(false);

        }
    }

    return {loading : loading,data : data,getData:getData}


}
export default useNavigation;