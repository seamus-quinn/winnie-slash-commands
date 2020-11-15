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


module.exports = (req, res) => {
    const expiration = Date.now() + 6000

    console.log(expiration)

    const body = {
        "profile": {
            "status_text": "Lunch",
            "status_emoji": ":pizza:",
            "status_expiration": 6000,
        }
    }

    fetch('https://slack.com/api/users.profile.set', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${process.env.SLACK_XOXP_TOKEN}` 
        },
    })
    .then(res => res.json())
    .then(json => res.json(json));
}
