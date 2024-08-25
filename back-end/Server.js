require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const appID = process.env.API_ID;
const appKey = process.env.API_KEY;


app.get('/food/:name',async(req,res)=>{
    const foodName = req.params.name;

    try{
        
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
            params: {
                type: 'public',
                app_id: appID,
                app_key: appKey,
                q: foodName
            }
        });
        res.json(response.data);
        console.log("Is it working ? ");



    }
    catch(error){
        console.error("Caught error",error);
    }


});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})