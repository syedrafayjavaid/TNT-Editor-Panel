import React from 'react'
let env = 'prod';

let config = {
    prod: {
        base_url: 'https://tanzeelapp88.herokuapp.com'
    },
    local: {
        base_url: 'https://auxamserver.herokuapp.com'
    },
   
}

if(env === 'prod'){
    config = config.prod

}

else if(env ==='local'){
    config = config.local
}

export default config;







