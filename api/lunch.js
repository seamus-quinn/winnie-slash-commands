const fetch = require('node-fetch');

// POST /api/users.profile.set
// Host: slack.com
// Content-type: application/json; charset=utf-8
// Authorization: Bearer xoxp_secret_token
// {
//     "profile": {
//         "status_text": "riding a train",
//         "status_emoji": ":mountain_railway:",
//         "status_expiration": 0
//     }
// }


module.exports = async (req, res) => {
    const expiration = Date.now() + 9000

    console.log(expiration)

    const body = {
        "profile": {
            "status_text": "Lunch",
            "status_emoji": ":pizza:",
        }
    }

    const resOne = await fetch('https://slack.com/api/users.profile.set', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${process.env.SLACK_XOXP_TOKEN}` 
        },
    })
    .then()
    .then(res => res.json())

    const bodyTwo = {
        "profile": {
            "status_expiration": expiration,
        }
    }

    const resTwo = await fetch('https://slack.com/api/users.profile.set', {
        method: 'post',
        body:    JSON.stringify(bodyTwo),
        headers: { 
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${process.env.SLACK_XOXP_TOKEN}` 
        },
    })
    .then(res => res.json())

    res.json({...resOne, ...resTwo})
}
